import React from 'react';
import './App.css';
import {Redirect, Route} from 'react-router-dom';
import Main from "./components/Main";
import Profile from "./components/Profile";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "./redux/store";
import {authorize} from "./redux/reducer";

const mapStateToProps = (state: AppStateType) => ({
        ...state
    }
);

const mapDispatchToProps = (dispatch: any) => {
    return {
        authorize: () => {
            dispatch(authorize());
        }
    };
}


const App = (props: AppProps) => (
    <>
        <Route exact path="/"
               render={() => <Main login={props.login} password={props.password} onAuth={props.authorize}/>}/>

        <Route path="/profile/"
               render={() => profileRedirect(props.authStatus, props.login)}/>
    </>
)


function profileRedirect(authStatus: boolean, login: string) {
    if (authStatus) {
        return (
            <Profile login={login}/>
        )
    } else {
        return (
            <Redirect to={"/"}/>
        )
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type AppProps = ConnectedProps<typeof connector>;

export default connector(App);
