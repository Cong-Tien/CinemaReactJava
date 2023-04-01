import React from 'react'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { MessengerChat } from "react-messenger-chat-plugin";

export default function MessagerBoot() {
  return (
    <>
    <MessengerCustomerChat
    pageId="100088231668116"
    appId="662685252140725"
  />
  <MessengerChat
    pageId="100088231668116"
    language="sv_SE"
    themeColor={"#000000"}
    bottomSpacing={300}
    loggedInGreeting="loggedInGreeting"
    loggedOutGreeting="loggedOutGreeting"
    greetingDialogDisplay={"show"}
    debugMode={true}
    onMessengerShow={() => {
      console.log("onMessengerShow");
    }}
    onMessengerHide={() => {
      console.log("onMessengerHide");
    }}
    onMessengerDialogShow={() => {
      console.log("onMessengerDialogShow");
    }}
    onMessengerDialogHide={() => {
      console.log("onMessengerDialogHide");
    }}
    onMessengerMounted={() => {
      console.log("onMessengerMounted");
    }}
    onMessengerLoad={() => {
      console.log("onMessengerLoad");
    }}
  />
    </>
    
  )
}
