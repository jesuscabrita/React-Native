import { v4 as uuidv4 } from 'uuid'; 

export const handleAdd = (name, names, setNames, setText) => {
    const newNames = [...names, { id: uuidv4(), name, completed: false }];
    setNames(newNames);
    setText('');
};;

export const handleDelete = (id, names, setNames) => {
    const updatedNames = names.filter((item) => item.id !== id);
    setNames(updatedNames);
};