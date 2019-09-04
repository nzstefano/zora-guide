import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function FormControlLabelPosition() {
  const [value, setValue] = React.useState("female");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Select the Tier</FormLabel>
      <RadioGroup
        aria-label="position"
        name="position"
        value={value}
        onChange={handleChange}
        column
      >
        <FormControlLabel
          value="I"
          control={<Radio color="primary" />}
          label="I"
          labelPlacement="end"
        />
        <FormControlLabel
          value="II"
          control={<Radio color="primary" />}
          label="II"
          labelPlacement="end"
        />
        <FormControlLabel
          value="III"
          control={<Radio color="primary" />}
          label="III"
          labelPlacement="end"
        />
        <FormControlLabel
          value="End"
          control={<Radio color="primary" />}
          label="End"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
}
