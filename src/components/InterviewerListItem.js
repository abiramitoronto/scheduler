import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";
// InterviewerListItem renders individual interviewer name along with their avatar
export default function InterviewerListItem(props) {
  // eslint-disable-next-line
  const {id,name,avatar,onChange} = props;
  const interViewerClass = classNames("interviewers__item",{"interviewers__item--selected" : props.selected});
  return (
    <li className={interViewerClass} onClick={onChange}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      /> 
      {props.selected && name}
    </li>
  );
}