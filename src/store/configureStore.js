import { createStore, combineReducers } from 'redux';
import blogReducer from '../reducer/blogsRe'
import authReducer from '../reducer/authRe'
//İKİ REDUCER'I STOREDA BİRLEŞTİRDİK
export default () => {
    const store = createStore(
        combineReducers({
            blogs: blogReducer,
            auth: authReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
