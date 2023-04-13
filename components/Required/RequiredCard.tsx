import Image from "next/image";

function RequiredCard({ el }: any) {
  return (
    <div className={`required__cards__card ${el.social}`}>
      <Image className="required__icon" src={el.icon} alt={el.title} />
      <h4 className="required__title">{el.title}</h4>
      <p className="required__desc">{el.text}</p>
    </div>
  );
}

export default RequiredCard;
