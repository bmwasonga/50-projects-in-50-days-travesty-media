const ripple = document.querySelectorAll('.ripple');

ripple.forEach((e) => {
  e.addEventListener('click', function (f) {
    const x = f.clientX;
    const y = f.clientY;

    const buttonTop = f.target.offsetTop;
    const buttonLeft = f.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    this.appendChild(circle);
  });
});
