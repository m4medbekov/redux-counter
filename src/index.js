import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { async_increment, decrement, increment } from "./redux/actions"
import { rootReducer } from "./redux/rootReducer"
import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(
    rootReducer, 
    0,
    applyMiddleware(thunk)
)

store.subscribe(() => {
    const state = store.getState()
    counter.textContent = state
})

store.dispatch({type: 'INIT_APPLICATION'})

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
    store.dispatch(async_increment())
})


themeBtn.addEventListener('click', () => {
    // document.body.classList.toggle('dark')
})
