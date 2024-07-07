import { Loader as MantineLoader } from "@mantine/core";
import { LoadingIcon } from "../Icons";

interface Props {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: string;
}
export default function Loader({ color = "orange", size = "sm" }: Props) {
  return (
    <div className=" w-full h-full flex items-center justify-center">
      <MantineLoader size={size} color={color} />
    </div>
  );
}
