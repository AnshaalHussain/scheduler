import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const arrData = props.days;
  //console.log("TEST", arrData)
  return (
    <>
      <ul>
        {arrData.map((x, index) => (
          <li>
            {
              <DayListItem
                key={index}
                name={x.name}
                spots={x.spots}
                selected={x.name === props.value}
                setDay={props.onChange}
              />
            }
          </li>
        ))}
      </ul>
    </>
  );
}
