import React from "react";
import "./homepage.css";

import coverImg from "./coverImg.webp";

export default function HomePage() {
  return (
    <section>
      <div className="homePageOuter">
        <div className="homePageImg">
          <img src={coverImg} alt="coverImg" />
        </div>
        <div className="coverTextOuter">
          <div className="coverText">
            <h1>Online Coding Classes</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              maxime, tenetur nemo minima dicta eos dolorem nobis reiciendis
              dolor ex quasi aspernatur accusantium, recusandae eius
              exercitationem unde ducimus sit accusamus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
