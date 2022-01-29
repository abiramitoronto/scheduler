import React from "react";
//Empty Component displays the add icon when no appointments are booked.
export default function Empty(props) {
return (
<main className="appointment__add">
  <img
    className="appointment__add-button"
    src="images/add.png"
    alt="Add"
    onClick={props.onAdd}
  />
</main>
);

}