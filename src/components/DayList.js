import React from "react";
import DayListItem from "./DayListItem";


export default function DayList(props) {
  const dayListArr = props.days;
  const onChange = props.onChange;
  const parsedDayListItem = dayListArr.map(dayListItem => <DayListItem key={dayListItem.id} {...dayListItem} onChange={onChange}
  selected={props.value === dayListItem.name}/>);
  return <ul>
    {parsedDayListItem}
  </ul>;
}