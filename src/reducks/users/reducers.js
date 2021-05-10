import * as Actions from './actions'
import initialState from '../store/initialState'

export const UsersReducer = (state = initialState.users, action) => {//第一引数は、現在の状態または初期状態、第２引数はactionがreturnした値
    switch (action.type) {
        case Actions.SIGN_IN:
            return {
                ...state,//現在のstateの状態はそのままに
                ...action.payload//アクションで指定があったもののみ上書きする
            }
        default:
            return state
    }
}