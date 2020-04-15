import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import './App.css';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <main className='app-content'>
                    <Route path='/users' render={()=> <UsersContainer />}/>
                    <Route path='/profile' render={() => <Profile />} />
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/news' render={() => <News news={'New news'}/>} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
