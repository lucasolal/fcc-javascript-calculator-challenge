const { useState } = React;

function App() {

  [displayText, setDisplayText] = useState("0");
  [isFloat, toggleFloat] = useState(false);

  const handleButton = e => {
    const char = event.target.innerText;
    if (char == "AC") {
      setDisplayText("0");
      toggleFloat(false);
    } else
    if (/^[1-9]$/.test(char)) {
      setDisplayText(prevState => prevState == "0" ? `${char}` : `${prevState}${char}`);
    } else
    if (char === "0") {
      setDisplayText((prevState) =>
      prevState == "0" ? prevState : `${prevState}${char}`);
    } else
    if (char === ".") {
      setDisplayText(prevState => {
        const newDisplayText = isFloat ? prevState : `${prevState}.`;
        toggleFloat(true);
        return newDisplayText;
      });
    } else
    if (/^(\+|\/|\x)+$/.test(char)) {
      toggleFloat(false);
      setDisplayText(prevState => {
        const lastChar = displayText.slice(-1);
        if (lastChar == char)
        return prevState;else
        if (/^(\+|-|\/|\x)$/.test(lastChar))
        return `${prevState.replace(/[\+x\/-]+/, "")}${char}`;else

        return `${prevState}${char}`;
      });
    } else
    if (char == "-") {
      toggleFloat(false);
      setDisplayText(prevState => {
        const lastChar = displayText.slice(-1);
        if (lastChar == char)
        return prevState;else
        {
          return `${prevState}${char}`;
        }
      });
    } else
    if (char == "=") {
      setDisplayText(prevState => {
        const result = Math.round(10000 * eval(prevState.replace("x", "*"))) / 10000;
        if (Math.floor(result) != result)
        toggleFloat(true);
        return result.toString();
      });
    }
  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "calculator" }, /*#__PURE__*/
    React.createElement("input", {
      type: "text",
      id: "display",
      size: "14",
      value: displayText }), /*#__PURE__*/

    React.createElement("button", { id: "clear", onClick: handleButton }, "AC"), /*#__PURE__*/
    React.createElement("button", { id: "decimal", onClick: handleButton }, "."), /*#__PURE__*/
    React.createElement("button", { id: "add", onClick: handleButton }, "+"), /*#__PURE__*/
    React.createElement("button", { id: "subtract", onClick: handleButton }, "-"), /*#__PURE__*/
    React.createElement("button", { id: "multiply", onClick: handleButton }, "x"), /*#__PURE__*/
    React.createElement("button", { id: "divide", onClick: handleButton }, "/"), /*#__PURE__*/
    React.createElement("button", { id: "seven", onClick: handleButton }, "7"), /*#__PURE__*/
    React.createElement("button", { id: "eight", onClick: handleButton }, "8"), /*#__PURE__*/
    React.createElement("button", { id: "nine", onClick: handleButton }, "9"), /*#__PURE__*/
    React.createElement("button", { id: "four", onClick: handleButton }, "4"), /*#__PURE__*/
    React.createElement("button", { id: "five", onClick: handleButton }, "5"), /*#__PURE__*/
    React.createElement("button", { id: "six", onClick: handleButton }, "6"), /*#__PURE__*/
    React.createElement("button", { id: "one", onClick: handleButton }, "1"), /*#__PURE__*/
    React.createElement("button", { id: "two", onClick: handleButton }, "2"), /*#__PURE__*/
    React.createElement("button", { id: "three", onClick: handleButton }, "3"), /*#__PURE__*/
    React.createElement("button", { id: "zero", onClick: handleButton }, "0"), /*#__PURE__*/
    React.createElement("button", { id: "equals", onClick: handleButton }, "=")));


}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));