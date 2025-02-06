import Image from "next/image";
import React from "react";

interface Props {
  height?: number;
  width?: number;
  className?: string;
}

const ArrowOutward = ({ height = 15, width = 15, className = "" }: Props) => {
  return (
    <Image
      src="/arrow_outward.svg"
      height={height}
      width={width}
      alt="Arrow Outward"
      className={`${className}`}
    />
  );
};

export default ArrowOutward;
