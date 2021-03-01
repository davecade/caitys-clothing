import React from 'react'
import { connect } from 'react-redux'
import './collections-overview.styles.scss'
import CollectionPreview from '../collection-preview/collection-preview.component'
import { selectShopData } from '../../redux/shop/shop.selector'
import { createStructuredSelector } from 'reselect'

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopData
})

export default connect(mapStateToProps)(CollectionsOverview);
