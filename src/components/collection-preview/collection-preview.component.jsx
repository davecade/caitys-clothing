import React, { Fragment } from 'react'
import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => (
    <Fragment>
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, index) => index < 4)
                        .map(item => (
                            <div key={item.id}>{item.name}</div>
                        ))
                }
            </div>
        </div>
    </Fragment>
)

export default CollectionPreview;