import React, { useState, useEffect } from 'react';
import { ScrollView, View, SafeAreaView } from 'react-native';
import { StylesScreen2 } from '../../Styles/styles';
import { TextInput, IconButton, Chip, Button, Text, SegmentedButtons, ActivityIndicator, Icon } from 'react-native-paper'; 
import { Cards } from './Cards';
import { useDispatch } from 'react-redux';
import { agregarProductoAlCarrito } from '../../redux/reducers/carritoActions';
import { ModalSuccess } from '../Shared/ModalSucces';
import { useGetProductsQuery } from '../../service/api';

export const Productos = ({ navigation }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [showNoResults, setShowNoResults] = useState(false);
    const [showChip, setShowChip] = useState(false);
    const [value, setValue] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();
    const { data: product, isError, isLoading } = useGetProductsQuery();

    useEffect(() => {
        if (product) {
            setFilteredData(product);
        }
    }, [product]);

    const handleAgregarAlCarrito = (producto) => {
        dispatch(agregarProductoAlCarrito(producto));
    };

    useEffect(() => {
        handleSearch();
        setShowChip(false);
    }, [selectedCategory]);

    const handleSearch = () => {
        let newFilteredData = product?.filter((producto) =>
            producto.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (selectedCategory) {
            newFilteredData = newFilteredData.filter(
                (producto) => producto.category === selectedCategory
            );
        }

        setFilteredData(newFilteredData);
        setShowNoResults(newFilteredData && newFilteredData.length === 0);
        setShowChip(newFilteredData && newFilteredData.length > 0);
        if (searchTerm === '') {
            setShowChip(false);
        }
    };

    const handleClear = () => {
        setSearchTerm('');
        setFilteredData(product);
        setShowNoResults(false);
        setShowChip(false);
        setSelectedCategory('')
    };

    const handleCategoryChange = (category) => {
        if (selectedCategory === category) {
            setValue('');
            setSelectedCategory('');
        } else {
            setValue(category);
            setSelectedCategory(category);
        }
    };

    if (isLoading) {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        <ActivityIndicator size="large" color="rgb(103, 80, 164)" />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

    if (isError) {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        <Icon name="alert" size={50} color="red" />
                        <Text style={{ marginTop: 10, fontFamily: 'Montserrat_400Regular' }}>Error al cargar productos</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={StylesScreen2.container}>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%', fontFamily: 'Montserrat_400Regular' }}>
                        <TextInput
                            label="Buscar por título"
                            value={searchTerm}
                            onChangeText={(text) => setSearchTerm(text)}
                            style={{ width: '80%' }}
                        />
                        <IconButton
                            icon="magnify"
                            onPress={handleSearch}
                            style={{ width: searchTerm !== '' ? '10%' : '20%', justifyContent: 'center', alignItems: 'center' }}
                        />
                        {searchTerm !== '' && (
                            <IconButton
                                icon="close-circle"
                                onPress={handleClear}
                                style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }}
                            />
                        )}
                    </View>
                    <View>
                        <SafeAreaView style={{flex: 1,alignItems: 'center' }}>
                            <SegmentedButtons
                                value={value}
                                onValueChange={(category) => handleCategoryChange(category)}
                                buttons={[
                                { value: 'Electronicos', label: 'Electronicos'},
                                { value: 'Muebles', label: 'Muebles'},
                                { value: 'Libros', label: 'Libros' },
                                { value: 'Ropa y Calzado', label: 'Ropa y Calzado' },
                                ]}
                                style={{width: '80px', display: 'flex', justifyContent: 'center', fontFamily: 'Montserrat_400Regular'}}
                            />
                        </SafeAreaView>
                    </View>
                    {showChip && (
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, fontFamily: 'Montserrat_400Regular' }}>
                            <Chip mode="outlined" onClose={handleClear}>
                                {searchTerm}
                            </Chip>
                        </View>
                    )}
                    {showNoResults ? (
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <Text style={{fontFamily: 'Montserrat_400Regular'}} >No hay resultados</Text>
                            <Button style={{fontFamily: 'Montserrat_400Regular'}} onPress={handleClear}>Borrar filtro</Button>
                        </View>
                    ) : (
                        filteredData && filteredData.map((producto) => (
                            <Cards
                                key={producto.id}
                                title={producto.title}
                                description={producto.description}
                                price={producto.price}
                                image={producto.image}
                                category={producto.category}
                                navigation={navigation} 
                                id={producto.id} 
                                onAgregarAlCarrito={() => handleAgregarAlCarrito(producto)}
                                setModalOpen={setModalOpen}
                            />
                        ))
                    )}
                </View>
                {modalOpen && <ModalSuccess texto={'Producto añadido al carrito'} setVisible={setModalOpen} visible={modalOpen} handleClick={()=>{setModalOpen(!modalOpen)}}/>}
            </ScrollView>
        </SafeAreaView>
    );
};