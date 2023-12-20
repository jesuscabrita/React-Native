import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card, Title, Paragraph, Button, Colors } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import { stylesDetalle } from '../../Styles/styles';

export const ProductDetails = ({ route }) => {
    const { title, image, price, description, category } = route.params;

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
                <Button mode="contained" style={stylesDetalle.addToCartButton}>
                    Agregar al carrito
                </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
