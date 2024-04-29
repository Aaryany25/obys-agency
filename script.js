function LoadingAnimation() {
  function Counter() {
    var timer = document.querySelector("#part1 h5");
    var count = 0;

    setInterval(function () {
      if (count < 100) {
        timer.innerHTML = count++;
      } else {
        timer.innerHTML = count;
      }
    }, 33);
  }

  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    duration: 0.5,

    opacity: 0,
    stagger: 0.3,
  });
  tl.from("#part1", {
    opacity: 0,
    OnStart: Counter(),
  });
  tl.to(".line h2", {
    animationName: "anime",
    opacity: 0,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.1,
    delay: 1,
  });

  tl.from("#page1", {
    delay: 0.2,
    y: 1200,
    opacity: 1,
    ease: Power4,
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("#nav",{
    opacity:0
  })
  tl.from(".hero h1",{
    y: 100,
    duration: 0.5,
    opacity:0,
    stagger: 0.3,
  })
}
function CursurAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      left: dets.x,
      top: dets.y,
    });
  });
  Shery.makeMagnet("#navPart2 h3", {});
}
LoadingAnimation();
CursurAnimation();
