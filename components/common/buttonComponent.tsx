import React from "react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

type ButtonProps = {
  className: string;
  children: any;
  onClick: any;
  disabled?: boolean;
  // fullWidth
};

const ButtonComponent = (props: ButtonProps) => {
  const { className, disabled, onClick } = props;
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        onClick={onClick}
        className={className}
        color="info"
        disabled={disabled}
        // disableElevation
        // fullWidth={fullWidth ? true : false}
        variant="contained"
      >
        {props.children}
      </Button>
    </motion.div>
  );
};

export default ButtonComponent;
