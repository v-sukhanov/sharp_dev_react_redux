import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1
        },
        // пример с данными
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

const counterReducer = counterSlice.reducer;

export const store = configureStore({
    reducer: {
        // counter – имя внутри объекта состояния state.counter
        counter: counterReducer,
    },
});
