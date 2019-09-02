import React from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const Button = styled.div`
  background-color: #282c34;
  color: #f5f5f5;
  position: relative;
  cursor: pointer;
  padding: 8px 8px 8px 8px;
`;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  paper: {
    marginRight: theme.spacing(2)
  }
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  return (
    <div>
      <div className={classes.root}>
        <Paper className={classes.paper} />
        <div>
          <Button
            ref={anchorRef}
            aria-controls="guide-list-grow"
            aria-haspopup="true"
            onClick={handleToggle}
          >
            Guide
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            keepMounted
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper id="guide-list-grow">
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      style={{
                        position: "absolute"
                      }}
                    >
                      <MenuItem onClick={handleClose}>Swordsman</MenuItem>
                      <MenuItem onClick={handleClose}>Mage</MenuItem>
                      <MenuItem onClick={handleClose}>Thief</MenuItem>
                      <MenuItem onClick={handleClose}>Archer</MenuItem>
                      <MenuItem onClick={handleClose}>Acolyte</MenuItem>
                      <MenuItem onClick={handleClose}>Merchant</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    </div>
  );
}
