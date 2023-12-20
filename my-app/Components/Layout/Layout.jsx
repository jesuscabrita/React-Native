import { Menu } from "./Menu"
import { useState } from "react";
import { Header } from "./Header";
import { useNavigation } from "@react-navigation/native";

export const Layout = () => {
    const [activeScreen, setActiveScreen] = useState('Home');
    const navigation = useNavigation();

    return (
        <>
            <Header activeScreen={activeScreen} navigation={navigation} />
            <Menu activeScreen={activeScreen} onTabPress={(screen) => setActiveScreen(screen)} />
        </>
    );
}