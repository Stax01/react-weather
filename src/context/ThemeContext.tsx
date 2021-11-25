import { createContext } from "react";

interface iTheme {
    theme: Theme,
    changeTheme: (theme: Theme) => void
}

export enum Theme {
    LIGHT = "light",
    DARK = "dark"
}

export const ThemeContext = createContext<iTheme>({
    theme: Theme.LIGHT,
    changeTheme: () => {}
})