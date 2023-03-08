export function parallax() {  

  const DELTA_PX = 20;
  const [WIDTH, HEIGHT] = [window.outerWidth, window.outerHeight];
  const SYS_REF_MARGIN = [0, DELTA_PX];
  const SYS_REF_WINDOW = {
    'width':  [0, WIDTH],
    'height': [0, HEIGHT],
  };

  const root = document.getElementById('root');
  const backgroundImg = document.getElementById('background-img');

  if (!root || !backgroundImg) 
    return;
  
  // SET background-image
  backgroundImg.style.width =      WIDTH + (DELTA_PX * 2) + 'px';
  backgroundImg.style.height =     HEIGHT + (DELTA_PX * 2) + 'px';
  backgroundImg.style.marginTop =  -1 * DELTA_PX + 'px';
  backgroundImg.style.marginLeft = -1 * DELTA_PX + 'px';

  const marginTop =  +backgroundImg.style.marginTop.slice(0, -2);
  const marginLeft = +backgroundImg.style.marginLeft.slice(0, -2);

  const cut = (x: number): number => {
    const pos = x.toString().indexOf('.');
    return +x.toString().slice(0, pos+3)
  }

  const normalization = (c: number, x: number[], y: number[]): number => {

    if (!c || !x.length || !y.length)
      return 0;

    const dX = x[1] - x[0];
    const dY = y[1] - y[0];

    let r = (c - x[0]) / dX;
    r = cut(r);

    return (r * dY) + y[0];
  };

  let isFirstMouseMove = false;
  let [axisX, axisY] = [0, 0];

  root.addEventListener("mousemove", (e) => {

    // Set axis ref
    if (!isFirstMouseMove) {

      [axisX, axisY] = [e.clientX, e.clientY];
      isFirstMouseMove = true;
    }

    const x = marginLeft + normalization(axisX - e.clientX, SYS_REF_WINDOW.width, SYS_REF_MARGIN);
    const y = marginTop  + normalization(axisY - e.clientY, SYS_REF_WINDOW.height, SYS_REF_MARGIN);

    backgroundImg.style.marginLeft = x + 'px';
    backgroundImg.style.marginTop =  y + 'px';
  });
};
