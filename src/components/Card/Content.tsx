import { CardProps } from "./types";

const Content = ({ description }: Pick<CardProps, "description">) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 break-all">
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
        {description}
      </h3>
    </div>
  );
};

export default Content;
