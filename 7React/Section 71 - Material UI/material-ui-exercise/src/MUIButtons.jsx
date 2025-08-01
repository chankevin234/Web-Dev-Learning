/* eslint-disable react/prop-types */
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

export default function MUIButtons({ variant }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant={variant}>{variant}</Button>
    </Stack>
  );
}
