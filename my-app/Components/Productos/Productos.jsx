import React, { useState, useEffect } from 'react';
import { ScrollView, View, SafeAreaView } from 'react-native';
import { StylesScreen2 } from '../../Styles/styles';
import { TextInput, IconButton, Chip, Button, Text, SegmentedButtons } from 'react-native-paper'; 
import data from '../../lib/product.json';
import { Cards } from './Cards';

export const Productos = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [showNoResults, setShowNoResults] = useState(false);
    const [showChip, setShowChip] = useState(false);
    const [value, setValue] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        handleSearch();
        setShowChip(false);
    }, [selectedCategory]);

    const handleSearch = () => {
        let newFilteredData = data.filter((producto) =>
            producto.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (selectedCategory) {
            newFilteredData = newFilteredData.filter(
                (producto) => producto.category === selectedCategory
            );
        }

        setFilteredData(newFilteredData);
        setShowNoResults(newFilteredData.length === 0);
        setShowChip(newFilteredData.length > 0);
        if (searchTerm === '') {
            setShowChip(false);
        }
    };

    const handleClear = () => {
        setSearchTerm('');
        setFilteredData(data);
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

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={StylesScreen2.container}>
                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%', fontFamily: 'Montserrat_400Bold' }}>
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
                                style={{width: '80px', display: 'flex', justifyContent: 'center', fontFamily: 'Montserrat_400Bold'}}
                            />
                        </SafeAreaView>
                    </View>
                    {showChip && (
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, fontFamily: 'Montserrat_400Bold' }}>
                            <Chip mode="outlined" onClose={handleClear}>
                                {searchTerm}
                            </Chip>
                        </View>
                    )}
                    {showNoResults ? (
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <Text style={{fontFamily: 'Montserrat_400Bold'}} >No hay resultados</Text>
                            <Button style={{fontFamily: 'Montserrat_400Bold'}} onPress={handleClear}>Borrar filtro</Button>
                        </View>
                    ) : (
                        filteredData.map((producto) => (
                            <Cards
                                key={producto.id}
                                title={producto.title}
                                description={producto.description}
                                price={producto.price}
                                image={producto.image}
                                category={producto.category}
                            />
                        ))
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};