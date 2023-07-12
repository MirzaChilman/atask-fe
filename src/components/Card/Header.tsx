import { CardProps } from "./types";

const Header = ({ title, stars }: Pick<CardProps, "title" | "stars">) => {
  return (
    <div className="bg-gray-200 pt-4 flex items-center justify-center rounded-tl-xl rounded-tr-xl">
      <p>{title}</p>
      <p>{stars}</p>
    </div>
  );
};

export default Header;
