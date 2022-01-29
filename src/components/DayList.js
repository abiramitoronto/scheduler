import React from "react";
import DayListItem from "./DayListItem";

// Daylist Component renders the side bar of the Main page that lists the days.
export default function DayList(props) {
  const dayListArr = props.days;
  const onChange = props.onChange;
  const parsedDayListItem = dayListArr.map(dayListItem => <DayListItem key={dayListItem.id} {...dayListItem} onChange={onChange}
  selected={props.value === dayListItem.name}/>);
  return <ul>
    {parsedDayListItem}
  </ul>;
}