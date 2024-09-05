import { configureStore, createSlice } from '@reduxjs/toolkit';
import { saveState, loadState } from './storage';

const todoSlice = createSlice({
    name: 'todo',
    initialState: loadState() || [],

    reducers: {
        add: (state, action) => {
            //if trying to add a dish tha is alredy in the car just increment the quantity, else add a new dish
            const existingItem = state.find(item => item.id === action.payload.id);

            if(existingItem){
                existingItem.quantity += action.payload.quantity;
            }
            else{
                state.push(action.payload)
            }
        },
        remove: (state, action) => {
            return state.filter(item => item.id !== action.payload.id)
        }
    }
})

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    }
})

store.subscribe(() => {
    saveState(store.getState().todo); // Save only the 'todo' state slice to localStorage
});

// Selector to calculate the total quantity
export const selectTotalQuantity = (state) => {
    return state.todo.reduce((total, item) => total + item.quantity, 0);
};
// Selector to calculate the total price
export const selectTotalPrice = (state) => {
    return state.todo.reduce((totalPrice, item) => totalPrice + (item.price * item.quantity), 0);
};

export const { add, remove } = todoSlice.actions;
