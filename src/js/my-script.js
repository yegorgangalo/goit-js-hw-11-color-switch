const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyRef = document.querySelector('body');
const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');

function colorChange() {
    let i = randomIntegerFromInterval(0, colors.length - 1);
    bodyRef.style.backgroundColor = colors[i];
    console.log(colors[i]);
}
/* ==========var-1============================================= */
// let timerId = null;

// function setIntervalChange() {
//     timerId = setInterval(colorChange, 1000);
//     btnStart.removeEventListener('click', setIntervalChange);
// }

// function clearIntervalChange() {
//     clearInterval(timerId);
//     btnStart.addEventListener('click', setIntervalChange);
// }

// btnStart.addEventListener('click', setIntervalChange);
// btnStop.addEventListener('click', clearIntervalChange);
/* ==========end var-1============================================= */

/* ===========var-2============================================ */
const bodyColorChange = {
    isActive: false,
    timerId: null,
    start() {
        if (this.isActive) {
            return;
        }
        this.timerId = setInterval(colorChange, 1000);
        this.isActive = true;
    },
    stop() {
        clearInterval(this.timerId);
        this.isActive = false;
    },
}

btnStart.addEventListener('click', bodyColorChange.start.bind(bodyColorChange));
btnStop.addEventListener('click', bodyColorChange.stop.bind(bodyColorChange));
/* ===========end var-2============================================ */