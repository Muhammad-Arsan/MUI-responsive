import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { lightBlue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import MuiAlert from "@mui/material/Alert";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 10,
    right: 10,
  },
  modal: {
    width: 500,
    height: 600,
    backgroundColor: "#cde2f7",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
      backgroundColor: lightBlue,
    },
  },
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Add = () => {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  // console.log(open);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  const classes = useStyles();
  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open} className={classes.modal}>
        <Container>
          <form className={classes.form}>
            <div className={classes.items}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                style={{ width: "90%", margin: "20px", marginRight: "50px" }}
              />
            </div>
            <div className={classes.items}>
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                placeholder="tell your story"
                multiline
                rows={4}
                style={{ width: "90%", margin: "20px", marginRight: "50px" }}
              />
            </div>
            <div>
              <TextField
                select
                value="public"
                style={{ width: "90%", margin: "20px", marginRight: "50px" }}
              >
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="private">Private</MenuItem>
                <MenuItem value="unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div style={{ width: "90%", margin: "20px", marginRight: "50px" }}>
              <FormLabel component="legend">Who can Comment?</FormLabel>
              <RadioGroup aria-label="gender" name="gender1">
                <FormControlLabel
                  value="everybody"
                  control={<Radio />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="myfriends"
                  control={<Radio />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="nobody"
                  control={<Radio />}
                  label="No Body"
                />
                <FormControlLabel
                  value="disabled"
                  disabled
                  control={<Radio />}
                  label="(Disabled option)"
                />
              </RadioGroup>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: "10px" }}
                onClick={() => setOpenAlert(true)}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
