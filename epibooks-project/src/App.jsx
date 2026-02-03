import "bootstrap/dist/css/bootstrap.min.css"; // import Bootstrap stylesheet
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNav></MyNav>
      <MyFooter></MyFooter>
      {/* <Welcome></Welcome>
      <AllTheBooks></AllTheBooks>
       */}
    </>
  );
}

export default App;
