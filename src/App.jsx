import "./App.css";
import Header from "./Components/Header/Header";
import CurrencyConverter from "./Services/CurrencyConventer";

const App = () => {
  return (
    <>
      <Header />
      <CurrencyConverter />
    </>
  );
};
export default App;
