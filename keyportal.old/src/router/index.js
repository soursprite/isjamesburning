import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import MainLayout from './../layouts/Main'
import WizardLayout from './../layouts/Wizards'

import Keys from './../pages/Keys';
import KeyDetail from './../pages/KeyDetail';
import KeyRequests from './../pages/KeyRequests';

import RequestKeys from './../pages/RequestKeys';

import Rooms from './../pages/Rooms';
import RoomDetail from './../pages/RoomDetail';

import ProfileDetail from './../pages/Profile';

import KeyOrderForm from './../pages/KeyOrderForm';
//import RequestKeysStep1 from './../pages/RequestKeysStep1';
//import RequestKeysStep2 from './../pages/RequestKeysStep2';
import RequestDetail from './../pages/RequestDetail';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout title='Keys' />}>
                    <Route path='keys' element={<Keys />} />
                    <Route path='keys/:id' element={<KeyDetail />} />
                    <Route path='keys/requests' element={<KeyRequests />} />c
                    <Route path='keys/requests/:id' element={<RequestDetail />} />
                    <Route path='keys/order' element={<KeyOrderForm />} />
                </Route>

                <Route element={<WizardLayout title='Request Keys' />}>
                    <Route path='request/keys' element={<RequestKeys />} />
                </Route>

                <Route element={<MainLayout title='Rooms' />}>
                    <Route path='rooms' element={<Rooms />} />
                    <Route path='rooms/:id' element={<RoomDetail />} />
                </Route>

                <Route element={<WizardLayout title='My Profile' />}>
                    <Route path='profile/:id' element={<ProfileDetail />} />
                </Route>
            </Routes>
        </Router>
    )
}
export default AppRoutes;

