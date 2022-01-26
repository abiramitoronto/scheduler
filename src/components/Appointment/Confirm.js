import React from "react";
import Button from "components/Button";

export default function Confirm(props) {
  console.log("confirm",props.id);
  const deleteit = () => {
    props.onConfirm(props.id);
  } 
return (
<main className="appointment__card appointment__card--confirm">
  <h1 className="text--semi-bold">Delete the appointment?</h1>
  <section className="appointment__actions"  >
    <Button danger onClick={props.onCancel}>Cancel</Button>
    <Button danger onClick={deleteit}>Confirm</Button>
  </section>
</main>


);



}