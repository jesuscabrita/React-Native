import React, { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card, Title, Paragraph, Button, Colors } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import { stylesDetalle } from '../../Styles/styles';
import { agregarProductoAlCarrito } from '../../redux/reducers/carritoActions';
import { useDispatch } from 'react-redux';
import { ModalSuccess } from '../Shared/ModalSucces';

export const ProductDetails = ({ route }) => {
    const [quantity, setQuantity] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();
    const { title, image, price, description, category, id } = route.params;

    const handleAgregarAlCarrito = () => {
        if (parseInt(quantity) > 0) {
            dispatch(agregarProductoAlCarrito({ id, title, image, price, description, category, quantity: parseInt(quantity) }));
            setQuantity(1);
            setModalOpen(true);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={stylesDetalle.container}>
                <Card style={stylesDetalle.card}>
                <Card.Cover source={{ uri: image }} style={stylesDetalle.cardImage} />
                <Card.Content>
                    <Title style={stylesDetalle.cardTitle}>{title}</Title>
                    <Paragraph style={stylesDetalle.cardCategory}>{category}</Paragraph>
                    <Text style={stylesDetalle.cardDescription}>{description}</Text>
                    <Text style={stylesDetalle.cardPrice}>Precio: {price}</Text>
                </Card.Content>
                </Card>
                <View style={stylesDetalle.actionsContainer}>
                <Button mode="contained" onPress={handleAgregarAlCarrito} style={stylesDetalle.addToCartButton}>
                    Agregar al carrito
                </Button>
                </View>
            </ScrollView>
            {modalOpen && <ModalSuccess setVisible={setModalOpen} visible={modalOpen} handleClick={()=>{setModalOpen(!modalOpen)}}/>}
        </SafeAreaView>
    );
};
