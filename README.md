# Interview Scheduler

The Interview scheduler React based app that helps us to schedule an appointment with the selected interviewer. The scheduler shows the available apointment slots based on the timings for any day. Additionally it also displays day wise spots that can be booked. It helps us to Edit/Delete an appoitment.


## Final Product

Login URL ==> http://localhost:8000

## Main Page

!["Main Page"](https://github.com/abiramitoronto/scheduler/blob/master/docs/1_MainPage.png)


## Create Appointment


!["Create Appointment"](https://github.com/abiramitoronto/scheduler/blob/master/docs/2_Create_Appointment.png)


## Show Appointment


!["Show Appointment"](https://github.com/abiramitoronto/scheduler/blob/master/docs/3_Show%20Appointment.png)


## Edit Appointment


!["Edit Appointment"](https://github.com/abiramitoronto/scheduler/blob/master/docs/4-Edit%20Appointment.png)


## Delete Appointment


!["Delete Appointment"](https://github.com/abiramitoronto/scheduler/blob/master/docs/5_Delete%20Appointment%20.png)


## Saving Visual


!["Saving Visual"](https://github.com/abiramitoronto/scheduler/blob/master/docs/6_Saving%20Visual.png)


## Deleting Visual


!["Deleting Visual"](https://github.com/abiramitoronto/scheduler/blob/master/docs/7_Deleting%20Visual.png)



## Dependencies

   - axios: ^0.25.0
   - classnames: ^2.2.6
   - normalize.css: ^8.0.1
   - react: ^16.14.0
   - react-dom: ^16.9.0
   - react-scripts: 3.0.0


## Dev Dependencies

    @babel/core: ^7.4.3
    @storybook/addon-actions: ^5.0.10
    @storybook/addon-backgrounds: ^5.0.10
    @storybook/addon-links: ^5.0.10
    @storybook/addons: ^5.0.10
    @storybook/react: ^5.0.10
    @testing-library/jest-dom: ^4.0.0
    @testing-library/react: ^8.0.7
    @testing-library/react-hooks: ^7.0.2
    babel-loader: ^8.0.5
    node-sass: ^4.14.0
    prop-types: ^15.8.1
    react-test-renderer: ^16.14.0


## Setup


Install dependencies with `npm install`.


## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Helper Functions


`getAppointmentsForDay` function returns array of appointment objects that are 
matching with the selected day.


```js
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
```


`getInterview` function returns interview object that was selected by the front-end user

```js
export function getInterview(state,interview) {

 if (!interview) {
   return null;
 }
 const interviewObj = {
   student: interview.student,
   interviewer : state.interviewers[interview.interviewer]
 };

 return interviewObj; 
}

```


`getInterviewersForDay` function returns array of interviewers object that are matching
with the selected day. 

```js
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

 ```


 ## Hooks


`useVisualMode` hooks function helps us to transtion to different windows based on the 
data entered/selected by the user

```js
export default function useVisualMode(initial) {
  const [mode,setMode] = useState(initial);
  // eslint-disable-next-line
  const [history, setHistory] = useState([initial]);
  function transition(newmode,replace = false) {
    if (replace) {
      history[history.length - 1] = newmode;
    } else {
      history.push(newmode);
    }
     return setMode(newmode);
  }
  function back() {
    if (history.length > 1) {
        history.pop();
    }
    return setMode(history[history.length-1]);
  }
  return {mode,transition,back};
};

```