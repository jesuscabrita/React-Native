import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { stylesLogin } from '../../Styles/styles';
import { useLoginMutation, useSignupMutation } from '../../service/auth';
import { ModalError, ModalSuccess } from '../Shared/ModalSucces';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../../redux/reducers/authActions';

export const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [openModalError, setOpenModalError] = useState(false);
    const [errorClave, setErrorClave] = useState(false);
    const [errorLogin, setErrorLogin] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false); 
    const navigation = useNavigation();
    const [triggerSignup, {data, isError, isSuccess, error, isLoading}] = useSignupMutation();
    const [triggerLogin, {data: data2, isError: isErro2, isSuccess: isSuccess2, error: error2, isLoading: isLoading2}] = useLoginMutation()

    const handleLogin = async () => {
        const response = await triggerLogin({ email, password });
        if (response.data) {
            dispatch(setAuthUser(response.data));
            navigation.reset({
                index: 0,
                routes: [{ name: 'App' }],
            });
        } else {
            setErrorLogin(true)
        }
    };

    const handleToggleMode = () => {
        setIsRegistering(!isRegistering);
    };

    const handleAction = async () => {
        if (isRegistering) {
            if (password === confirmPassword) {
                const response = await triggerSignup({ email, password });
                if (response.data) {
                    setOpenModal(true);
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');
                } else {
                    setOpenModalError(true)
                }
            } else {
                setErrorClave(true)
            }
        } else {
            handleLogin();
        }
    };

    return (
        <View style={stylesLogin.container}>
            <FontAwesome name="sign-in" size={60} color="rgb(103, 80, 164)" />
            <Text style={stylesLogin.title}>{isRegistering ? 'Registro' : 'Iniciar Sesión'}</Text>
            <TextInput
                style={stylesLogin.input}
                placeholder="Correo electrónico"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={stylesLogin.input}
                placeholder="Contraseña"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            {isRegistering && (
                <TextInput
                    style={stylesLogin.input}
                    placeholder="Confirmar Contraseña"
                    secureTextEntry
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                />
            )}
            <TouchableOpacity style={stylesLogin.button} onPress={handleAction}>
                <Text style={stylesLogin.buttonText}>{isRegistering ? 'Registrarse' : 'Iniciar Sesión'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleToggleMode}>
                <Text style={stylesLogin.toggleText}>
                    {isRegistering ? '¿Ya tienes una cuenta? Inicia Sesión' : '¿No tienes una cuenta? Regístrate'}
                </Text>
            </TouchableOpacity>
            {errorLogin && <ModalError texto={error2?.data?.error?.message} setVisible={setErrorLogin} visible={errorLogin} handleClick={()=>{setErrorLogin(!errorLogin)}}/>}
            {errorClave && <ModalError texto={'Las contraseñas no coinciden'} setVisible={setErrorClave} visible={errorClave} handleClick={()=>{setErrorClave(!errorClave)}}/>}
            {openModalError && <ModalError texto={error?.data?.error?.message} setVisible={setOpenModalError} visible={openModalError} handleClick={()=>{setOpenModalError(!openModalError)}}/>}
            {openModal && <ModalSuccess texto={'Se registro el usuario correctamente'}  setVisible={setOpenModal} visible={openModal} handleClick={()=>{setOpenModal(!openModal)}}/>}
        </View>
    );
};