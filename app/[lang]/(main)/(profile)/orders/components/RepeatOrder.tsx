"use client";

import Button from "@/components/Button";
import useHttpClient from "@/lib/hooks/useHttpClient";
import { repeatOrder } from "../../services";
import { useContext, useState } from "react";
import Popup from "@/components/Popup";
import Image from "next/image";
import repeatOrderImg from "../../../../../../public/assets/repeatOrderSuccess.png";
import { AuthContext } from "@/lib/providers/AuthProvider";
import { useRouter } from "next/navigation";

interface RepeatOrderProps {
  id: string;
}

export default function RepeatOrder({ id }: RepeatOrderProps) {
  const { sendRequest, isLoading } = useHttpClient();
  const [repeated, setRepeated] = useState<boolean>(false);
  const { translate } = useContext(AuthContext);
  const router = useRouter();

  const repeatOrderHandler = async () => {
    const status = await sendRequest(repeatOrder(id));
    if (status) {
      setRepeated(true);
      router.refresh();
    }
  };

  return (
    <div>
      <Button
        loading={isLoading}
        className="bg-primary text-white py-2 px-6 font-bold !w-fit rounded-lg "
        onClick={repeatOrderHandler}
      >
        {translate("repeat_order")}
      </Button>
      <Popup close={setRepeated} isOpen={repeated}>
        <div>
          <Image
            src={repeatOrderImg}
            width={300}
            height={250}
            alt="repeated order"
          />
          <p className="text-lg font-bold text-green-700 text-center">
            Order has been repeated
          </p>
        </div>
      </Popup>
    </div>
  );
}
