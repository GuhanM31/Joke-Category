import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchjoke } from "./jokeslice";

function App() {
  const [category, setcategory] = useState("");
  const [darkMode, setDarkMode] = useState(false); // State for dark mode
  const joke = useSelector((state) => state.joke.joke);
  const dispatch = useDispatch();

  function handlechangecategory(event) {
    setcategory(event.target.value);
  }

  function handlefetch() {
    if (!category) {
      alert(
        "Please select a valid category:\n\n" +
          [
            "animal",
            "career",
            "celebrity",
            "dev",
            "explicit",
            "fashion",
            "food",
            "history",
            "money",
            "movie",
            "music",
            "political",
            "religion",
            "science",
            "sport",
            "travel",
          ].join(", ")
      );
    } else {
      dispatch(fetchjoke(category));
    }
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? "light" : "dark";
  }

  return (
    <div className="app">
      <h1>Random Joke Generator</h1>
      <div className="input-container">
        <label htmlFor="category">Enter a Joke Category:</label>
        <input
          id="category"
          type="text"
          onChange={handlechangecategory}
          placeholder="enter any Category"
        />
        <button onClick={handlefetch}>Fetch Joke</button>
      </div>
      <h2>Joke:</h2>
<p key={joke} className="joke">{joke}</p>

      <button className="toggle-button" onClick={toggleDarkMode}>
       {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default App;
