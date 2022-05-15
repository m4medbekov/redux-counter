import {DECREMENT, INCREMENT } from "./types";

export function increment() {
    return {
        type: INCREMENT
    }    
}

export function decrement() {
    return {
        type: DECREMENT
    }    
}

export function async_increment() {
    return function(dispatch) {
        setTimeout(() => {
            dispatch(increment())
        }, 2000)
    } 
}