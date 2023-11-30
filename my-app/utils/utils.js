export const handleAdd = (text, names, setNames, setText) => {
    if (text.trim() === '') {
        return;
    }
    const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
    setNames([...names, { id: Date.now(), name: capitalizedText }]);
    setText('');
};

export const handleDelete = (id, names, setNames) => {
    const updatedNames = names.filter((item) => item.id !== id);
    setNames(updatedNames);
};