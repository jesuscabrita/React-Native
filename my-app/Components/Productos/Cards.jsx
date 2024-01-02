import React, { useState } from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { COLORS } from '../../utils/constants';

const LeftContent = (props) => <Avatar.Icon {...props} icon="shopping" />;

export const Cards = ({title, image, price, description, category, navigation, id, onAgregarAlCarrito, setModalOpen }) => {
    const [quantity, setQuantity] = useState(1);

    const handleCardPress = () => {
        navigation.navigate('ProductDetails', { productId: id, title, image, price, description, category });
    };

    const handleAgregarAlCarrito = () => {
        if (parseInt(quantity) > 0) {
            onAgregarAlCarrito({ id, title, image, price, description, category, quantity: parseInt(quantity) });
            setQuantity(1);
            setModalOpen(true);
        }
    };

    return (
        <Card style={{ width: '100%', padding: 16, fontFamily: 'Montserrat_400Regular' }}>
            <Card.Cover source={{ uri: image }} />
            <Card.Title title={title} subtitle={category} left={LeftContent} style={{ fontFamily: 'Montserrat_400Regular' }} />
            <Card.Content>
                <Text variant="titleLarge" style={{ fontFamily: 'Montserrat_400Regular', color: COLORS.primary, fontSize: 20 }}>
                    {title}
                </Text>
                <Text variant="bodyMedium" style={{ fontFamily: 'Montserrat_400Regular', marginBottom: 8 }}>
                    {description}
                </Text>
                <Text variant="titleLarge" style={{ fontFamily: 'Montserrat_400Regular', color: COLORS.green, fontSize: 24, fontWeight: '900' }}>
                    {price}
                </Text>
            </Card.Content>
            <Card.Actions style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '8px', width: '100%', padding: 8 }}>
                <Button onPress={handleCardPress} style={{ width: '48%' }}>Ver Detalles</Button>
                <Button onPress={handleAgregarAlCarrito} style={{ width: '48%' }}>Agregar al carrito</Button>
            </Card.Actions>
        </Card>
    )
}