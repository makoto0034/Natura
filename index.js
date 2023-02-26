  //gsap animation 
gsap.fromTo('#about-section', {
    opacity:0,
    duration: 1,
  },
  {
    opacity:1,
    scrollTrigger: {
        trigger: '#about-section',
        start: 'top center',
        end: 'center center-=100',
        // toggleActions: 'play pause resume reset',
        // toggleActions:
        //   event: onEnter onLeave onEnterBack onLeaveBack
        //   default: play none none none
      }
  }
)

gsap.timeline()
.fromTo("#top-section .bg-circle",{
    opacity:0
},
{
    opacity:1,
    delay:0.1
})
.fromTo("#top-section .bg-circle2",{
    opacity:0
},
{
    opacity:1,
    delay:0.15
})
.fromTo("#top-section .bg-circle3",{
    opacity:0
},
{
    opacity:1,
    delay:0.2
})
.fromTo("#top-section .bg-circle4",{
    opacity:0
},
{
    opacity:1,
    delay:0.25
})
.fromTo(".top-title",{
    opacity:0,
    top:'45%'
},
{
    opacity:1,
    top:'38%',
    delay:0.3,
    ease:'ease-in-out',
})