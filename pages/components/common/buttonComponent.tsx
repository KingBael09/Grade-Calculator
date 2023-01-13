import React from "react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

const ButtonComponent = (props: any) => {
  const { fullWidth, className, disabled } = props;
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        onClick={props.onClick}
        className={className}
        color="info"
        disabled={disabled}
        // disableElevation
        fullWidth={fullWidth ? true : false}
        variant="contained"
      >
        {props.children}
      </Button>
    </motion.div>
  );
};

export default ButtonComponent;
