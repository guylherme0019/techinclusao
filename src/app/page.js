"use client";

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../bot/config';
import MessageParser from '../bot/messageParser';
import ActionProvider from '../bot/actionProvider';
import './page.css';

export default function Home() {
  return (
    
    <div className='App'>
    <Chatbot
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
    />
  </div> 
  );
}
