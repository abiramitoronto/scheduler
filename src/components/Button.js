import React from "react";
import "components/Button.scss";
import classNames from "classnames";
// Button component displays the button to click based on the selected option
export default function Button(props) {

   let buttonClass = classNames("button",{" button--confirm" : props.confirm, 
                                "button--danger" : props.danger});

  return <button className={buttonClass} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>;
}
