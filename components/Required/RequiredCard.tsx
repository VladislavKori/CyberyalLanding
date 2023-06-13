import Image from "next/image";
import { ReactElement, ReactNode } from "react";

interface RequiredCard {
  social?: string
  icon: any
  title: string
  text: string
} 

function RequiredCard({ social = "", icon, title, text}: RequiredCard) {
  return (
    <div className={`required__cards__card ${social}`}>
      <div className="required__icon">
        {icon()}
      </div>
      <h4 className="required__title">{title}</h4>
      <p className="required__desc">{text}</p>
    </div>
  );
}

export default RequiredCard;
