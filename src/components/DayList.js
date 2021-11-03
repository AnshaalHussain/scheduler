import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const arrData = props.days;
  return (
    <ul>
      {arrData.map((x) => (
        <li>
          {
            <DayListItem
              key={x.id}
              name={x.name}
              spots={x.spots}
              selected={x.name === props.day}
              setDay={x.setDay}
            />
          }
        </li>
      ))}
    </ul>
  );
}
