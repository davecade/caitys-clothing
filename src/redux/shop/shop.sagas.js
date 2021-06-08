import { takeEvery } from 'redux-saga/effects'

import ShopActionTypes from './shop.types'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { fetchCollectionsSuccess,  fetchCollectionsFailure } from './shop.actions'

export function* fetchCollectionsAsync() {
    yield console.log("i am fired")
    const collectionRef = firestore.collection('collections')

        // collectionRef.get().then(snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        //     dispatch(fetchCollectionsSuccess(collectionsMap))
            
        // }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
}

export function* fetchCollectionsStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}