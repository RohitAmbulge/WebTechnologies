import axios from "axios";
import React, { useEffect, useState } from "react";

const EventTask = () => {
  let [api, setApi] = useState([]);

  const [state, setState] = useState({
    quote: "",
    author: "",
    id: Date.now(),
  });
  
  useEffect(() => {
    axios
      .get("http://localhost:8080/quotes")
      .then((res) => setApi(res.data));
  }, []);

  let handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/quotes", state).then(() => {
      setState({
        quote: "",
        author: "",
        id: Date.now(),
      });

      axios
        .get("http://localhost:8080/quotes")
        .then((res) => setApi(res.data));
    });
  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <textarea
            name="quote"
            value={state.quote}
            onChange={handleChange}
          ></textarea>{" "}
          <br />

          <input
            type="text"
            name="author"
            value={state.author}
            onChange={handleChange}
          />{" "}
          <br />

          <button>Add Quote</button>
        </form>
      </div>

      <h1>All Quotes</h1>
      <div>
        {api.map((obj) => {
          return (
            <div>
              <p>{obj.quote}</p>
              <h4>
                {obj.author},{obj.id}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventTask;