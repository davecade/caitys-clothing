import React, { Fragment } from 'react'
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component'
import { withRouter } from 'react-router-dom';


const CollectionPreview = ({title, items, history}) => {
    
    const handleClick = event => {
        let clickedValue = event.target.innerText.toLowerCase()
        history.push(`/shop/${clickedValue}`)
    }
    
    return (
        <Fragment>
            <div className="collection-preview">
                <h1 className="title" onClick={handleClick}>{title.toUpperCase()}</h1>
                <div className="preview">
                    {
                        items.filter((item, index) => index < 4)
                            .map((item) => (
                                <CollectionItem key={item.id} item={item} />
                            ))
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default withRouter(CollectionPreview);