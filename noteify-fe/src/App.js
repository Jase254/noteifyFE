import React, { Component } from 'react';
import {Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css'
import {BrowserRouter, Route} from "react-router-dom";
import Student from './StudentView/Student'
import StudentLogin from './Login/StudentLogin'
import ProfessorLogin from './Login/ProfessorLogin';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Container>
                    <Route path={'/'} exact component={StudentLogin}/>
                    <Route path={'/profLogin'} exact component={ProfessorLogin}/>
                    <Route path={'/student'} component={Student}/>
                </Container>
            </BrowserRouter>
        );
    }
}

export default App;
