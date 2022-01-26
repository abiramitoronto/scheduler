import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode,setMode] = useState(initial);
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
}