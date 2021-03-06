import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss"

export default function DayListItem(props) {
 //console.log(props, "PROPS DAY LIST ITEM")
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots
  });

  const formatSpots = (spotNum) => {
    if (spotNum === 0) {
      return "no spots remaining"
    } else if (spotNum === 1) {
      return "1 spot remaining"
    } else {
      return `${spotNum} spots remaining`;
    }

  };

  return (
  
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
   
  );
}