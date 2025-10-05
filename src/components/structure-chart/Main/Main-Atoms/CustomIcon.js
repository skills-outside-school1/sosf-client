import Image from "next/image"

export default function CustomIcon({ 
  src, 
  className = "", 
  alt = "icon",
  ...props 
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={28}
      height={28}
      className={className}
      {...props}
    />
  );
}
