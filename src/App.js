import React, { useState, useEffect } from "react";

import "./App.css"; // style file

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("faqs");//getItems from the local storage
  if (data) {
    return JSON.parse(data); //data from local storage is stringified
  } else {
    return []; //if nothing is there return an empty array
  }
};

export const App = () => {
  // main array of objects state || faqs state || faq array of objects
  const [faqs, setfaqs] = useState(getDatafromLS());

  // input field states
  const [title, setTitle] = useState("");
  const [bodycontent, setbodycontent] = useState("");

  // form submit event
  const handleAddfaqSubmit = (e) => {
    e.preventDefault();

    // creating an object
    let faq = {
      title,
      bodycontent,
    };

    setfaqs([...faqs, faq]);
    setTitle("");
    setbodycontent("");
  };

  // delete faq from LS
  const deletefaq = (title) => {
    const filteredfaqs = faqs.filter((element, index) => {
      return element.title !== title;
    });
    setfaqs(filteredfaqs);
  };

  ////////////////  /*accordion start*///////////////////////////////////

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    } else setSelected(i);
  };

  //////////////  /*accordion end*////////////////////////////////////

  ///////Ascending and Descending start////////////
  const Ascending = () => {
    let temp = [...faqs];
    temp.sort(function (a, b) {
      var keyA = a.title,
        keyB = b.title;
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    setfaqs([...temp]);
  };

  const Descending = () => {
    let temp = [...faqs];
    temp.sort(function (a, b) {
      var keyA = a.title,
        keyB = b.title;
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
    setfaqs([...temp]);
  };

  ///////Ascending and Descending End////////////

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("faqs", JSON.stringify(faqs)); //setItems from te local storage
  }, [faqs]);

  return (
    <div>
      <div className="wrapper">
        <h1>FAQ Window</h1>
        <p>You can View or Add FAQ here</p>

        <div className="main">
          <div className="form-container">
            <form
              autoComplete="off"
              className="form-group"
              onSubmit={handleAddfaqSubmit}
            >
              <h3>Title</h3>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              ></input>
              <br />
              <br />
              <br />
              <h3>Bodycontent</h3>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setbodycontent(e.target.value)}
                value={bodycontent}
              ></input>
              <br />
              <br />
              <br />
              <button
                type="submit"
                className="btn"
                style={{ cursor: "pointer" }}
              >
                <h3>ADD</h3>
              </button>
            </form>
          </div>

          {/*accordion start*/}
          <div>
            <button className="Ascending" onClick={() => Ascending()}>
              Sort by Ascending
            </button>
            <button className="Descending" onClick={() => Descending()}>
              Sort by Desscending
            </button>

            <div className="viewcontainer">
              <div className="accordion">
                {faqs.map((faq, i) => (
                  <div>
                    <div className="item">
                      <div className="title" onClick={() => toggle(i)}>
                        <h2>{faq.title}</h2>
                        <span>{selected === i ? "-" : "+"}</span>
                      </div>
                      <div
                        className={
                          selected === i ? "bodycontentshow" : "bodycontent"
                        }
                      >
                        <h3>{faq.bodycontent}</h3>
                      </div>

                      <button
                        className="viewcontainer-delbtn"
                        onClick={() => deletefaq(faq.title)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}

                <div>
                  <button
                    onClick={() => faqs([])}
                    style={{
                      color: "Black",
                      background: "red",
                      width: "100%",
                      cursor: "pointer",
                    }}
                  >
                    Remove All
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Accordion end */}

          
        </div>
      </div>
    </div>
  );
};



export default App;
