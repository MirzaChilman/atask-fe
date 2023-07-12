import Image from "next/image";

const Footer = () => {
  return (
    <div className="border-t-2 rounded-bl-2xl rounded-br-2xl p-3 flex justify-between bg-gray-50">
      <Image
        data-testid="card-footer-favorite"
        role="button"
        className="cursor-pointer"
        src="/favorite.svg"
        height={24}
        width={24}
        alt="favorite"
      />
      <Image
        data-testid="card-footer-edit"
        role="button"
        className="cursor-pointer"
        src="/edit.svg"
        height={24}
        width={24}
        alt="edit"
      />
      <Image
        data-testid="card-footer-trash"
        role="button"
        className="cursor-pointer"
        src="/trash.svg"
        height={24}
        width={24}
        alt="trash"
      />
    </div>
  );
};

export default Footer;
