import "bootstrap/dist/css/bootstrap.min.css"; // import Bootstrap stylesheet
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <MyNav></MyNav>
      <Welcome></Welcome>
      <MyFooter></MyFooter>
      {/* 
      <AllTheBooks></AllTheBooks>
       */}
    </>
  );
}

export default App;
