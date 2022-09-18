//import React from "react";
//import "../src/App.css";
//import App from "./App";
//mport { useState } from "react";

/* export const View = ({ faqs, deletefaq }) => {
  return faqs.map((faq) => (
    <div>
      <div key={faq.title}>
        <div
          style={{
            display: "flex",
          }}
        >
          <div>
            <h2>{faq.title}</h2>
          </div>

          <div>
            <h4>{faq.bodycontent}</h4>
          </div>
          <span>+</span>
        </div>
      </div>
      <button
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => deletefaq(faq.title)}
      >
        Delete
      </button>
    </div>
  ));
};



export function View() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div>
      <div className="viewcontainer"></div>
      <div className="accordion"></div>

      {faqs.map((faq, i) => (
        <div>
          <div className="item">
            <div className="title" onClick={() => toggle(i)}></div>
            <h2>{faq.title}</h2>
            <span>{selected === i ? "-" : "+"}</span>
          </div>
          <div className={selected === i ? "bodycontent show" : "bodycontent"}>
            {faq.bodycontent}
          </div>
        </div>
      ))}
    </div>
  );
}

export default View;
*/
