gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function page1Animation() {
  if (prefersReducedMotion) return;

  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  tl.from('nav h1, nav a, nav button', {
    y: -28,
    opacity: 0,
    delay: 0.25,
    duration: 0.45,
    stagger: 0.08,
  })
    .from('.center-part-1 h1', {
      x: -80,
      opacity: 0,
      duration: 0.55,
    }, '-=0.2')
    .from('.center-part-2 img', {
      x: 60,
      opacity: 0,
      duration: 0.65,
    }, '-=0.35')
    .from('.center-part-1 p', {
      x: -45,
      opacity: 0,
      duration: 0.4,
    }, '-=0.35')
    .from('.center-part-1 button', {
      y: 14,
      opacity: 0,
      duration: 0.35,
    }, '-=0.15')
    .from('.section1bottom img', {
      y: 18,
      opacity: 0,
      duration: 0.35,
      stagger: 0.08,
    }, '-=0.05');
}

function section2Animation() {
  if (prefersReducedMotion) return;

  ScrollTrigger.matchMedia({
    '(min-width: 721px)': function () {
      const st = gsap.timeline({
        scrollTrigger: {
          trigger: '.section2',
          start: 'top 72%',
          end: 'top 12%',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      st.from('.services', {
        x: -80,
        opacity: 0,
      })
        .from('.elem.line1.left', {
          x: -100,
          opacity: 0,
        })
        .from('.elem.line1.right', {
          x: 100,
          opacity: 0,
        }, '<')
        .from('.elem.line2.left', {
          x: -100,
          opacity: 0,
        })
        .from('.elem.line2.right', {
          x: 100,
          opacity: 0,
        }, '<');
    },

    '(max-width: 720px)': function () {
      gsap.from('.services, .elem', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.section2',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      });
    },
  });
}

page1Animation();
section2Animation();

window.addEventListener('load', () => ScrollTrigger.refresh());
