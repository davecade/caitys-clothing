import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }

const selectShop = state => state.shop;

export const selectShopData = createSelector(
    selectShop,
    shop => shop.collections
)

export const selectShopDataForPreview = createSelector(
    selectShopData,
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = memoize((collectionUrlParam) => {
    return createSelector(
        selectShopData,
        collections => collections ? collections[collectionUrlParam] : null
    )
})

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)