import {
    //import all the actions for user context api
    MOBILE_NAV
} from './action'




const MainReducer = (state, action) => {

    //to set state based on the action type
    switch (action.type) {

        case MOBILE_NAV:
            return{
                ...state,
                mobileNav : !state.mobileNav
            }

        default:
            return state;
    }


}


export default MainReducer;