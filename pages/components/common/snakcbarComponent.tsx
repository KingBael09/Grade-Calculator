import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

type SnackbarProps = {
  action: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  data: number;
};

const SnackbarCompoenet = (props: SnackbarProps) => {
  const [errorTrigger, setErrorTrigger] = props.action;
  const globalWidth = props.data;
  return (
    <Snackbar
      open={errorTrigger}
      autoHideDuration={2000}
      disableWindowBlurListener
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={() => {
        setErrorTrigger(false);
      }}
      sx={{
        width: `${globalWidth > 600 ? "30rem" : "initial"}`,
        display: "flex",
        userSelect: "none",
      }}
    >
      <Alert severity="error" sx={{ flex: 1 }}>
        <AlertTitle>Error</AlertTitle>
        Fill in All Fields
      </Alert>
    </Snackbar>
  );
};

export default SnackbarCompoenet;
