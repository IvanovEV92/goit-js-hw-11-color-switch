const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {
  colorBody: document.body,
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

let timerId = null;
let isActive = false;
refs.btnStart.addEventListener('click', () => {
  if (isActive) {
    return;
  }
  isActive = true;
  refs.btnStart.setAttribute('disabled', true);

  timerId = setInterval(() => {
    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const index = randomIntegerFromInterval(0, colors.length - 1);
    refs.colorBody.style.backgroundColor = colors[index];
  }, 1000);
});

// По клику на Стоп вызовем clearInterval и передадим
// аргументом ID того счетчика который надо остановить
refs.btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  isActive = false;
  refs.btnStart.removeAttribute('disabled');
});
