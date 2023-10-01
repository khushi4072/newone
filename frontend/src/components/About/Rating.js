import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ value }) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 !== 0;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar}  />);
    }
    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon
          icon="fa-solid fa-star"
        />
      );
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default Rating;
 