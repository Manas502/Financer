import { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import { Provider, useDispatch } from 'react-redux';
import {createStore, combineReducers} from 'redux';
import { useHistory } from 'react-router-dom';
import authReducer from '../reducers/auth'
import { signup, signin } from '../../actions/auth';
import useStyles from './Styles';
import Input from './Input';
import Icon from './Icon';

const AppWrapper = () => {
    const store = createStore(authReducer);
  
    return (
      <Provider store={store}>
        <Auth />
      </Provider>
    )
  }

  const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const classes = useStyles();
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const handleShowPassword = () => setShowPassword(!showPassword);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(isSignup) {
            dispatch(signup(formData, history))
        }
        else{
            dispatch(signin(formData, history))
        }
    }
    const handleChange = (e) =>{
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const switchMode = () =>{
       
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    }

    const googleSuccess = async(res) => {
        const result = res?.profileObj;
        const token = res?.tokeId;

        try{
            dispatch({ type: 'AUTH', data: { result, token }});
            history.push('/');
        }
        catch(error){
            alert(error);
        }
    };

    const googleFailure = () => {
        alert('SIGN IN FAILED. TRY AGAIN!');
    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={4}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit} >
                    <Grid conatiner spacing={2}>
                        {
                            isSignup && (
                                <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </ >
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                        { isSignup && <Input name ="confirmPassword" label="Confirm Password" handleChange={handleChange} type = "password" /> }
                    </Grid>
                   
                    <Button type="submit" fullWidth variant="contained" color="secondary" className={classes.submit}>
                        {isSignup ? "Sign Up" : "Sign In" }
                    </Button>
                    <GoogleLogin 
                        clientId="16414287126-i277dkngsu3r28lt317vu4v5i9dpsmbt.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button 
                            className={classes.googleButton}
                            color='primary'
                            fullWidth
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            startIcon={<Icon />}
                            variant="conatined"
                            >
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justify="flex-end">
                   <Grid item>
                      <Button onClick={switchMode}>
                    { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                      </Button>
                 </Grid>
                 </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default AppWrapper
