import React from "react";
// import color from "../../constant";
// import OfferCard from "../../components/Card/OfferCard";
import { OurTeamData } from "../../config/OurteamData";
import OfferCard from "../Cards/OurTeamCard";

function OurTeam() {
  return (
    <>
      <div
        className="row d-flex justify-content-center m-0 py-3 py-md-5 px-5 teambg"
        
      >
        <text
          className="Heading-1 text-center col-12 pt-2 pb-5 mt-3"
          style={{ color: "black" }}
        >
          - OUR TEAM -
          <hr  />
        </text>
        {OurTeamData.map((items) => {
          return <OfferCard data={items} />;
        })}
      </div>
    </>
  );
}

export default OurTeam;
