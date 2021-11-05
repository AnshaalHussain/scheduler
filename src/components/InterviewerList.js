import React, {useState} from "react";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  const arrData = props.interviewers;
  //const [interviewer, setInterviewer] = useState();
  return (
   
      <ul className="interviewers__list">

        {arrData.map((x) => (
          <li>
            {
              <InterviewerListItem 
                key={x.id}
                avatar={x.avatar}
                name={x.name}
                setInterviewer={() => {props.onChange(x.id)}}
                selected={props.value === x.id}

              />
            }
          </li>
        ))}
      </ul>
   
  );
}
