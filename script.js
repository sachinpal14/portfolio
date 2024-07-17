
// selection of element
let crsr = document.querySelector(".cursor")
let main = document.querySelector("body")
let bg = document.querySelector(".cursor-bg")
let img = document.querySelector("img")
let right = document.querySelector(".right")
let navh3 = document.querySelector(".nav h3")
let rightbar = document.querySelector(".rightbar")
let menu = document.querySelector(".nav i")
let cross = document.querySelector(".rightbar i")
let projects = document.querySelectorAll(".project")
let skills = document.querySelectorAll(".skills")
let page3img = document.querySelectorAll(".page3 img")
let page3h2 = document.querySelector(".page3-heading h2")
let string = document.querySelector(".string")

// porfolio navbar heading animation
let textcontent = navh3.textContent

let spilittedtext = textcontent.split("")

let halflength = Math.floor(spilittedtext.length / 2)

let systum = ""

spilittedtext.forEach((elem, i) => {
  if (i < halflength) {

    systum += `<span class="intiall">${elem}</span>`
  }
  else {
    systum += `<span class="final">${elem}</span>`
  }

})
navh3.innerHTML = systum;

gsap.from(".intiall", {
  y: -100,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.15
})
gsap.from(".final,.nav i", {
  y: -100,
  duration: 0.8,
  delay: 0.5,
  stagger: -0.15
})


// custom-crsr animation
main.addEventListener("mousemove", (dets) => {
  crsr.style.left = dets.x - 12 + "px"
  crsr.style.top = dets.y - 12 + "px"
  bg.style.left = dets.x - 90 + "px"

  bg.style.top = dets.y - 90 + "px"

});

// imagebar behind main image animation

img.addEventListener("mouseover", () => {

  gsap.to(".imgbar h1", {
    x: 200,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
  })
  setTimeout(() => {
    gsap.to(".imgbar h1", {
      x: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,

    })
  }, 1500);
})




// right div paragraph animation
right.addEventListener("mouseenter", () => {
  gsap.to(".right p", {
    transform: "scale(1.2)",
  })
})
right.addEventListener("mouseleave", () => {
  gsap.to(".right p", {
    transform: "scale(1)",
  })
})



// first timeline and main-image page2 heading animation
let t1 = gsap.timeline()

t1.from(".left", {
  y: -700,
  stagger: 2,
  duration: 2,
  delay: 0.3,
  opacity: 0,

})

t1.from(".right p", {
  y: 700,
  duration: 1,
  stagger: 0.2
})

t1.to(".page2 h1", {
  transform: "translate(-100%)",
  fontWeight: 200,
  duration: 2,

  scrollTrigger: {
    trigger: ".page2 h1",
    scroller: "body",
    start: "top 30%",
    end: "top 25%",
    scrub: 2,
    pin: true,

  }
})


//second timeline and rightbar animation

let t2 = gsap.timeline()
t2.to(".rightbar", {
  right: 0,
  duration: 0.7
})
t2.from(".rightbar h3", {
  x: 150,
  opacity: 0,
  duration: 0.6,
  stagger: 0.2
})
t2.from(".rightbar i", {
  opacity: 0
})

t2.pause()

menu.addEventListener("click", function () {

  t2.play()
})
cross.addEventListener("click", () => {
  t2.reverse()
})


// third timeline and project animation
let t3 = gsap.timeline()

t3.from("#project1,#project3", {
  transform: "translateX(-100%)",
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    start: "top 30%",
    end: "top 0%",
    scrub: 2
  }

})
t3.from("#project2", {
  transform: "translateX(200%)",
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    start: "top 30%",
    end: "top 0%",
    scrub: 2
  }

})


// project backdta animation
projects.forEach((elem) => {


  elem.addEventListener("mouseenter", () => {
    elem.childNodes[3].style.opacity = 1
  })
  elem.addEventListener("mouseleave", () => {

    elem.childNodes[3].style.opacity = 0
  })
  elem.addEventListener("mousemove", (dets) => {

    elem.childNodes[3].style.left = dets.x - 343 + "px"

  })
})


// skills animation
skills.forEach((elem) => {

  elem.addEventListener("mouseenter", () => {
    elem.childNodes[3].style.opacity = 1
    elem.childNodes[3].style.boxShadow = "-2px -2px 80px #3f3636"

  })
  elem.addEventListener("mouseleave", () => {
    elem.childNodes[3].style.opacity = 0
    elem.childNodes[3].style.boxShadow = "0px 0px 0px white"
  })
})


function page3_heading_animation() {
  let textcontent = page3h2.textContent

  let spilittedtext = textcontent.split("")
  let systum = ""

  spilittedtext.forEach((elem) => {
    if (elem == " ") {
      systum += " "
    }
    else {

      systum += `<span class="page3headh2">${elem}</span>`
    }

  })
  page3h2.innerHTML = systum;

  gsap.from(".page3headh2", {
    y: -200,
    opacity: 0,
    duration: 0.5,
    stagger: 0.07,
    scrollTrigger: {
      trigger: ".page3headh2",
      scroller: "body",
      start: "top 40%",
      end: "top 30%",
      scrub: 2
    }
  })

  gsap.from(".skills", {
    y:200,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".skills",
      scroller: "body",
      start: "top 80%",
      end: "top 70%",
      scrub:2,
    }
  })
}
page3_heading_animation()


function last_page_main_animatio() {
  let t5 = gsap.timeline()

  t5.from(".headline h2", {
    duration: 1.5,
    y: -200,
    opacity: 0,
    ease: "bounce(2,0.2)",
    scrollTrigger: {
      trigger: ".headline h2",
      scroller: "body",
      start: "top 50%",
      end: "top 30%",
      scrub: 2
    }
  })

  t5.from("#facebook", {
    y: -500,
    duration: 2,
    stagger: 0.2,
    opacity: 1,
    ease: "bounce.out(1,0.3)",
    scrollTrigger: {
      trigger: ".headline h2",
      scroller: "body",
      start: "top 45%",
      end: "top 16%",
      scrub: 2
    }

  }).to("#facebook", {
    x: 620,
    rotate: 360,
    duration: 1,
    scrollTrigger: {
      trigger: ".headline h2",
      scroller: "body",
      start: "top 45%",
      end: "top 16%",
      scrub: 2
    }
  })


  t5.from("#linkedin", {
    y: -500,
    duration: 1,
    stagger: 0.2,
    opacity: 1,
    ease: "bounce.out(1,0.3)",
    scrollTrigger: {
      trigger: ".headline h2",
      scroller: "body",
      start: "top 35%",
      end: "top 11.5%",
      scrub: 2
    }

  }).to("#linkedin", {
    x: -600,
    rotate: 360,
    duration: 1,
    scrollTrigger: {
      trigger: ".headline h2",
      scroller: "body",
      start: "top 35%",
      end: "top 11.5%",
      scrub: 2
    }
  })


  t5.from("#gmail", {
    y: -500,
    duration: 1,
    stagger: 0.2,
    opacity: 1,
    ease: "bounce.out(1,0.2)",
    scrollTrigger: {
      trigger: ".headline h2",
      scroller: "body",
      start: "top 25%",
      end: "top 6%",
      scrub: 2
    }

  }).to("#gmail", {
    x: -723,
    rotate: 360,
    duration: 1,
    scrollTrigger: {
      trigger: ".headline h2",
      scroller: "body",
      start: "top 25%",
      end: "top 6%",
      scrub: 2
    }
  })
  t5.from("#twitter", {
    y: -500,
    duration: 1,
    stagger: 0.2,
    opacity: 0,
    ease: "bounce.out(1,0.2)",
    scrollTrigger: {
      trigger: ".headline h2",
      scroller: "body",
      start: "top 25%",
      end: "top 6%",
      scrub: 2
    }
   }).to("#twitter", {
    x: 723,
    rotate: 360,
    duration: 1,
    scrollTrigger: {
      trigger: ".headline h2",
      scroller: "body",
      start: "top 25%",
      end: "top 6%",
      scrub: 2
    }
  })
}
last_page_main_animatio()
