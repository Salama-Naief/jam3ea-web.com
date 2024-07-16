import Image from "next/image";
import React from "react";
import chatImage from "../../../../public/assets/chat.png";
import ChatForm from "./component/ChatForm";
import Container from "@/components/Container";
import { Locale } from "../../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";

async function ChatPage({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  return (
    <div className="pt-10">
      <Container>
        <h1 className="text-3xl font-bold text-secondary mb-5">
          {translate(dict, "chat")}
        </h1>
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
