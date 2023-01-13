import React from "react";
import { Dialog, DialogContent } from "@mui/material/";
import Results from "../results";

type DailogProps = {
  res: number;
  action: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

const DialogComponent = (props: DailogProps) => {
  const Result = props.res;

  const [modalLock, setmodalLock] = props.action;

  const handleOnClose = () => {
    setmodalLock(false);
  };
  return (
    <Dialog onClose={handleOnClose} open={modalLock} fullWidth>
      <DialogContent>
        <Results res={Result} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
