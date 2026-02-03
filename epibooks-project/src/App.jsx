import "bootstrap/dist/css/bootstrap.min.css"; // import Bootstrap stylesheet
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <header className="sticky-top">
        <MyNav></MyNav>
        <Welcome></Welcome>
      </header>
      <main className="min-vh-100 bg-dark py-4">
        <AllTheBooks></AllTheBooks>
      </main>
      <footer className="sticky-bottom">
        <MyFooter></MyFooter>
      </footer>
    </>
  );
}

export default App;
