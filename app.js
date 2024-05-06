const leavePageAnimation = (container) => {
    const transitionDiv = document.querySelector(".transition-div");

    const gtl = gsap.timeline({
        defaults: {
            ease: "expo.inOut",
            duration: 1.3
        }
    });

    gtl.to(transitionDiv, {
        width: "110vw"
    });

    return gtl;
}

const enterNewPage = (container) => {
    const transitionDiv = document.querySelector(".transition-div");

    const gtl = gsap.timeline({
        defaults: {
            ease: "expo.inOut",
            duration: 1.5
        }
    });

    gtl.set(transitionDiv, {
        width: "100vw"
    }).to(transitionDiv, {
        width: "0vw",
    })
}

barba.init({
    transitions: [{
      name: 'list-transition',
      from: {
        namespace: [
          'home'
        ]
      },
      to: {
        namespace: [
          'work'
        ]
      },
      leave({current}) {
        return leavePageAnimation(current.container);
      },
      enter({next}) {
        return enterNewPage(next.container);
      }
    }]
});