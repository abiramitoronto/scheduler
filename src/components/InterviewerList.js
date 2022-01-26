import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";
export default function InterviewerList(props) {
const interviewers = props.interviewers;
const parsedInterviewerListItem = interviewers.map(interviewerlistitem  => 
<InterviewerListItem key={interviewerlistitem.id} {...interviewerlistitem} 
onChange={() => props.onChange(interviewerlistitem.id)} selected={interviewerlistitem.id === props.value}/>)
return (
<section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list"> {parsedInterviewerListItem}</ul>
</section>
);
}