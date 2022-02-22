import React, { useState } from 'react';
import {
  done,
  changebackground,
  changebackgroundtwo,
} from '../elements/functions';
function CountDown(props) {
  const [seconds, setSeconds] = useState(props.start);
  var minutes = Math.floor(seconds / 60);
  var secs = seconds - minutes * 60;
  let myTime = setTimeout(
    () => setSeconds(seconds - 1),

    1000
  );
  if (seconds <= 10) {
    if (seconds % 2 === 0) {
      changebackground();
    } else {
      changebackgroundtwo();
    }
  }
  if (seconds === 0) {
    done();
    clearTimeout(myTime);
    changebackgroundtwo();
  }

  return (
    <div>
      <p>
        {' '}
        {minutes}'{secs}''
      </p>
    </div>
  );
}

export default CountDown;
