import { createTheme } from "@material-ui/core/styles";
import { errorColor, neutralColor, primaryColor, secondaryColor, tertiaryColor } from "./colors";

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: 'white'
        },
        secondary: {
            main: secondaryColor
        },
        // tertiary: {
        //     main: tertiaryColor
        // },
        text: {
            primary: primaryColor
        },
        error: {
            main: neutralColor
        }
    }
})

export default theme;