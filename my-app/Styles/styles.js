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