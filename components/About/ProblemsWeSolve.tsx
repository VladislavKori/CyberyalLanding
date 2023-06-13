import React from 'react'
import Image from "next/image";
import CheatersIcon from "../../public/assets/problemsWeSolve/Cheaters.svg";
import LowIncomeIcon from "../../public/assets/problemsWeSolve/LowIncome.svg";
import SocialDisapprovalIcon from "../../public/assets/problemsWeSolve/SocialDisapproval.svg";
import UnbalancedIcon from "../../public/assets/problemsWeSolve/Unbalanced.svg";

const ProblemsList = [
  {
    icon: LowIncomeIcon,
    text: "Low income and a difficult entry point into the eSports industry",
  },
  {
    icon: SocialDisapprovalIcon,
    text: "Social disapproval of gaming as a rewarding activity, and the market's focus on the professional championships",
  },
  {
    icon: CheatersIcon,
    text: "Cheaters and dishonest players",
  },
  {
    icon: UnbalancedIcon,
    text: "Unbalanced matches",
  },
];

function ProblemsWeSolve() {
  return (
    <>
      <div className="problems_container">
        <div className="problems_container_image"></div>
        <div className="problems_container_inside">
          <h2 style={{ textAlign: "center" }}>Problems we solve</h2>
          <div className="problems_list">
            {ProblemsList.map((el, index) => (
              <React.Fragment key={index}>
                <div className="problems_list_item">
                  {el.icon()}
                  <p>{el.text}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProblemsWeSolve;
