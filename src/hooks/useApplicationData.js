import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
// useApplicationData contains the core logic that interacts with API server to retrieve
// the data from the database.
export default function useApplicationData(){
const [state, setState] = useState({
  day:"Monday",
  days:[],
  appointments:{},
  interviewers:{}
});
const CREATE = "CREATE";

const setDay = day => setState({...state, day });
  
useEffect(() => {
  Promise.all([
    axios.get('http://localhost:8001/api/days'),
    axios.get('http://localhost:8001/api/appointments'),
    axios.get('http://localhost:8001/api/interviewers')
  ]).then((all) => {
    const [first, second, third] = all;
    setState(prev => ({ ...prev, days : first.data, appointments : second.data, interviewers: third.data}));
  });
},[]);  

function updateSpots(requestType,mode) {
  const days = [...state.days];
  const dayIndex = days.findIndex((day) => day.name === state.day)
  const day = days[dayIndex];
  if (requestType === "BookAppointment") {
    if (mode === CREATE) {
      day.spots -= 1;
    }
  } else {
    day.spots += 1;
  }
  days[dayIndex] = {...day};
  return days;
}

function bookInterview(id, interview,mode) {
  const appointment = {
    ...state.appointments[id],
    interview: { ...interview }
  };
  const appointments = {
    ...state.appointments,
    [id]: appointment
  };
  const days = updateSpots("BookAppointment",mode);
  return axios.put(`/api/appointments/${id}`,{interview})
    .then (() => {
    setState({...state,appointments,days})
  })
}

function cancelInterview(id) {
  const appointment = {
    id:state.appointments[id],
    interview: null
  };
  const appointments = {
    ...state.appointments,
    [id]: appointment
  };
  const days = updateSpots();
  return axios.delete(`/api/appointments/${id}`, appointment).then(() => {
    setState({...state,appointments,days});
  });
}
return {state,setDay,bookInterview,cancelInterview};
};


