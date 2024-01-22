import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setAuthUser } from '../../redux/reducers/authActions';
import { stylesHeader } from '../../Styles/styles';

export const Header = ({ activeScreen }) => {
    const [showBackButton, setShowBackButton] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const userName = useSelector((state) => state.auth.userName);

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleLogout = () => {
        dispatch(setAuthUser(null));
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
        setShowUserMenu(false);
    };

    useEffect(() => {
        setShowBackButton(activeScreen !== 'Home');
    }, [activeScreen]);

    return (
        <View style={stylesHeader.header}>
            {showBackButton ? (
                <TouchableOpacity onPress={handleBackPress}>
                    <Text style={stylesHeader.headerText}>{'< Volver'}</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={() => setShowUserMenu(true)}>
                    <FontAwesome name="user" size={24} color="white" />
                </TouchableOpacity>
            )}
            <Text style={stylesHeader.headerText}>
                {activeScreen === 'Home' ? 'Home' : activeScreen === 'Productos' ? 'Productos' : activeScreen === 'Carrito' ? 'Carrito' : 'Profile'}
            </Text>
            <Modal animationType="slide" transparent={true} visible={showUserMenu}>
                <View style={stylesHeader.modalContainer}>
                    <TouchableOpacity style={stylesHeader.menuItem} onPress={() => { navigation.navigate('Profile')}}>
                        <FontAwesome name="user" size={18} color="black" />
                        <Text style={stylesHeader.menuItemText}>{userName}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesHeader.menuItem} onPress={handleLogout}>
                        <FontAwesome name="sign-out" size={24} color="black" />
                        <Text style={stylesHeader.menuItemText}>Cerrar Sesión</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesHeader.menuItem} onPress={() => setShowUserMenu(false)}>
                        <FontAwesome name="times" size={24} color="black" />
                        <Text style={stylesHeader.menuItemText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};