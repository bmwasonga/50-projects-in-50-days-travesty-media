const counters = document.querySelectorAll('.counter');

counters.forEach((e) => {
  e.innerText = '0';

  const updateCounter = () => {
    const target = +e.getAttribute('data-target');
    const c = +e.innerText;

    const increment = target / 400;

    if (c < target) {
      e.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      e.innerText = target;
    }
  };

  updateCounter();
});
