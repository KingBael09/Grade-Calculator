import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectComponent = (props: any) => {
  const { value, onChange, label, menu, className } = props;
  return (
    <FormControl>
      <InputLabel className={className}>{label}</InputLabel>
      <Select
        className={className}
        value={value}
        label={label}
        onChange={onChange}
        SelectDisplayProps={{ className: className }}
        fullWidth={true}
      >
        {menu.map((event: any) => {
          return (
            <MenuItem
              className={className}
              key={event.value}
              value={event.value}
            >
              {event.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
