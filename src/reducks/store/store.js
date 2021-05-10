import {
    createStore as reduxCreateStore,
    combineReducers,
} from 'redux';

// import {ProductsReducer} from '../products/reducers';
import { UsersReducer } from "../users/reducers";

export default function createStore() {//分割したreducerをまとめる。stateんのカテゴリごと。オブジェクトをreturnする(stateのデータ構造)
    return reduxCreateStore(
        combineReducers({
            // products: ProductsReducer,
            users: UsersReducer
        })
    )
}