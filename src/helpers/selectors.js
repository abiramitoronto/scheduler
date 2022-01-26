export function getAppointmentsForDay(state, dayName) {
//  const filteredByDay = state.days.filter(dayOut => dayOut.name === day);
 //const filteredByApp = state.appoitments.filter(appOut => appOut.id === filteredByDay.id);
 //console.log("test",filteredByApp);
 for (const day of state.days) {
   if (day.name === dayName) {
     const appIds = day.appointments;
     const appointments = [];
     for (const appId of appIds) {
       appointments.push(state.appointments[appId]);
     }
     return appointments;
   }
 }
 return [];
}

export function getInterview(state,interview) {

 if (!interview) {
   return null;
 }
 const interviewObj = {
   student: interview.student,
   interviewer : state.interviewers[interview.interviewer]
 };

 return interviewObj; 
 // const filterByInterviewer = state.appointmens.filter(app => app.interview.interviewer === interview.id);
 //const filteredByApp = state.appoitments.filter(appOut => appOut.id === filteredByDay.id);
 //console.log("test",filteredByApp);
//  return filterByInterviewer;
}

export function getInterviewersForDay(state,dayName) {
  for (const day of state.days) {
    if (day.name === dayName) {
      const interviewersId = day.interviewers;
      
      const interviewers = [];
      for (const interviewerId of interviewersId) {
        interviewers.push(state.interviewers[interviewerId]);
      }
      return interviewers;
    }
  }
  return [];
  
 
 }