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
import Equipment from "../calculator/Equipment.js";

// const Add = styled.button`
//   padding: 50px 50px 50px 50px;
//   margin: 30px 30px 30px 30px;
//   cursor: pointer;
//   :hover {
//     background-color: red;
//   }
// `;

const AddCur = styled.button`
  padding: 30px 30px 30px 30px;
  margin: 10px 10px 10px 10px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 3px 8px #aaa, inset 0px 2px 3px #fff;
  :hover {
    background-color: red;
  }
`;

// const AddWish = styled.button`
//   padding: 50px 50px 50px 50px;
//   cursor: pointer;
//   :hover {
//     background-color: red;
//   }
// `;

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
      <AddCur onClick={handleClickOpen}>
        <AddBoxIcon
          style={{
            alignItems: "center",
            fontSize: "100px"
          }}
        />
        <ul />
        Add Current Item
      </AddCur>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        style={{
          width: "100%"
        }}
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Select the items"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {
              <div>
                <div> *search panel* </div>

                <Equipment />
              </div>
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
