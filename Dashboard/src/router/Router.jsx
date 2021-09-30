import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import UnauthenticatedRoute from './routes/UnauthenticatedRoute'

import Home from '../pages/Home'
import Settings from '../pages/Settings'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>

                <UnauthenticatedRoute 
                    exact
                    path="/"
                    C={Home}
                    layout="dashboard"
                />

                <UnauthenticatedRoute 
                    exact
                    path="/settings"
                    C={Settings}
                    layout="dashboard"
                />

            </Switch>
        </BrowserRouter>
    )
}
