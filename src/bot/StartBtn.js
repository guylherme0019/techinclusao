import React from "react";


export default function startBtn(props) {

const initialAction = () => {
    props.actions.initialAction();
}

  return (
    <button classname='start-btn' onClick={() => initialAction()}>vamos começar</button>
  )
};
