export const initialState = {
    user: {
        name: 'Михаил',
        surname: 'Рубинов',
        age: 36,
    },
}

export function rootReducer(state = initialState) {
    return state
}
