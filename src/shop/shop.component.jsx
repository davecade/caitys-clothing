import React from 'react';
import CollectionsOverview from '../components/collections-overview/collections-overview.component'
import { Route } from 'react-router-dom'
import CollectionPage from '../pages/collection/collection.component';


class ShopPage extends React {

    unsubscribeFromSnapshot = () => null;

    componentDidMount() {

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