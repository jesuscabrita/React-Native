import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';

const CameraPreview = ({ photoUri, retakePicture, savePicture, removePicture, cameraRef }) => (
    <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1, width: '100%' }} type={Camera.Constants.Type.front} ref={cameraRef}>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {photoUri ? (
                    <View style={{ position: 'absolute', bottom: 0, width: '100%', alignItems: 'center' }}>
                        <Image source={{ uri: photoUri }} style={{ width: 200, height: 200, borderRadius: 100, marginBottom: 20 }} />
                        <TouchableOpacity onPress={removePicture} style={{ backgroundColor: 'red', borderRadius: 10, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Eliminar Foto</Text>
                        </TouchableOpacity>
                    </View>
                ) : null}

                <TouchableOpacity
                    style={{
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                        padding: 20,
                    }}
                    onPress={retakePicture}
                >
                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                        padding: 20,
                    }}
                    onPress={savePicture}
                >
                    <View style={{ backgroundColor: 'rgb(103, 80, 164)', borderRadius: 50, padding: 15 }}>
                        <MaterialIcons name="camera-alt" size={24} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
        </Camera>
    </View>
);

export const Profile = () => {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [photoUri, setPhotoUri] = useState(null);
    const [showCamera, setShowCamera] = useState(false);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (galleryStatus.status !== 'granted') {
                alert('Se necesitan permisos para acceder a la galería de fotos.');
            }

            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            if (cameraStatus.status === 'granted') {
                setHasCameraPermission(true);
            } else {
                alert('Se necesita permiso para acceder a la cámara.');
            }
        })();
    }, []);

    const pickImage = async (fromCamera = false) => {
        if (fromCamera && !hasCameraPermission) {
            alert('Permiso de cámara denegado');
            return;
        }

        if (fromCamera) {
            setShowCamera(true);
        } else {
            setShowCamera(false);

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5,
            });

            if (!result.cancelled) {
                setPhotoUri(result.uri);
            }
        }
    };

    const retakePicture = () => {
        setShowCamera(false);
    };

    const savePicture = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            setPhotoUri(photo.uri);
            setShowCamera(false);
        }
    };

    const removePicture = () => {
        setPhotoUri(null);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: !showCamera && 'center' }}>
            {showCamera && hasCameraPermission ? (
                <CameraPreview
                    photoUri={photoUri}
                    retakePicture={retakePicture}
                    savePicture={savePicture}
                    removePicture={removePicture}
                    cameraRef={cameraRef}
                />
            ) : (
                <View style={{display:'flex', alignItems:'center'}}>
                    {photoUri ? (
                        <View>
                            <Image source={{ uri: photoUri }} style={{ width: 200, height: 200, borderRadius: 100 }} />
                            <TouchableOpacity onPress={removePicture} style={{ marginTop: 10 }}>
                                <Text style={{ fontSize: 16, color: 'red' }}>Eliminar Imagen</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View>
                            <Image
                                source={{ uri: 'https://cdhcolima.org.mx/wp-content/uploads/2016/11/user.png' }}
                                style={{ width: 200, height: 200, borderRadius: 100 }}
                            />
                            <TouchableOpacity onPress={() => pickImage(false)} style={{ marginTop: 10 }}>
                                <Text style={{ fontSize: 16, color: 'white', backgroundColor:'rgb(103, 80, 164)', borderRadius:'8px', padding:'10px', textAlign:'center' }}>Seleccionar de la Galería</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => pickImage(true)} style={{ marginTop: 10 }}>
                                <Text style={{ fontSize: 16, color: 'white', backgroundColor:'green',borderRadius:'8px', padding:'10px', textAlign:'center' }}>Tomar Foto</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            )}
        </View>
    );
};