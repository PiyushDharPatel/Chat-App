import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    if (!data.chatId) return; 

    const unsubscribe = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      if (doc.exists()) {
        const chatData = doc.data();
        
        if (chatData.messages && Array.isArray(chatData.messages)) {
          setMessages(chatData.messages);
        } else {
          console.error("Invalid chat data structure:", chatData);
          setMessages([]);
        }
      } else {
        console.error("Chat document not found:", data.chatId);
        setMessages([]);
      }
    });

    return () => unsubscribe();
  }, [data.chatId]);

  console.log(messages);

  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
