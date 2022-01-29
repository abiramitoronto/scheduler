import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";
// DaylistItem component renders the Day name along with available spots for booking appointment
export default function DayListItem(props) {
  const dayClass = classNames("day-list__item",{"day-list__item--selected" : props.selected,
                                          "day-list__item--full" : props.spots === 0 ? true : false});
  const {name, spots, onChange} = props;
 
  const formatSpots = () => {
    let plural = " spots";
    let singular = " spot";
    if (spots === 0) {
      return "no" + plural;
    } else if (spots === 1){
      return spots + singular
    } else {
      return spots + plural;
    }
  };
  return (
    <li className={dayClass} onClick={() => onChange(name)}>
      <h2 className="text--regular">{name}</h2> 
      <h3 className="text--light">{formatSpots()} remaining</h3>
    </li>
  );
}