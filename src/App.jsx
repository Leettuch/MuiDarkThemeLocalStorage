import React, { useState, useEffect } from "react";
import { Typography, Paper, AppBar, Toolbar, IconButton, Button } from '@material-ui/core'
import { CssBaseline, ThemeProvider, makeStyles } from "@material-ui/core";
import { Brightness4 } from '@material-ui/icons'
import { defaulTheme } from "./theme";

//Custom Style for this component
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  content: {
    paddingTop: 70,
    paddingLeft: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  paper:{
    width: 550 
  }

}));

export default function App() {
  //we use classes for the custom style
  const classes = useStyles();
  //This state define between dark or light theme with a true or false
  const [themeState, setThemeState] = useState(false);
  // maintheme is defined with the exported theme
  const maintheme = defaulTheme(themeState)

  //This function is in charge of changing the status of the theme (themeState)
  const handleTheme = () => {
    setThemeState(!themeState);
  };

  //This useEffect is for set the theme with the data in the localStorage
  //if isn´t data, the theme state is false
  useEffect(() => {
    const data = localStorage.getItem("theme");
    if (!data) {
      setThemeState(false);
    }
    setThemeState(JSON.parse(data));
  }, []);

  //This useEffect is in charge of the save the theme information in the localstorage
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(themeState));
  });


  return (
    <div>
      {/* With ThemeProvider we use the theme */}
      <ThemeProvider theme={maintheme}>
        {/*CssBaseline we use it to globalize the theme*/}
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="fixed" color="primary">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Dark Mode
              </Typography>
              <Button variant="contained" color="secondary" size="large">
                Button
              </Button>
              {/*In the onClick event we execute the change of theme*/}
              <IconButton color="inherit" onClick={handleTheme}>
                <Brightness4 />
              </IconButton>
            </Toolbar>
          </AppBar>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Paper className={classes.paper}>
              <Typography variant="h2" color="initial">
                Your Content Here
            </Typography>
            </Paper>
          </main>
        </div>

      </ThemeProvider>
    </div>
  );
}
