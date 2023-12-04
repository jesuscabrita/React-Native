import * as React from 'react';
import { Button, Dialog, Portal  } from 'react-native-paper';
import { stylesModalDelete } from '../../Styles/styles';

export const Modal = ({visible, setVisible, handleDelete }) => {
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={() => { setVisible(false) }}>
                <Dialog.Icon icon="alert" />
                <Dialog.Title style={stylesModalDelete.title}>Estas seguro que quieres eliminar esta persona?</Dialog.Title>
                <Dialog.Content style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                    <Button onPress={() => { setVisible(false) }}>Cancel</Button>
                    <Button onPress={() => handleDelete()}>Ok</Button>
                </Dialog.Content>
            </Dialog>
        </Portal>
    );
};