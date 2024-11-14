import React from 'react';

const actionProvider = ({ createChatBotMessage, setState, children}) => {
  const initialAction = () => {
   const message = createChatBotMessage('Bem-vindo ao bot de bate-papo!');
   updateState(message)
  }
  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
  }));
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions:
          initialAction
          ,
        });
      })}
    </div>
  );
};

export default actionProvider;