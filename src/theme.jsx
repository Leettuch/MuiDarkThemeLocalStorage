import { deepPurple, blue, pink, purple, } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core'


//We use this function to create our custom theme 
export const defaulTheme = (themeState) => {
    //If the state of the theme is false (it means the default state value) the pallete is light
    //In different case, being true, the pallete is dark
    const paletteTheme = themeState ? "dark" : "light";
    //We can define primary and secondary colors
    //This is an example
    const mainPrimaryColor = themeState ? deepPurple[700] : blue[600];
    const mainSecondaryColor = themeState ? pink[800] : purple[700];
    //We define a theme with ´createMuiTheme´
    //More info here : https://material-ui.com/es/customization/theming/
    const mainTheme = createMuiTheme({
        palette: {
            type: paletteTheme,
            primary: {
                main: mainPrimaryColor
            },
            secondary: {
                main: mainSecondaryColor
            }
        }
    });
    //We return the theme for its use
    return mainTheme;
}
