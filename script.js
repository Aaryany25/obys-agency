function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

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
locomotiveAnimation()