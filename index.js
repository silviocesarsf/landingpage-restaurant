// Animação scroll
window.sr = ScrollReveal({ reset: true})

sr.reveal('.left', {duration: 1000})
sr.reveal('.right', {duration: 1000})
sr.reveal('.text', {
    rotate: { x: 0, y: 80, z:0},
    duration: 1000
})
sr.reveal('.container-services', {duration: 2000})
sr.reveal('.container-menu', {duration: 2000})

