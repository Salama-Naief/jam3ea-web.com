import Image from "next/image";
import React from "react";
import chatImage from "../../../../public/assets/chat.png";
import ChatForm from "./component/ChatForm";
import Container from "@/components/Container";

function ChatPage() {
  return (
    <div className="pt-10">
      <Container>
        <h1 className="text-3xl font-bold text-secondary mb-5">Chat</h1>
        <div className=" md:grid md:grid-cols-2 ">
          <ChatForm />
          <div className="w-full flex items-start justify-center h-fit">
            <Image src={chatImage} alt="chat image" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ChatPage;
