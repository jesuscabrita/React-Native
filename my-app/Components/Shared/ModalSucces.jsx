import * as React from 'react';
import { Button, Dialog, Paragraph, Portal } from 'react-native-paper';

export const ModalSuccess = ({ visible, setVisible, handleClick, texto }) => {
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                <Dialog.Icon icon="check-circle" color="#4CAF50" size={60} style={{ alignSelf: 'center' }} />
                <Dialog.Title>{texto}</Dialog.Title>
                <Dialog.Content style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Button onPress={() => handleClick()}>Ok</Button>
                </Dialog.Content>
            </Dialog>
        </Portal>
    );
};

export const ModalError = ({ visible, setVisible, handleClick, texto }) => {
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                <Dialog.Icon icon="alert-circle" color="#FF0000" size={60} style={{ alignSelf: 'center' }} />
                <Dialog.Title>Error</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>{texto}</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={() => handleClick()}>Ok</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};