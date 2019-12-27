import {
    ALL_PRODUCTS_REMOVED_FROM_ORDER_LIST, PRODUCT_ADDED_TO_ORDER_LIST,
    PRODUCT_REMOVED_FROM_ORDER_LIST, UPDATE_COUNT_AND_TOTAL_ORDER,
    UPDATE_VALUE_RADIO_BTN_IN_ORDER_LIST
} from '../../types'
import addedToListProducts from './update-order-list-products'
import updateValueRadioBtnInList from './update-value-radio-btn-in-list'
import { updateCountAndTotalInList } from './update-count-and-total-in-list'

const updateProductOrderList = (state, action) => {

    if (state === undefined) {
        return {
            list: [],
            totalPrice: 0
        }
    }

    switch (action.type) {
    case PRODUCT_ADDED_TO_ORDER_LIST:
        return addedToListProducts(state, action.payload)

    case UPDATE_VALUE_RADIO_BTN_IN_ORDER_LIST:
        return updateValueRadioBtnInList(state.orderList, action.payload, action.event)

    case UPDATE_COUNT_AND_TOTAL_ORDER:
        return updateCountAndTotalInList(state.orderList, action.payload, 1)

    case PRODUCT_REMOVED_FROM_ORDER_LIST:
        return updateCountAndTotalInList(state.orderList, action.payload, -1)

    case ALL_PRODUCTS_REMOVED_FROM_ORDER_LIST:
        return {
            ...state.orderList
        }
    default:
        return state.orderList
    }
}

export default updateProductOrderList
