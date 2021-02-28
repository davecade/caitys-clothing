import React, { Fragment } from 'react';
import CollectionPreview from '../components/collection-preview/collection-preview.component'
import { connect } from 'react-redux'
import { selectShopData } from '../redux/shop/shop.selector'
import { createStructuredSelector } from 'reselect'

const ShopPage = ({ collections }) => {

    return (
        <Fragment>
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopData
})

export default connect(mapStateToProps)(ShopPage);