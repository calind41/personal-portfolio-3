import React from "react";
import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1>.projects()</h1>
      <div className={styles.projectsWrapper}>
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
            live: "none",
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
          <a href={links.github} target='_blank'>
            <i class='fab fa-github'></i>
          </a>
          <a href={links.live} target='_blank'>
            <i class='fas fa-link'></i>
          </a>
        </p>
      </div>
    </div>
  );
}
