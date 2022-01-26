
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function useApplicationData(){
const [state, setState] = useState({
  day:"Monday",
  days:[],
  appointments:{},
  interviewers:{}
});

const setDay = day => setState({...state, day });
  
useEffect(() => {
  Promise.all([
    axios.get('http://localhost:8001/api/days'),
    axios.get('http://localhost:8001/api/appointments'),
    axios.get('http://localhost:8001/api/interviewers')
  ]).then((all) => {
    console.log(all[0]); 
    console.log(all[1]); 
    console.log(all[2]);
    const [first, second, third] = all;
    setState(prev => ({ ...prev, days : first.data, appointments : second.data, interviewers: third.data}));
  });
},[]);  


function bookInterview(id, interview) {
  const appointment = {
    ...state.appointments[id],
    interview: { ...interview }
  };
  const appointments = {
    ...state.appointments,
    [id]: appointment
  };
  setState({...state,appointments});
  return axios.put(`/api/appointments/${id}`,{interview: appointment.interview}, (request,response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
  })
  // then((res) => {
  //   console.log("Res",res);
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
  console.log("Null",appointments);
  
  return axios.delete(`/api/appointments/${id}`, appointment).then(() => {
    setState({...state,appointments});
  })
}
}


