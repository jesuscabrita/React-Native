import React from 'react';
import { View, Text, FlatList, Image, Button, ScrollView, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { stylesCarrito } from '../../Styles/styles';
import { IconButton } from 'react-native-paper';
import { aumentarCantidad, disminuirCantidad, eliminarProducto } from '../../redux/reducers/carritoActions';

export const CarritoStack = () => {
    const dispatch = useDispatch();
    const productosEnCarrito = useSelector((state) => state.carrito.productos);

    const totalCompra = productosEnCarrito.reduce(
        (total, producto) => total + producto.price * producto.quantity,
        0
    );

    const handleAumentarCantidad = (id) => {
        dispatch(aumentarCantidad(id));
    };

    const handleDisminuirCantidad = (id) => {
        dispatch(disminuirCantidad(id));
    };

    const handleEliminarProducto = (productId) => {
        dispatch(eliminarProducto(productId));
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
            <View style={stylesCarrito.container}>
                {productosEnCarrito.length > 0 ? (
                    <FlatList
                        data={productosEnCarrito}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={stylesCarrito.productoContainer}>
                                <Image source={{ uri: item.image }} style={stylesCarrito.imagenProducto} />
                                <View style={stylesCarrito.detalleProducto}>
                                    <Text style={stylesCarrito.tituloProducto}>{item.title}</Text>
                                    <Text style={stylesCarrito.precioProducto}>Precio: {item.price}</Text>
                                </View>
                                <View style={stylesCarrito.cantidadContainerB}>
                                    <Button title="-" onPress={() => handleDisminuirCantidad(item.id)} />
                                    <Text style={stylesCarrito.cantidadProducto}>{item.quantity}</Text>
                                    <Button title="+" onPress={() => handleAumentarCantidad(item.id)} />
                                </View>
                                <View style={stylesCarrito.cantidadContainer}>
                                    <IconButton
                                        icon="delete"
                                        iconColor="#b32828"
                                        size={25}
                                        onPress={() => handleEliminarProducto(item.id)}
                                    />
                                </View>
                            </View>
                        )}
                    />
                ) : (
                    <Text style={stylesCarrito.textoVacio}>Tu carrito está vacío</Text>
                )}
                {productosEnCarrito.length > 0 && (
                    <View style={stylesCarrito.resumenContainer}>
                        <Text style={stylesCarrito.totalCompra}>Total: {totalCompra.toFixed(2)}</Text>
                        <Button title="Comprar" />
                    </View>
                )}
            </View>
        </ScrollView>
    </SafeAreaView>
    );
};

