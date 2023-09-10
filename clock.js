function Clock() {
  const [timeLeft, setTimeLeft] = React.useState("25:00");
  const [start, setStart] = React.useState(false);

  const [breakTime, setBreak] = React.useState(5);
  const handleBreakChange = (val) => {
    if (val >= 0 && breakTime < 60) {
      setBreak(breakTime + val);
    } else if (val <= 0 && breakTime > 1) {
      setBreak(breakTime + val);
    }
  };

  const [sessionTime, setSession] = React.useState(25);
  const handleSessionChange = (val) => {
    if (val >= 0 && sessionTime < 60) {
      setSession(sessionTime + val);
    } else if (val <= 0 && sessionTime > 1) {
      setSession(sessionTime + val);
    }
  };
  const reset = () => {
    setSession(25);
    setBreak(5);
    setTimeLeft("25:00");
  };

  const work = () => {
      if (timeLeft !== "0:0") {
        let time = timeLeft.split(":");
        time[0] = parseInt(time[0]);
        time[1] = parseInt(time[1]);
        setInterval(() => {
          if (time[1] === 0) {
            time[0]--;
            time[1] = 59;
          } else {
            time[1]--;
          }
          if (time[0] < 10 && time[1] < 10) {
            setTimeLeft("0" + time[0] + ":" + "0" + time[1]);
          } else if (time[1] < 10) {
            setTimeLeft(time[0] + ":" + "0" + time[1]);
          } else if (time[0] < 10) {
            setTimeLeft("0" + time[0] + ":" + time[1]);
          } else {
            setTimeLeft(time[0] + ":" + time[1]);
          }
        }, 1000);
      }
  };
  return (
    <>
      <h1>25 + 5 Clock</h1>
      <div className="heads">
        <div id="break-label">Break Length</div>
        <div className="setTime">
          <button
            id="break-increment"
            className="btn"
            onClick={() => handleBreakChange(1)}
          >
            <i class="fa-solid fa-up-long"></i>
          </button>
          <p id="break-length">{breakTime}</p>
          <button
            id="break-decrement"
            className="btn"
            onClick={() => handleBreakChange(-1)}
          >
            <i class="fa-solid fa-down-long"></i>
          </button>
        </div>
      </div>
      <div className="heads">
        <div id="session-label">Session Length</div>
        <div className="setTime">
          <button
            id="session-increment"
            className="btn"
            onClick={() => handleSessionChange(1)}
          >
            <i class="fa-solid fa-up-long"></i>
          </button>
          <p id="session-length">{sessionTime}</p>
          <button
            id="session-decrement"
            className="btn"
            onClick={() => handleSessionChange(-1)}
          >
            <i class="fa-solid fa-down-long"></i>
          </button>
        </div>
      </div>
      <div className="display">
        <h4 id="timer-label">Session</h4>
        <p id="time-left">{timeLeft}</p>
      </div>
      <div className="tasks">
        <button className="btn" id="start_stop" onClick={work}>
          <i class="fa-solid fa-play"></i>
        </button>

        <button className="btn">
          <i class="fa-solid fa-pause"></i>
        </button>

        <button className="btn" id="reset" onClick={reset}>
          <i class="fa-solid fa-rotate"></i>
        </button>
        <p>
          Designed and Coded By: <br /> Zabil
        </p>
      </div>
    </>
  );
}
ReactDOM.render(<Clock />, document.getElementById("root"));
