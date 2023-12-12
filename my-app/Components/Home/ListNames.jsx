import { View } from "react-native";
import { styles } from "../../Styles/styles";
import { IconButton, List } from "react-native-paper";

export const ListNames = ({ names, setSelectedItemId, setModalDelete, setNames }) => {
    return(
        <>
        {names.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
                <List.Item
                    title={item.name}
                    titleStyle={item.completed ? [styles.name, styles.completed] : styles.name}
                    left={() => <List.Icon icon="account-circle" />}
                />
                <IconButton
                    icon="delete"
                    iconColor="#a94b4b"
                    size={26}
                    onPress={() => {
                        setSelectedItemId(item.id);
                        setModalDelete(true);
                    }}
                    style={styles.deleteButton}
                />
                <IconButton
                    icon={item.completed ? 'check-circle' : 'circle-outline'}
                    iconColor={item.completed ? '#4CAF50' : '#757575'}
                    size={26}
                    onPress={() => {
                        const updatedNames = names.map((n) =>
                            n.id === item.id ? { ...n, completed: !n.completed } : n
                        );
                        setNames(updatedNames);
                    }}
                    style={styles.completedButton}
                />
            </View>
        ))}
        </>
    )
}