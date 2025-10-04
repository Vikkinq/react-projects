import "./App.css";

import ColorChanger from "./ColorChanger";

const colors = [
  "red",
  "green",
  "blue",
  "gray",
  "orange",
  "pink",
  "violet",
  "purple",
  "yellow",
  "brown",
  "teal",
  "cyan",
  "indigo",
  "lime",
  "skyblue",
  "magenta",
  "maroon",
  "gold",
  "coral",
  "navy",
  "crimson",
  "olive",
  "darkgreen",
  "chocolate",
];

function App() {
  return (
    <>
      <div>
        <h1>Color Changer</h1>
        <hr />
        <ColorChanger dataColor={colors} />
      </div>
    </>
  );
}

export default App;
