import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
 initialMessages: [createChatBotMessage(`Good morning boss Welcome to the chat bot`, {
  widget: "startBtn"
 })],
 botName: "Intellect",
 widget: [
  {
    widgetname: "startbtn",
    widgetfunc: (props) => <StartBtn {...props} />,
  }
  ]
}; export default config;
