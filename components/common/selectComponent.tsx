import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { RegType } from "../../data/other";

type SelectProps = {
  className: string;
  value: string | number;
  label: string;
  menu: RegType[];
  onChange: any;
};

const SelectComponent = (props: SelectProps) => {
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
