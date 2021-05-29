import React, { Component } from 'react';
import CollectionsOverviewContainer from '../components/collections-overview/collections-overview.container'
import { Route } from 'react-router-dom'
import CollectionPage from '../pages/collection/collection.component';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../redux/shop/shop.actions'
import { createStructuredSelector } from 'reselect'
import WithSpinner from '../components/with-spinner/with-spinner.component'
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../redux/shop/shop.selector'

const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {

    componentDidMount() {

        const { fetchCollectionsStartAsync } = this.props
        fetchCollectionsStartAsync();
    }

    render() {
        const { match, isCollectionsLoaded } = this.props;
        
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}
                />
                <Route path={`${match.path}/:collectionId`} render={
                        (props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
                    }
                />
            </div>
        )
    }
}

//redux
const mapStateToProps = createStructuredSelector({
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

//export
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
