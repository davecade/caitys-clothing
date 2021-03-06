import React, { Fragment } from 'react'
import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({title, items}) => {
    return (
        <Fragment>
            <div className="collection-preview">
                <h1 className='title'>{title}</h1>
                <div className="collection-items">
                    {
                        items.filter((item, index) => index < 4)
                            .map(({id, ...otherItemProps}) => (
                                <CollectionItem key={id} {...otherItemProps}/>
                            ))
                    }
                </div>
            </div>

        </Fragment>

    )
}

export default CollectionPreview;