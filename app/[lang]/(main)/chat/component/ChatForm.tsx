import Link from "next/link";
import React from "react";
import ChatInput from "./ChatInput";
import Button from "@/components/Button";

function ChatForm() {
  return (
    <div className="p-6 rounded-md shadow-md">
      <div className="flex text-2xl justify-center font-semibold">
        <span>Welcome to </span>
        <Link href={"/"} className="text-primary">
          JMEIA.COM
        </Link>
      </div>
      <form>
        <ChatInput label="Name" />
        <ChatInput label="Phone number" />
        <ChatInput
          label="Please choose the reason for the conversation "
          type="select"
        />
        <Button name="Send your message" loading={false}>
          <div>Send your message</div>
        </Button>
      </form>
    </div>
  );
}

export default ChatForm;
