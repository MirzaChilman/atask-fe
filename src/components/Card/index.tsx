import type { CardProps } from "./types";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Card = ({
  title = "No Title",
  description = "No Desc",
  stars = 0,
  index,
}: CardProps & { index: number }) => {
  return (
    <div className="rounded-2xl bg-gradient-to-r w-full from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl mt-10">
      <div className="flex flex-col justify-between h-full rounded-xl bg-white">
        <Header title={title} stars={stars} />
        <Content description={description} />
        <Footer />
      </div>
    </div>
  );
};

export default Card;
