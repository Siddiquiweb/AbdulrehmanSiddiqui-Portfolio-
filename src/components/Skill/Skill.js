import React, { useEffect } from "react";

// Importing TagCloud for  3D Rotating Text Sphere
import TagCloud from "TagCloud";

import "../../styles/Skill/Skill.scss";

const Skill = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    const container = ".tagcloud";
    let radii;

    // If 3D Text Sphere is not showing up after deployment remove the return (i.e, return() =>{}) function from below code
    return () => {
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Redux",
        "Node",
        "React Native Expo",
        "Vue",
        "Nuxt",
        "NodeJS",
        "Shopify",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
      ];

      // Decrasing 'radius' value for small screen devices
      function radiusValue() {
        if (window.screen.width <= 778) {
          radii = 150;
        } else {
          radii = 290;
        }
        return radii;
      }

      const options = {
        radius: radiusValue(),
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);
  return (
    <>
      <div className="skill">
        <div className="skill__main-container">
          <div className="skill__header" id="skill__heading">
            <h1>
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                S
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                K
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                I
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                L
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                L
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
          </div>
          <div className="skill__inner-container">
            <div className="skill__info">
              <div className="skill__details-container">
                <div className="skill__details">
                  <h4>HTML / CSS</h4>

                  <ul>
                    <li>
                      <span>HTML5, CSS3</span>
                    </li>
                    <li>
                      <span>
                        <b>Preprocessors: PUG, SASS</b>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>CSS Frameworks</h4>
                  <ul>
                    <li>
                      <span>Tailwind CSS</span>
                    </li>
                    <li>
                      <span>Dasi UI (Tailwind CSS)</span>
                    </li>
                    <li>
                      <span>Material UI</span>
                    </li>
                    <li>
                      <span>Bootstrap</span>
                    </li>
                    <li>
                      <span>React Native Bootstrap</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>JavaScript</h4>
                  <ul>
                    <li>
                      <span>ES5/ES6</span>
                    </li>
                    <li>
                      <span>Node.js</span>
                    </li>
                    <li>
                      <span>jQuery</span>
                    </li>
                    <li>
                      <span>Typescript</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>React Js</h4>
                  <ul>
                   
                    
                    <li>
                      <span>Components</span>
                    </li>
                    <li>
                      <span>State and Lifecycle</span>
                    </li>
                    <li>
                      <span>Event Handling</span>
                    </li>

                    <li>
                      <span>API Integration</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>React Native Expo Continue"</h4> 

                  <ul>
                    <li>
                      <span>Maping </span>
                      </li>
                      <li>
                      <span>Rediux</span>
                      </li>
                      <li>
                      <span>stack Navigetion </span>
                      </li>
                      <li>
                      <span> Firbase Contact</span>
                      </li>  <li>
                      <span>Camera</span>
                      </li>

                    
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Version Control </h4>
                  <ul>
                    <li>
                      <span>GIT</span>
                    </li>
                  </ul>
                </div>
              
                <div className="skill__details">
                  <h4>E-Commerce</h4>
                  <ul>
                    <li>
                      <span>Shopify</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Server Side</h4>
                  <ul>
                    <li>
                      <span>Node.js</span>
                    </li>
                    
                    
                  </ul>
                </div>
                
              </div>
            </div>

            {/* 3D Text Cloud  */}
            <div className="skill__cloud">
              <div
                className="tagcloud"
                data-aos="zoom-in-up"
                data-aos-offset="200"
              ></div>
            </div>
            
          </div>
        </div>
      </div>
      
    </>
    
  );
};

export default Skill;