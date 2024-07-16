"use client";
import Link from "next/link";
import React, { useContext } from "react";
import ChatInput from "./ChatInput";
import Button from "@/components/Button";
import { AuthContext } from "@/lib/providers/AuthProvider";

function ChatForm() {
  const { translate } = useContext(AuthContext);

  // "welocme_to": "Welcome to",
  // "jameia.com": "JMEIA.COM",
  // "name": "Name",
  // "phone_number": "Phone number",
  // "conversation_reason": "Please choose the reason for the conversation",
  // "send_message": "Send your message",
  // "enter_following_data": "Please enter the following data"
  return (
    <div className="p-6 rounded-md shadow-md">
      <div className="flex text-2xl justify-center font-bold">
        <span>{translate("welocme_to")} </span>
        <Link href={"/"} className="text-primary px-1">
          {" "}
          {translate("jameia.com")}
        </Link>
      </div>
      <div className="text-center mb-4 mt-2">
        {translate("enter_following_data")}
      </div>
      <form>
        <ChatInput label={translate("name")} />
        <ChatInput label={translate("phone_number")} />
        <ChatInput label={translate("conversation_reason")} type="select" />
        <Button name={translate("send_message")} loading={false}>
          <div>{translate("send_message")}</div>
        </Button>
      </form>
    </div>
  );
}

export default ChatForm;
