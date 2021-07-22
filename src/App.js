import firebase from "firebase";
import Header from "./components/Header";
import Notesform from "./components/Notesform";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Notesform />
      </main>
    </div>
  );
}

export default App;
