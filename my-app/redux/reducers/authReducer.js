const initialState = {
    user: null,
    userName: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
                userName: action.payload?.displayName || action.payload?.email || null,
            };
        default:
            return state;
    }
};

export default authReducer;