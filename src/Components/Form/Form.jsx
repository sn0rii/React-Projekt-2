import "./Form.css";
import React from "react";

const Form = ({
  selectedCode,
  setSelectedCode,
  inputValue,
  setInputValue,
  handleSubmit,
  result,
}) => {
  return (
    <main>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <select
            className="select"
            value={selectedCode}
            onChange={(e) => setSelectedCode(e.target.value)}
          >
            <option value="GBP">GPB</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CHF">CHF</option>
          </select>
          <input
            className="input"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn" type="submit">
            Przelicz
          </button>
          <div className="result">{result}</div>
        </form>
      </div>
    </main>
  );
};
//     <main>
//       <div className="container">
//         <form className="form">
//           <input type="number" id="input" className="input" step="any" />
//           <select className="select">
//             <option value="GBP">GPB</option>
//             <option value="USD">USD</option>
//             <option value="EUR">EUR</option>
//             <option value="CHF">CHF</option>
//           </select>

//           <button className="btn" id="btn" type="submit">
//             Przelicz
//           </button>
//           <div className="result">TO :</div>
//         </form>
//       </div>
//     </main>
//   );
// };
export default Form;
