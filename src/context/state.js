import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';





import {
    //import all the actions for context api
    MOBILE_NAV,
} from './action'
import MainContext from './context';

import MainReducer from './reducer';




const MainState = (props) => {

    //write all function and all the states for 
    const initialState = {
        mobileNav: false,
    };

    const [state, dispatch] = useReducer(MainReducer, initialState);
    const navigate = useNavigate();






    const toggleNav = () => {
        dispatch({
            type:MOBILE_NAV
        })
        console.log(state.mobileNav)
    }





    return (
        <MainContext.Provider value={{
            toggleNav,
            mobileNav: state.mobileNav
        }}>
            {/* to make the fuctions and state availabe everywhere */}
            {props.children}
        </MainContext.Provider>
    )
}


export default MainState;