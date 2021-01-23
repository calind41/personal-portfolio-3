import React, { useState, useEffect } from "react";
import styles from "./Projects.module.scss";
import { github, linkIcon } from "./icons";
import ModalVideo from "react-modal-video";
import axios from "axios";

export default function Projects() {
  useEffect(() => {
    const requestHandler = async () => {
      const res = await axios.get(
        "https://mysportsbooking.com/api/v1/sportLocations"
      );
    };
    requestHandler();
    console.log("new visitor");
  }, []);
  return (
    <div id='works' className={styles.container}>
      <h1>.projects()</h1>
      <div className={styles.projectsWrapper}>
        <Project
          img={{ src: "/p8.png", alt: "Air Travel Website" }}
          description={{
            h3: "Air Travel Website",
            p: [
              "Responsive Design",
              "Authentication & Multiple language support",
              "Implemented with Next.js",
            ],
          }}
          links={{
            github: "https://github.com/calind41/airtravel-website",
            live: "airtravel",
          }}
        />
        <Project
          img={{ src: "/p1.png", alt: "Sports Booking App" }}
          description={{
            h3: "Sports Booking App",
            p: [
              "User authentication",
              "Admin and Support dashboards.",
              "Implemented with React.js & Node.js",
            ],
          }}
          links={{
            github: "https://github.com/calind41/booking-sports-app",
            live: "http://www.mysportsbooking.com/",
          }}
        />
        <Project
          img={{ src: "/p2.png", alt: "Real Estate LP UI" }}
          description={{
            h3: "Real Estate LP UI",
            p: [
              "Design inspired from homezz.ro site",
              "Implemented with React.js",
            ],
          }}
          links={{
            github: "https://github.com/calind41/real-estate-project-react",
            live: "https://real-estate-lp.netlify.app/",
          }}
        />
        <Project
          img={{ src: "/p3.png", alt: "Tech Ecommerce Website" }}
          description={{
            h3: "Tech Ecommerce Website",
            p: [
              "User Authentication",
              "Payment integration",
              "Implemented with React.js and Node.js",
            ],
          }}
          links={{
            github: "https://github.com/calind41/techshop-ecommerce-app",
            live: "techshop",
          }}
        />

        <Project
          img={{ src: "/p4.png", alt: "Insurance App UI C." }}
          description={{
            h3: "Insurance App UI Components",
            p: ["Design inspired from Dribbble", "Implemented with React.js"],
          }}
          links={{
            github: "https://github.com/calind41/insurance_app_ui_components",
            live: "https://insurance-app-components.netlify.app/",
          }}
        />
        <Project
          img={{ src: "/p5.png", alt: "Progress Dashboard UI" }}
          description={{
            h3: "Progress Dashboard UI",
            p: ["Design inspired from Dribbble", "Implemented with HTML/CSS"],
          }}
          links={{
            github: "https://github.com/calind41/progress-dashboard-ui",
            live: "https://codepen.io/calind41/pen/NWxVQpr",
          }}
        />
        <Project
          img={{ src: "/p6.png", alt: "Track Time UI" }}
          description={{
            h3: "Track Time UI",
            p: ["Design inspired from Dribbble", "Implemented with HTML/CSS"],
          }}
          links={{
            github: "https://github.com/calind41/track-time-components-ui",
            live: "https://codepen.io/calind41/pen/RwrXBVZ?editors=1100",
          }}
        />
        <Project
          img={{ src: "/p7.png", alt: "Pairs Match Memory Game" }}
          description={{
            h3: "Pairs Match Memory Game",
            p: [
              "Match pairs of fruits from memory",
              "Implemented with HTML/CSS/JS",
            ],
          }}
          links={{
            github: "https://github.com/calind41/pairs-match-memory-game",
            live: "https://pair-match-memory-game.netlify.app/",
          }}
        />

        {/* <Project />
        <Project /> */}
      </div>
    </div>
  );
}

function Project({ img, description, links }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAirTravel, setIsOpenAirTravel] = useState(false);

  const handleClickLive = (links) => {
    if (links.live === "techshop") {
      setIsOpen(true);
    } else if (links.live === "airtravel") {
      setIsOpenAirTravel();
    } else {
      console.log("clicked on actual links ");
    }
  };
  const handleClickGithub = (description) => {
    console.log("clicked a github link ", description);
  };

  return (
    <div className={styles.project}>
      <img src={img.src} alt={img.alt} />
      <div className={styles.description}>
        <h3>{description.h3}</h3>
        <div>
          {description.p.map((item, idx) => {
            return <p key={idx}>{item}</p>;
          })}
        </div>

        <p className={styles.links}>
          <a
            onClick={() => handleClickGithub(description.h3)}
            href={links.github}
            target='_blank'
          >
            {github}
          </a>
          <a
            onClick={() => handleClickLive(links)}
            href={
              links.live === "techshop" || links.live === "airtravel"
                ? null
                : links.live
            }
            target='_blank'
          >
            {/* <i class='fas fa-link'></i> */}
            {linkIcon}
          </a>
        </p>
      </div>
      <div style={{ position: "absolute" }}>
        <ModalVideo
          channel='custom'
          isOpen={isOpen}
          channel='youtube'
          videoId='qiXOcYcNi9k'
          onClose={() => setIsOpen(false)}
        />
      </div>
      <div style={{ position: "absolute" }}>
        <ModalVideo
          channel='custom'
          isOpen={isOpenAirTravel}
          channel='youtube'
          videoId='doiokHnj7J4'
          onClose={() => setIsOpenAirTravel(false)}
        />
      </div>
    </div>
  );
}
