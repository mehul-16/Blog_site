import React, { useState } from "react";
import "./header.css";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import { useStyles } from "./utils";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
const Header = () => {
  const classes = useStyles();
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState();
  return (
    
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(to right, #004e92, #000428)"
      }}
    >
      <Toolbar>
        <Typography className={classes.font} variant="h4">
          <h1 data-text="MindScroll">MindScroll</h1>
          <span className="material-symbols-outlined" style={{marginLeft:"0.5em", fontSize:"1em"}}>forum</span>
        </Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft={"auto"} marginRight="auto">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/blogs"
                label=" ☁️Feed"
              />
             
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/myBlogs"
                label="💬My Posts"
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/blogs/add"
                label="+Add Posts"
              />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {isLoggedIn && (
            <Button
              onClick={() => dispath(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
