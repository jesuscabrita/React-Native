import * as React from 'react';
import { Button, Dialog, Portal } from 'react-native-paper';

export const ModalSuccess = ({ visible, setVisible, handleClick }) => {
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                <Dialog.Icon icon="check-circle" color="#4CAF50" size={60} style={{ alignSelf: 'center' }} />
                <Dialog.Title>Producto añadido al carrito</Dialog.Title>
                <Dialog.Content style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Button onPress={() => handleClick()}>Ok</Button>
                </Dialog.Content>
            </Dialog>
        </Portal>
    );
};