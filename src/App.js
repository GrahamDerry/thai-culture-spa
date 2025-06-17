        import React from "react";
        import "./styles.css";
        import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
        import TableOfContents from "./TableOfContents";
        import Topic01Etiquette from "./lessons/Topic01Etiquette";
import Topic02Food from "./lessons/Topic02Food";
import Topic03Dialects from "./lessons/Topic03Dialects";
import Topic04Dress from "./lessons/Topic04Dress";
import Topic05Wedding from "./lessons/Topic05Wedding";
import Topic06Songkran from "./lessons/Topic06Songkran";
import Topic07Sacred from "./lessons/Topic07Sacred";
        import ThaiVocabTable from "./components/ThaiVocabTable";

        export default function App() {
          return (
            <Router>
              <div className="App">
                <nav>
                  <ul>
                    <li><Link to="/">Home</Link></li>
              <li><Link to="/lessons/etiquette">Etiquette</Link></li>
          <li><Link to="/lessons/food">Food</Link></li>
          <li><Link to="/lessons/dialects">Dialects</Link></li>
          <li><Link to="/lessons/dress">Dress</Link></li>
          <li><Link to="/lessons/wedding">Wedding</Link></li>
          <li><Link to="/lessons/songkran">Songkran</Link></li>
          <li><Link to="/lessons/sacred symbols">Sacred Symbols</Link></li>
                    <li><Link to="/vocab">Vocab Table</Link></li>
                  </ul>
                </nav>

                <Routes>
                  <Route path="/" element={<TableOfContents />} />
              <Route path="/lessons/etiquette" element={<Topic01Etiquette />} />
          <Route path="/lessons/food" element={<Topic02Food />} />
          <Route path="/lessons/dialects" element={<Topic03Dialects />} />
          <Route path="/lessons/dress" element={<Topic04Dress />} />
          <Route path="/lessons/wedding" element={<Topic05Wedding />} />
          <Route path="/lessons/songkran" element={<Topic06Songkran />} />
          <Route path="/lessons/sacred symbols" element={<Topic07Sacred />} />
                  <Route path="/vocab" element={<ThaiVocabTable />} />
                </Routes>
              </div>
            </Router>
          );
        }
