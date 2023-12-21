import React, { useState } from 'react';
import { ScrollView, Text, View, SafeAreaView } from 'react-native';
import { TextInput, Button, List, IconButton } from 'react-native-paper';
import { handleAdd, handleDelete } from '../../utils/utils';
import { styles } from '../../Styles/styles';
import { Modal } from '../Shared/Modal';
import { ListNames } from './ListNames';

export const Home = () => {
    const [text, setText] = useState('');
    const [names, setNames] = useState([]);
    const [modalDelete, setModalDelete] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            label="Personas"
                            value={text}
                            onChangeText={(text) => setText(text)}
                            style={styles.input}
                        />
                        <Button mode="contained" onPress={() => handleAdd(text, names, setNames, setText)} style={{fontFamily: 'Montserrat_400Bold'}}>
                            Añadir
                        </Button>
                    </View>
                    <View style={styles.listContainer}>
                        {names.length === 0 ? (
                            <View style={styles.emptyListContainer}>
                                <Text style={styles.emptyListText}>No hay personas</Text>
                                <IconButton icon="account-remove" size={30} color="#000" />
                            </View>
                        ) : (
                            <List.Section>
                                <ListNames names={names} setModalDelete={setModalDelete} setNames={setNames} setSelectedItemId={setSelectedItemId} />
                            </List.Section>
                        )}
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
            </ScrollView>
        </SafeAreaView>
    );
};