import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// SVG border dimensions and line lengths (from reference – single source of truth)
const SVG_WIDTH = "100%";
const SVG_HEIGHT = "100%";
const STROKE_COLOR = "white";
const STROKE_WIDTH = 2;
const DASH_VERTICAL = "7,7";   // what-border2 (vertical lines)
const DASH_HORIZONTAL = "6,6"; // what-border1 (horizontal lines)
const PERCENT_0 = "0";
const PERCENT_100 = "100%";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <section className="whatIDO" aria-labelledby="whatido-heading">
      <div className="what-box what-box-title">
        <h2 id="whatido-heading" className="title">
          W<span className="hat-h2">HAT</span>
          <span style={{ display: "block" }}>
            I<span className="do-h2"> DO</span>
          </span>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width={SVG_WIDTH} aria-hidden="true">
              <line
                x1={PERCENT_0}
                y1={PERCENT_0}
                x2={PERCENT_0}
                y2={PERCENT_100}
                stroke={STROKE_COLOR}
                strokeWidth={STROKE_WIDTH}
                strokeDasharray={DASH_VERTICAL}
              />
              <line
                x1={PERCENT_100}
                y1={PERCENT_0}
                x2={PERCENT_100}
                y2={PERCENT_100}
                stroke={STROKE_COLOR}
                strokeWidth={STROKE_WIDTH}
                strokeDasharray={DASH_VERTICAL}
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height={SVG_HEIGHT} aria-hidden="true">
                <line
                  x1={PERCENT_0}
                  y1={PERCENT_0}
                  x2={PERCENT_100}
                  y2={PERCENT_0}
                  stroke={STROKE_COLOR}
                  strokeWidth={STROKE_WIDTH}
                  strokeDasharray={DASH_HORIZONTAL}
                />
                <line
                  x1={PERCENT_0}
                  y1={PERCENT_100}
                  x2={PERCENT_100}
                  y2={PERCENT_100}
                  stroke={STROKE_COLOR}
                  strokeWidth={STROKE_WIDTH}
                  strokeDasharray={DASH_HORIZONTAL}
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>FRONTEND</h3>
              <h4>Building Interactive UIs</h4>
              <p>
                Crafting performant, responsive interfaces with modern frameworks.
                From SPAs to micro-frontends, I deliver pixel-perfect experiences.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">React.js</div>
                <div className="what-tags">Angular</div>
                <div className="what-tags">Next.js</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">Material UI</div>
                <div className="what-tags">HTML5</div>
                <div className="what-tags">CSS3</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height={SVG_HEIGHT} aria-hidden="true">
                <line
                  x1={PERCENT_0}
                  y1={PERCENT_100}
                  x2={PERCENT_100}
                  y2={PERCENT_100}
                  stroke={STROKE_COLOR}
                  strokeWidth={STROKE_WIDTH}
                  strokeDasharray={DASH_HORIZONTAL}
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>BACKEND</h3>
              <h4>Scalable Server Architecture</h4>
              <p>
                Designing robust APIs and microservices. From CMS platforms to
                complex business logic, I build backends that scale.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Node.js</div>
                <div className="what-tags">NestJS</div>
                <div className="what-tags">Express.js</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">PostgreSQL</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">Microservices</div>
                <div className="what-tags">Python</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
