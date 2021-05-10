import { connectRouter, routerMiddleware } from 'connected-react-router';
import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
} from 'redux';

// import {ProductsReducer} from '../products/reducers';
import { UsersReducer } from "../users/reducers";

export default function createStore(history) {//分割したreducerをまとめる。stateんのカテゴリごと。オブジェクトをreturnする(stateのデータ構造)
    return reduxCreateStore(
        combineReducers({
            // products: ProductsReducer,
            users: UsersReducer,
            router: connectRouter(history),
        }),
        applyMiddleware(
            routerMiddleware(history)
        )
    )
}