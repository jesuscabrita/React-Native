import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 20,
        fontFamily: 'Montserrat_400Bold'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        fontFamily: 'Montserrat_400Bold'
    },
    input: {
        flex: 1,
        marginRight: 10,
        fontFamily: 'Montserrat_400Bold'
    },
    listContainer: {
        width: '100%',
        padding: 20,
        fontFamily: 'Montserrat_400Bold'
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        fontFamily: 'Montserrat_400Bold'
    },
    name: {
        fontSize: 20,
        width:'130px',
        fontFamily: 'Montserrat_400Bold'
    },
    emptyListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        fontFamily: 'Montserrat_400Bold'
    },
    emptyListText: {
        fontSize: 18,
        color: '#555',
        fontFamily: 'Montserrat_400Bold'
    },
});

export const StylesScreen2 = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 20,
        gap:'20px',
        fontFamily: 'Montserrat_400Bold'
    }
})

export const stylesModalDelete = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontFamily: 'Montserrat_400Bold'
    },
})

export const stylesDetalle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    card: {
        margin: 16,
        borderRadius: 8,
        elevation: 4,
    },
    cardImage: {
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardTitle: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 24,
        marginBottom: 8,
    },
    cardCategory: {
        fontFamily: 'Montserrat_400Regular',
        color: '#4CAF50',
        marginBottom: 4,
    },
    cardDescription: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 16,
        marginBottom: 12,
    },
    cardPrice: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#4CAF50',
    },
    actionsContainer: {
        margin: 16,
    },
    addToCartButton: {
        backgroundColor: '#4CAF50',
    },
});

export const stylesCarrito = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    productoContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 8,
    },
    imagenProducto: {
        width: 80,
        height: 80,
        marginRight: 16,
    },
    detalleProducto: {
        flex: 1,
    },
    tituloProducto: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    precioProducto: {
        fontSize: 16,
    },
    cantidadProducto: {
        fontSize: 16,
    },
    textoVacio: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 50,
    },
    resumenContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    totalCompra: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    cantidadContainerB:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        gap:'5px',
    },
    cantidadContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    }
});