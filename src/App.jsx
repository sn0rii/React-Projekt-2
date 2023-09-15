import "./App.css";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Loading from "./Components/Loading/Loading";
import CurrencyConverter from "./Services/CurrencyConventer";

const App = () => {
  return (
    <>
      <Header />
      {/* <Form /> */}
      <CurrencyConverter />
      {/* <Loading /> */}
    </>
  );
};
export default App;
