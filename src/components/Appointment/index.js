import React, { Fragment } from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROE_DELETE";
export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id,interview)
    .then(() => transition(SHOW))
    .catch(() => transition(ERROR_SAVE, true));
   
  };
  function deleteit(id) {
    transition(DELETING, true);
    props.cancelInterview(id)
    .then(() => transition(EMPTY))
    .catch(() => transition(ERROR_DELETE, true));
    
  }

return (

<article className="appointment">
<Header time={props.time}/>
{mode === ERROR_SAVE && <Error onClose={() => transition(SHOW)}/>}
{mode === ERROR_DELETE && <Error onClose={() => transition(SHOW)}/>}
{mode === SAVING && <Status message={"Saving"} />}
{mode === DELETING && <Status message={"Deleting"} />}
{mode === CONFIRM && <Confirm  onCancel={() => transition(SHOW)} onConfirm={deleteit} id={props.id}/>}
{mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
{mode === SHOW && (
  <Show
    student={props.interview.student}
    interviewer={props.interview.interviewer}
    id={props.id}
    onDelete={() => transition(CONFIRM)}
    onEdit={() => transition(EDIT)}
  />
  
)}
{mode === CREATE && (
  <Form
    interviewers={props.interviewers}
    onCancel={() => back()}
    onSave={save}
  />
  )} 

{mode === EDIT && (
  <Form
    student={props.interview.student}
    interviewers={props.interviewers}
    onCancel={() => back()}
    onSave={save}
  />
  )} 
</article>

);
}