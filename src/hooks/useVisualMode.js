import { useState } from "react";
// useVisualMode function helps us to transtion to different windows based on the 
// data entered/selected by the user
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