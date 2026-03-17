import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const link = e.currentTarget as HTMLAnchorElement;
          const section = link.getAttribute("data-href");
          if (section) smoother.scrollTo(section, true, "top top");
        }
      });
    });
    const onResize = () => ScrollSmoother.refresh(true);
    window.addEventListener("resize", onResize);

    const setCirclesOpacity = (opacity: number) => {
      const c1 = document.querySelector(".landing-circle1") as HTMLElement;
      const c2 = document.querySelector(".landing-circle2") as HTMLElement;
      if (c1) c1.style.opacity = String(opacity);
      if (c2) c2.style.opacity = String(opacity);
    };

    const scroller = "#smooth-wrapper";
    const circleTrigger = ScrollTrigger.create({
      trigger: ".landing-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
      scroller,
      onUpdate: (self) => {
        setCirclesOpacity(Math.max(0, 1 - self.progress * 1.5));
      },
    });

    const hideCirclesTrigger = ScrollTrigger.create({
      trigger: ".about-section",
      start: "top bottom",
      end: "top top",
      scroller,
      onUpdate: (self) => {
        if (self.progress > 0) setCirclesOpacity(0);
      },
    });

    return () => {
      window.removeEventListener("resize", onResize);
      circleTrigger.kill();
      hideCirclesTrigger.kill();
    };
  }, []);
  return (
    <>
      <header className="header">
        <a href="/#" className="navbar-title" data-cursor="disable" aria-label="Home">
          MA
        </a>
        <a
          href="mailto:balochanas321@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
          aria-label="Email Muhammad Anas"
        >
          balochanas321@gmail.com
        </a>
        <nav aria-label="Main navigation">
          <ul>
            <li>
              <a data-href="#about" href="#about">
                <HoverLinks text="ABOUT" />
              </a>
            </li>
            <li>
              <a data-href="#work" href="#work">
                <HoverLinks text="WORK" />
              </a>
            </li>
            <li>
              <a data-href="#contact" href="#contact">
                <HoverLinks text="CONTACT" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="landing-circle1" aria-hidden="true" />
      <div className="landing-circle2" aria-hidden="true" />
      <div className="nav-fade" aria-hidden="true" />
    </>
  );
};

export default Navbar;
