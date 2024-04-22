document.onscroll = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };

  document.onload = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };


  const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
  menuButton.classList.toggle('fa-close');
});

document.onscroll = () => {
  navbar.classList.remove('show');
  menuButton.classList.remove('fa-close');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};
/*timeline*/
document.addEventListener("DOMContentLoaded", function () {
  const timelineLine = document.querySelector(".timeline-line");
  const timelineImage = document.querySelector(".timeline-image");

  const maxTimelineHeight =
    (document.querySelectorAll(".my-container").length - 1) * 100;

  window.addEventListener("scroll", () => {
    const scrollPercentage = (window.scrollY / maxTimelineHeight) * 65; //Adjust the speed as needed

    const adjustedPercentage = Math.min(100, scrollPercentage);
    timelineLine.style.height = `${adjustedPercentage}%`;
    timelineImage.style.top = `${adjustedPercentage}%`;
  });
});