import React from 'react';
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import TestPage from "./pages/TestPage"
import PrivateRoute from "./utils/PrivateRoute";
import EventsPage from "./pages/EventsPage"
import UsersPage from './pages/UsersPage';
import EditTestPage from "./pages/EditTestPage"

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={LoginPage} />
                <MainPage>
                    <PrivateRoute exact path="/" component={EventsPage} />
                    <PrivateRoute exact path="/events" component={EventsPage} />
                    <PrivateRoute exact path="/test" component={TestPage} />
                    <PrivateRoute exact path="/edittest/:id" component={EditTestPage} />
                    <PrivateRoute exact path="/users" component={UsersPage} />
                </MainPage>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
