import React, { Component } from 'react';
import CollectionsOverview from '../components/collections-overview/collections-overview.component'
import { Route } from 'react-router-dom'
import CollectionPage from '../pages/collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../firebase/firebase.utils'

class ShopPage extends Component {

    unsubscribeFromSnapshot = () => null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections')

        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            console.log(collectionsMap)
        })

    }

    render() {
        const { match } = this.props;

        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }
}



export default ShopPage;