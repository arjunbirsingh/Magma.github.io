let body = document.body;
rotate: "50deg",
  gsap.from("#line1 h1,#line2 .one,#line2 .two,#line3 h1", {
    rotate: "50deg",
    y: 250,
    duration: 0.7,
  });
gsap.from(".cont1 p", {
  y: 50,
  rotate: "30deg",
  duration: 1,
});
gsap.from(".cont1 .learn-more", {
  x: "-100%",
  duration: 1,
  rotate: 20,
  opacity: 0.5,
});

function cont2TextEffect() {
  let clutter = "";
  let cont2Detail = document.querySelectorAll(".cont2 .detail");
  cont2Detail[0].textContent.split(" ").forEach((word) => {
    clutter += `<span>${word} </span>`;
  });
  cont2Detail[0].innerHTML = clutter;
  clutter = "";
  cont2Detail[1].textContent.split(" ").forEach((word) => {
    clutter += `<span>${word} </span>`;
  });
  cont2Detail[1].innerHTML = clutter;
  clutter = "";
  //   cont2Detail[2].textContent.split(" ").forEach((word) => {
  //     clutter += `<span>${word} </span>`;
  //   });
  //   cont2Detail[2].innerHTML = clutter;
}
cont2TextEffect();
gsap.to(".cont2 #detail1 span", {
  scrollTrigger: {
    scroller: "#main",
    trigger: ".cont2 #detail1 span",
    start: "top center",
    end: "bottom top",
    scrub: 0.4,
  },
  opacity: 1,
  stagger: 0.3,
  duration: 2,
  ease: "easeout",
});
gsap.to("#detail2 span", {
  scrollTrigger: {
    scroller: "#main",
    trigger: "#detail2 span",
    start: "top center",
    end: "bottom 20%",
    scrub: 0.4,
  },
  opacity: 1,
  stagger: 0.3,
  duration: 2,
  ease: "easeout",
});
gsap.from(".magmaGlassCont h2", {
  scrollTrigger: {
    trigger: ".magmaGlassCont h2",
    scroller: "#main",
    start: "top 90%",
    scrub: 0.4,
    end: "top 40%",
  },
  rotate: 30,
  y: "200%",
  // duration: 1.7,
});
let percent=document.querySelector(".circle  #percent");
gsap.to(".circleDiv .circle", {
  scrollTrigger: {
    scroller: "#main",
    trigger: ".circleDiv .circle",
    scrub: 0.4,
    start: "top 80%",
    // markers:true,
    end: "bottom center",
  },
  height:"80vh",
  width:"80vh",
  duration:2,
  ease:Expo
});
let circleDiv=document.querySelector(".circleDiv");
window.addEventListener("scroll",()=>{
  console.log("lol")
  let dims=document.querySelector(".circleDiv .circle").getBoundingClientRect();
// gsap.utils.mapRange(initialWid,finalWid,0,100,);
console.log(dims)
});