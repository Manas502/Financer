import { AUTH } from '../constants/actionTypes';

export const signin = (formData, history) => async(dispatch) =>{
    try {
        //log intheuser
        history.push('/');
    } catch (error) {
        
    }
};

export const signup = (formData, history) => async(dispatch) =>{
    try {
        //sign intheuser
        history.push('/');
    } catch (error) {
        
    }
};