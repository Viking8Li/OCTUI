import { createStore } from 'redux'
import cakeReducer from './cakes/cakeReducer.js'

const store = createStore(cakeReducer)

export default store