import { Menu } from "./Menu"
import { useState } from "react";
import { Header } from "./Header";

export const Layout = () => {
    const [activeScreen, setActiveScreen] = useState('Home');
    return(
        <>
            <Header activeScreen={activeScreen}/>
            <Menu activeScreen={activeScreen} onTabPress={(screen) => setActiveScreen(screen)} />
        </>
    )
}