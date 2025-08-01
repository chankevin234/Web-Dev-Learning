import { Rating } from "@mui/material";
import { useState } from "react";

export default function Ratings() {
  const [rating, setRating] = useState(3);
  return (
    <div>
      <h1>Rating Demo</h1>
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
    </div>
  );
}
