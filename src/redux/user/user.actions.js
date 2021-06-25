import { UserActionTypes } from './user.types'

export const setCurrentUser = user => {
    return ({
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user
    })
}

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
})

export const googleSignInSuccess = user => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
})

export const googleSignInFailure = error => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: error
})

export const emailSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
})

export const emailSignInSuccess = user => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
})

export const emailSignInFailure = error => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: error
})