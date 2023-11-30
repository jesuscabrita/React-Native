import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, List, IconButton } from 'react-native-paper';
import { handleAdd, handleDelete } from '../../utils/utils';
import { styles } from '../../Styles/styles';
import { Modal } from './Modal';

export const MyComponent = () => {
    const [text, setText] = useState('');
    const [names, setNames] = useState([]);
    const [modalDelete, setModalDelete] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const renderNames = () => {
        return names.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
                <List.Item
                    title={item.name}
                    titleStyle={styles.name}
                    left={() => <List.Icon icon="account-circle"/>}
                />
                <IconButton
                    icon="delete"
                    iconColor='#a94b4b'
                    size={26} 
                    onPress={() => {
                        setSelectedItemId(item.id); // Al presionar el botón, actualiza el ID seleccionado
                        setModalDelete(true); // Abre el modal de eliminación
                    }}
                    style={styles.deleteButton} 
                />
            </View>
        ));
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        label="Personas"
                        value={text}
                        onChangeText={(text) => setText(text)}
                        style={styles.input}
                    />
                    <Button mode="contained" onPress={()=>{handleAdd(text, names, setNames, setText)}}>
                        Añadir
                    </Button>
                </View>
                <View style={styles.listContainer}>
                    <List.Section>{renderNames()}</List.Section>
                </View>
            </View>
            {modalDelete && (
                <Modal
                    setVisible={setModalDelete}
                    visible={modalDelete}
                    handleDelete={() => {
                        if (selectedItemId) {
                            handleDelete(selectedItemId, names, setNames);
                            setModalDelete(false); 
                        }
                    }}
                />
            )}
        </>
    );
};