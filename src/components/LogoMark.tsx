import Image from "next/image";

type LogoMarkProps = {
  alt?: string;
  className?: string;
};

export default function LogoMark({
  alt = "Logo ELECTROPATRIMONIO",
  className = "",
}: LogoMarkProps) {
  return (
    <span
      className={`relative block aspect-square shrink-0 overflow-hidden rounded-full bg-white ${className}`}
    >
      <Image
        src="/logo.png"
        alt={alt}
        fill
        sizes="(max-width: 768px) 96px, 256px"
        className="object-cover object-center"
      />
    </span>
  );
}
