import { TextField } from "@mui/material";
import { Slider } from "@mui/material";
import { Box } from "@mui/material";

import { useState } from "react";

export default function Forms() {
  const [value, setValue] = useState("");
  const [volume, setVolume] = useState(50);

  let updateName = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  let changeVolume = (event, newVolume) => {
    setVolume(newVolume);
  };

  return (
    <Box sx={{ border: "1px solid red", p: 2 }}>
      <h1>Name is: {value}</h1>
      <TextField
        id="outlined-basic"
        placeholder="name"
        label="Outlined Name"
        variant="outlined"
        value={value}
        onChange={updateName}
      />
      <h2>Volume example: Volume = {volume}</h2>
      <Slider aria-label="Volume" value={volume} onChange={changeVolume} />
    </Box>
  );
}
