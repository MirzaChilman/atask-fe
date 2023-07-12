import Image from "next/image";
import { CardProps } from "./types";

const Header = ({
  image,
  index,
}: Pick<CardProps, "image"> & { index: number }) => {
  return (
    <div className="bg-gray-200 pt-4 flex items-center justify-center rounded-tl-xl rounded-tr-xl">
      <Image
        data-testid="card-header-image"
        src={image}
        alt="avatar"
        width={200}
        height={200}
        quality={70}
        // for LCP
        priority={index === 0}
      />
    </div>
  );
};

export default Header;
