import Image from "next/image";

export default function FishLogo2({ className = "" }) {
  return (
    <Image
      src="/logo_fish3.png"
      alt="Fish logo"
      width={422}
      height={359}
      className={`${className} select-none`}
      style={{ objectFit: "contain" }}
      draggable={false}
    />
  );
}