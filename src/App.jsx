import "./App.css";
import Header from "./Components/Header/Header";
import CurrencyConverter from "./Services/CurrencyConverter";

const App = () => {
  return (
    <>
      <Header />
      <CurrencyConverter />
    </>
  );
};
export default App;
