import React from "react";
import teamlist from "./team.js";
import "./Team.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import TeamMember from "./TeamMember";
export default function Team() {
  return (
    <section id="Team" className="TeamSection">
      <div className="TeamTitle">
        <h1>Meet Our Expert</h1>
      </div>
      <div className="WholeTeam">
        {teamlist.map((team) => {
          return (
            <TeamMember
              image={team.image}
              name={team.name}
              title={team.designation}
            />
          );
        })}
      </div>
    </section>
  );
}
