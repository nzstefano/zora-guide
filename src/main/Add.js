import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import AddBoxIcon from "@material-ui/icons/AddBox";
import styled from "styled-components";

const Add = styled.button`
  padding: 50px 50px 50px 50px;
  margin: 30px 30px 30px 30px;
  cursor: pointer;
  :hover {
    background-color: red;
  }
`;

const AddCur = styled.button`
  padding: 50px 50px 50px 50px;
  cursor: pointer;
  :hover {
    background-color: red;
  }
`;

const AddWish = styled.button`
  padding: 50px 50px 50px 50px;
  cursor: pointer;
  :hover {
    background-color: red;
  }
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Add onClick={handleClickOpen}>Add Item</Add>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Select the items"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <AddCur>
              <AddBoxIcon
                style={{
                  alignItems: "center",
                  fontSize: "100px"
                }}
              />
              <ul />
              Add Current Item
            </AddCur>
            <AddWish>
              <AddBoxIcon
                style={{
                  alignItems: "center",
                  fontSize: "100px"
                }}
              />
              <ul />
              Add Wish Item
            </AddWish>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Calculate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
