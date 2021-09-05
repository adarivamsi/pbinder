import "./App.css";
import { Header, PbinderCard, SwipeOptions } from "./components";

function App() {
  return (
    <div className="app">
      <h1>Let's Build Tinder</h1>
      <Header></Header>
      <PbinderCard></PbinderCard>
      <SwipeOptions></SwipeOptions>
    </div>
  );
}

export default App;
