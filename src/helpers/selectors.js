// getAppointmentsForDay function returns array of appointment objects that are 
// matching with the selected day.
export function getAppointmentsForDay(state, dayName) {
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

// getInterview function returns interview object that was selected by the front-end user
export function getInterview(state,interview) {

 if (!interview) {  
   return null
 }
 const interviewObj = {
   student: interview.student,
   interviewer : state.interviewers[interview.interviewer]
 };

 return interviewObj; 
}

// getInterviewersForDay function returns array of interviewers object that are matching
// with the selected day. 
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