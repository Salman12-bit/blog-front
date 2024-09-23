import React from "react";
import { FaStar } from "react-icons/fa";



const StarRating = ({ rating, setRating, readonly = false }) => {
    const handleClick = (value) => {
        if (!readonly) {
            setRating(value);
        }
    };

    return (
        <div className="star-rating  my-3" >
            {[...Array(5)].map((star, index) => {
                const value = index + 1;
                return (
                    <FaStar
                        key={value}
                        size={24}
                        color={value <= rating ? "#ffc107" : "#e4e5e9"}
                        onClick={() => handleClick(value)}
                        style={{ cursor: readonly ? "default" : "pointer" }}
                    />
                );
            })}
        </div>
    );
};

export default StarRating;
