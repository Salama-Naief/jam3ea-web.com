import React from "react";

interface Props {
  title: string;
}
function FormTitle({ title }: Props) {
  return (
    <h2 className="text-[22px] font-bold my-8 text-center text-secondary">
      {title}
    </h2>
  );
}

export default FormTitle;
