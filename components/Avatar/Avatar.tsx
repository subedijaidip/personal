import clsx from "clsx";
import Image from "next/image";
import * as styles from "./Avatar.css";

interface AvatarProps {
  size?: "xl" | "xxxl";
  src: string;
  alt: string;
}

export const Avatar = ({ size = "xl", src, alt }: AvatarProps) => {
  return (
    <span className={clsx(styles.root, styles[size])}>
      <Image src={src} layout="fill" objectFit="cover" alt={alt} />
    </span>
  );
};
