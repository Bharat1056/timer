// function format(input) {
//   if (input.value.length === 1) {
//     input.value = "0" + input.value;
//   }
// }

const Timer_hour = document.getElementById("timer-hour");
const Timer_minute = document.getElementById("timer-minute");
const Timer_second = document.getElementById("timer-second");
const Timer_start = document.getElementById("timer-start");
const Timer_pause = document.getElementById("timer-cancel");
const Timer_reset = document.getElementById("timer-reset");
const Timer_audio = document.getElementById("myaudio");
let totalTime, a, b, c, x;

let Block1 = document.querySelector(".timer-hour");
let Block2 = document.querySelector(".timer-minute");
let Block3 = document.querySelector(".timer-second");

Block1.addEventListener("click", () => {
  Timer_pause.classList.add("block-mode");
  Timer_start.classList.remove("block-mode");
  Timer_reset.classList.remove("block-mode");
  clearInterval(a);
  clearInterval(b);
  clearInterval(c);
  clearInterval(x);
  Timer_audio.pause();
  Timer_audio.currentTime = 0;
});
Block2.addEventListener("click", () => {
  Timer_pause.classList.add("block-mode");
  Timer_start.classList.remove("block-mode");
  Timer_reset.classList.remove("block-mode");
  clearInterval(a);
  clearInterval(b);
  clearInterval(c);
  clearInterval(x);
  Timer_audio.pause();
  Timer_audio.currentTime = 0;
});
Block3.addEventListener("click", () => {
  Timer_pause.classList.add("block-mode");
  Timer_start.classList.remove("block-mode");
  Timer_reset.classList.remove("block-mode");
  clearInterval(a);
  clearInterval(b);
  clearInterval(c);
  clearInterval(x);
  Timer_audio.pause();
  Timer_audio.currentTime = 0;
});

Timer_start.addEventListener("click", () => {
  if (
  
    (parseInt(Timer_minute.value) != 0 && parseInt(Timer_hour.value) == 0 && parseInt(Timer_second.value) == 0) ||
    (parseInt(Timer_minute.value) == 0 && parseInt(Timer_hour.value) != 0 && parseInt(Timer_second.value) == 0) ||
    (parseInt(Timer_minute.value) == 0 && parseInt(Timer_hour.value) == 0 && parseInt(Timer_second.value) != 0) ||
    (parseInt(Timer_minute.value) != 0 && parseInt(Timer_hour.value) != 0 && parseInt(Timer_second.value) == 0) ||
    (parseInt(Timer_minute.value) == 0 && parseInt(Timer_hour.value) != 0 && parseInt(Timer_second.value) != 0) ||
    (parseInt(Timer_minute.value) != 0 && parseInt(Timer_hour.value) == 0 && parseInt(Timer_second.value) != 0) ||
    (parseInt(Timer_minute.value) != 0 && parseInt(Timer_hour.value) != 0 && parseInt(Timer_second.value) != 0) 

  
    ) 
  {
    totalTime =
      parseInt(Timer_hour.value) * 60 * 60 * 1000 +
      parseInt(Timer_minute.value) * 60 * 1000 + parseInt(Timer_second.value) * 1000;

    Timer_start.classList.add("block-mode");
    Timer_pause.classList.remove("block-mode");
    Timer_reset.classList.remove("block-mode");

    a = setInterval(() => {
      if (Timer_minute.value > 0) {
        if (Timer_minute.value < 11) {
          Timer_minute.value--;
          Timer_minute.value = "0" + Timer_minute.value;
        } else {
          Timer_minute.value -= 1;
        }
      }
    }, 60 * 1000);

    b = setInterval(() => {
      if (Timer_hour.value > 0) {
        if (Timer_hour.value < 11) {
          Timer_hour.value--;
          Timer_hour.value = "0" + Timer_hour.value;
        } else {
          Timer_hour.value -= 1;
        }
      }
    }, 60 * 60 * 1000);

    x = setInterval(() => {
      if (Timer_second.value > 0) {
        if (Timer_second.value < 11) {
          Timer_second.value--;
          Timer_second.value = "0" + Timer_second.value;
        } else {
          Timer_second.value -= 1;
        }
      }
    }, 1000);

    c = setInterval(() => {
      Timer_start.classList.remove("block-mode");
      Timer_audio.play();
    }, totalTime);
  }
});

Timer_reset.addEventListener("click", () => {
  Timer_reset.classList.add("block-mode");
  Timer_pause.classList.remove("block-mode");
  Timer_start.classList.remove("block-mode");
  clearInterval(a);
  clearInterval(b);
  clearInterval(c);
  clearInterval(x);
  Timer_hour.value = "00";
  Timer_minute.value = "00";
  Timer_second.value = "00";
  Timer_audio.pause();
  Timer_audio.currentTime = 0;
});

Timer_pause.addEventListener("click", () => {
  Timer_pause.classList.add("block-mode");
  Timer_start.classList.remove("block-mode");
  Timer_reset.classList.remove("block-mode");
  clearInterval(a);
  clearInterval(b);
  clearInterval(c);
  clearInterval(x);
  Timer_audio.pause();
  // Timer_audio.currentTime = 0;
});

