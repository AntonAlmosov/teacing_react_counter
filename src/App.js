import React from "react";

export function Counter(props) {
  const [counter, setCounter] = React.useState(0);
  return (
    <CounterWrapper>
      <PrimaryButton
        action="-"
        buttonColor={props.buttonColor}
        onClick={() => {
          setCounter(counter - 1);
          props.onClick(counter);
        }}
      />
      <CounterDisplayer counter={counter} buttonColor={props.buttonColor} />
      <SecondaryButton
        action="+"
        buttonColor={props.buttonColor}
        onClick={() => {
          setCounter(counter + 1);
          props.onClick(counter);
        }}
      />
    </CounterWrapper>
  );
}

const CounterWrapper = ({ children }) => {
  return (
    <div
      style={{
        width: "50vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

const determineColor = (color, colorToCheck, defaultColor, unequeal) => {
  if (unequeal) {
    return color !== colorToCheck ? defaultColor : color;
  }
  return color === colorToCheck ? defaultColor : color;
};

const ButtonWrapper = ({ style, children, onClick }) => {
  return (
    <div style={{ ...style, width: "280px", height: "50px" }} onClick={onClick}>
      {children}
    </div>
  );
};

const PrimaryButton = ({ action, buttonColor, onClick }) => {
  return (
    <ButtonWrapper
      style={{
        ...style,
        backgroundColor: determineColor(buttonColor, "white", "#000"),
        color: determineColor(buttonColor, "white", "#fff", true),
      }}
      onClick={onClick}
    >
      {action}
    </ButtonWrapper>
  );
};

const SecondaryButton = ({ action, buttonColor, onClick }) => {
  return (
    <ButtonWrapper
      style={{
        ...style,
        border: "2px solid black",
        borderColor: buttonColor === "white" ? "#000" : buttonColor,
      }}
      onClick={onClick}
    >
      {action}
    </ButtonWrapper>
  );
};

const CounterDisplayer = ({ counter, buttonColor }) => {
  return (
    <p
      style={{
        color: buttonColor === "white" ? "#000" : buttonColor,
        fontSize: "40px",
      }}
    >
      {counter}
    </p>
  );
};

export function HelloWorld() {
  return <p>Hello world</p>;
}

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "20%",
  height: "50px",
  fontSize: "40px",
  cursor: "pointer",
  userSelect: "none",
};
