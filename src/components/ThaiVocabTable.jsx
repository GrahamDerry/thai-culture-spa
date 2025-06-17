import { vocabList } from "../data/vocab"; // remove if you hard-code rows
import "./ThaiVocabTable.css"; // optional: own CSS file
// or just rely on global styles.css

function ThaiVocabTable() {
  return (
    <table className="vocab-table">
      <thead>
        <tr>
          <th>ลำดับ</th>
          <th>คำศัพท์</th>
          <th>ความหมาย</th>
        </tr>
      </thead>
      <tbody>
        {vocabList.map(({ id, word, meaning }) => (
          <tr key={id}>
            <td>{id}.</td>
            <td>{word}</td>
            <td>{meaning}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ThaiVocabTable;
