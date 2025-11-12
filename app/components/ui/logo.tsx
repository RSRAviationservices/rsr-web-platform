import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="relative w-18 h-18 flex items-center justify-center">
        <Image
          src="/images/logo.png"
          alt="RSR Aviation Logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
