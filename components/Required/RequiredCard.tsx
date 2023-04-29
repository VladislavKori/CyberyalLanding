import Image from "next/image";

interface RequiredCard {
  social?: string
  icon: string
  title: string
  text: string
} 

function RequiredCard({ social = "", icon, title, text}: RequiredCard) {
  return (
    <div className={`required__cards__card ${social}`}>
      <Image className="required__icon" src={icon} alt={title} />
      <h4 className="required__title">{title}</h4>
      <p className="required__desc">{text}</p>
    </div>
  );
}

export default RequiredCard;
