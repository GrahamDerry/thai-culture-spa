import React from "react";
import { Link } from "react-router-dom";

export default function TableOfContents() {
  return (
    <section className="toc">
      <h1>Thai Culture Book</h1>
      <ol>
    <li><Link to="/lessons/etiquette">1. Etiquette</Link></li>
<li><Link to="/lessons/food">2. Food</Link></li>
<li><Link to="/lessons/dialects">3. Dialects</Link></li>
<li><Link to="/lessons/dress">4. Dress</Link></li>
<li><Link to="/lessons/wedding">5. Wedding</Link></li>
<li><Link to="/lessons/songkran">6. Songkran</Link></li>
<li><Link to="/lessons/sacred symbols">7. Sacred Symbols</Link></li>
      </ol>
    </section>
  );
}
