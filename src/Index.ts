import './style/index.less';

const Utils = require('./utils');
const parallax = require('./parallax').parallax;

const LABEL = 'A Beautiful Typescript Boilerplate'; 

(async () => {  

  parallax();

  const logos = document.getElementById('logos');
  const line = document.getElementById('prompt')?.getElementsByClassName('line')[0];
  const caret = document.getElementById('prompt')?.getElementsByClassName('caret')[0];

  const text = LABEL;

  if (!line || !logos) 
    return;

  logos.classList.add('shows-up');

  for (let i=0, n=text.length; i<n; i++) {

    const delaySeconds = i * 0.005;
    await Utils.delay(delaySeconds).then(() => {
      line.innerHTML = line.textContent + text[i];
    });
  }
  caret?.classList.add('waiting');

})();

export {};
