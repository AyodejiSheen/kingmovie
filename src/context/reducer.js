import {
    //import all the actions for user context api
    MOBILE_NAV, SHOW_ITEM, REMOVE_ITEM, 
} from './action'




const MainReducer = (state, action) => {

    //to set state based on the action type
    switch (action.type) {

        case MOBILE_NAV:
            return{
                ...state,
                mobileNav : !state.mobileNav
            }

            case SHOW_ITEM:
                return {
                    ...state,
                    show: action.payload
                }
    
            case REMOVE_ITEM:
                return {
                    ...state,
                    show: null
                }

        default:
            return state;
    }


}


export default MainReducer;