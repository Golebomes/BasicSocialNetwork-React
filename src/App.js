import './App.css';
import React from 'react';
import Header from './component/Header/Header';
import NavBar from './component/NavBar/NavBar';
import Dialogs from "./component/Dialogs/Dialogs";
import Profile from './component/Profile/Profile';

import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>

                    <Route path='/messages' render={() => <Dialogs
                        DialogData={props.DialogData}
                        ChatData={props.ChatData}
                        dispatch={props.dispatch}
                        newMessage={props.newMessage}
                    />}/>
                    <Route path='/profile' render={() => <Profile
                        PostData={props.PostData} dispatch={props.dispatch}
                        newPostText={props.newPostText}
                    />}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
