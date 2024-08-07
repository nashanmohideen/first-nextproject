interface CardProps {
  bgColor: string;
  text:string;
}

function Card({ bgColor,text }: CardProps) {
  return (
    <div
      className={`md:w-[200px] h-[200px] flex justify-center items-center ${bgColor} p-5 text-black`}
    >
      {text}
    </div>
  );
}

export default Card;
