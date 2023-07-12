import Image from "next/image";
import { CardProps } from "./types";

const Content = ({ name, email, phone, site }: Omit<CardProps, "image">) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 break-all">
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{name}</h3>

      <div className="flex items-center gap-1">
        <Image src="/email.svg" height={16} width={16} alt="email-icon" />
        <p className="text-sm text-gray-500 flex items-center gap-1">{email}</p>
      </div>

      <div className="flex items-center gap-1">
        <Image src="/phone.svg" height={16} width={16} alt="email-icon" />
        <p className="text-sm text-gray-500 flex items-center gap-1">{phone}</p>
      </div>

      <div className="flex items-center gap-1">
        <Image src="/site.svg" height={16} width={16} alt="email-icon" />
        <p className="text-sm text-gray-500 flex items-center gap-1">{site}</p>
      </div>
    </div>
  );
};

export default Content;
