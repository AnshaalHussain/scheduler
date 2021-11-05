import React, {useState} from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss"

export default function InterviewerListItem(props) {

  const interviewersClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });


  const [interviewer, setInterviewer] = useState();
  return (
    <li className={interviewersClass} onClick={() => props.setInterviewer(props.id)}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.name}
    </li>
  );
}
