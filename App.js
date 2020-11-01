import React from 'react';
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import TestPage from "./pages/TestPage"
import PrivateRoute from "./utils/PrivateRoute";
import EventsPage from "./pages/EventsPage"
import UsersPage from './pages/UsersPage';
import AchievementsPage from './pages/AchievementsPage';
import EditTestPage from "./pages/EditTestPage"
import DashboardPage from './pages/DashboardPage';
import Requests from '../src/pages/Req'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={LoginPage} />
                <MainPage>
                    <PrivateRoute exact path="/" component={DashboardPage} />
                    <PrivateRoute exact path="/events" component={EventsPage} />
                    <PrivateRoute exact path="/tests" component={TestPage} />
                    <PrivateRoute exact path="/edittest/:id" component={EditTestPage} />
                    <PrivateRoute exact path="/users" component={UsersPage} />
                    <PrivateRoute exact path="/achievements" component={AchievementsPage} />
                    <PrivateRoute exact path="/req" component={Requests} />
                </MainPage>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
