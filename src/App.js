import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import './App.css';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {init} from "./Redux/app-reducer";
import Loading from "./components/common/Loading/Loading";


class App extends React.Component {
    componentDidMount() {
        this.props.init();
    }

    render() {
        if (!this.props.initialized) {
            return <Loading/>
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer />
                    <Navbar/>
                    <main className='app-content'>
                        <Route path='/users' render={()=> <UsersContainer />}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                        <Route path='/dialogs' render={() => <DialogsContainer />} />
                        <Route path='/news' render={() => <News news={'New news'}/>} />
                        <Route path='/music' component={Music} />
                        <Route path='/settings' component={Settings} />
                        <Route path='/login' component={Login}/>
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default connect(mapStateToProps, {init})(App);
