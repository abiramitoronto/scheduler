import React from "react";
//import { useState } from "react";
import "components/Application.scss";
import DayList from "./DayList";
import "components/Appointment";
import Appointment from "components/Appointment";
//import axios from "axios";
//import { useEffect } from "react";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";


// const days = [
//   {
//     id: 1,
//     name: "Monday",
//     spots: 2,
//   },
//   {
//     id: 2,
//     name: "Tuesday",
//     spots: 5,
//   },
//   {
//     id: 3,
//     name: "Wednesday",
//     spots: 0,
//   },
// ];

// const appointments = [
//   {
//     id: 1,
//     time: "12pm",
//   },
//   {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer:{
//         id: 3,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   {
//     id: 3,
//     time: "2pm",
//   },
//   {
//     id: 4,
//     time: "3pm",
//     interview: {
//       student: "Archie Andrews",
//       interviewer:{
//         id: 4,
//         name: "Cohana Roy",
//         avatar: "https://i.imgur.com/FK8V841.jpg",
//       }
//     }
//   },
//   {
//     id: 5,
//     time: "4pm",
//   }
// ];



export default function Application(props) {

  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();
  //const [days,setDays] = useState([]);
  //const [day, setDay] = useState("Monday");
  // const [state, setState] = useState({
  //   day:"Monday",
  //   days:[],
  //   appointments:{},
  //   interviewers:{}
  // });
  const dailyAppointments = getAppointmentsForDay(state,state.day);
  //const parsedAppointment = Object.values(state.appointments).map(appointment => <Appointment 
  //key={appointment.id} {...appointment}/>);
    const parsedAppointment = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    const interviewers = getInterviewersForDay(state,state.day);
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });

  // useEffect(() => {
  //   Promise.all([
  //     axios.get('http://localhost:8001/api/days'),
  //     axios.get('http://localhost:8001/api/appointments'),
  //     axios.get('http://localhost:8001/api/interviewers')
  //   ]).then((all) => {
  //     console.log(all[0]); 
  //     console.log(all[1]); 
  //     console.log(all[2]);
  //     const [first, second, third] = all;
  //     setState(prev => ({ ...prev, days : first.data, appointments : second.data, interviewers: third.data}));
  //   });
  // },[]);  
  // const setDay = day => setState({...state, day });
  
  // function bookInterview(id, interview) {
  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: { ...interview }
  //   };
  //   const appointments = {
  //     ...state.appointments,
  //     [id]: appointment
  //   };
  //   setState({...state,appointments});
  //   return axios.put(`/api/appointments/${id}`,{interview: appointment.interview}, (request,response) => {
  //     if (process.env.TEST_ERROR) {
  //       setTimeout(() => response.status(500).json({}), 1000);
  //       return;
  //     }
  //   }).then(() => {
  //     const spots = calculateSpots(state,state.day);
      
  //     setState({...state,state.days})
  //   })
  //   // then((res) => {
  //   //   console.log("Res",res);
  // }
  // function calculateSpots(state,dayName) {
  //   const availableSpots = 0;
  //   for (const day of state.days) {
  //     if (day.name === dayName) {
  //       const appIds = day.appointments;
  //       for (const appId of appIds) {
  //         if (appId.interview === null) {
  //           availableSpots += 1;
  //         } 
  //       }
  //     }
  //   }
  //   return availableSpots;
  //  }
  // }
  // function cancelInterview(id) {
  //   const appointment = {
  //     id:state.appointments[id],
  //     interview: null
  //   };
  //   const appointments = {
  //     ...state.appointments,
  //     [id]: appointment
  //   };
  //   console.log("Null",appointments);
    
  //   return axios.delete(`/api/appointments/${id}`, appointment).then(() => {
  //     setState({...state,appointments});
  //   })
  // }
  

  return (
    <main className="layout">
      <section className="sidebar">
      <img
  className="sidebar--centered"
  src="images/logo.png"
  alt="Interview Scheduler"
/>
<hr className="sidebar__separator sidebar--centered" />
<nav className="sidebar__menu">
<DayList
  days={state.days}
  value={state.day}
  onChange={setDay}
/>
</nav>
<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>

      </section>
      <section className="schedule">
        {parsedAppointment}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
