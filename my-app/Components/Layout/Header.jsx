import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export const Header = ({ activeScreen, navigation }) => {
    const [showBackButton, setShowBackButton] = useState(false);

    const handleBackPress = () => {
        navigation.goBack();
    };

    useEffect(() => {
        setShowBackButton(activeScreen !== 'Home');
    }, [activeScreen]);

    return (
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgb(103, 80, 164)', height: '80px', paddingHorizontal: 16 }}>
            {showBackButton && (
                <TouchableOpacity onPress={handleBackPress}>
                    <Text style={{ fontSize: 20, color: 'white', fontFamily: 'Montserrat_700Bold' }}>
                        {'< Volver'}
                    </Text>
                </TouchableOpacity>
            )}
            <Text style={{ fontSize: 20, color: 'white', fontFamily: 'Montserrat_700Bold' }}>
                {activeScreen === 'Home' ? 'Home' : activeScreen === 'Productos' ? 'Productos' : 'Carrito'}
            </Text>
        </View>
    );
};