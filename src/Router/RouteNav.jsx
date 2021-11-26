import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Appointment from "../Pages/Appointment/Appointment";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Components/Dashboard/Dashboard";
import Payment from "../Components/Dashboard/Payment/Payment";
import AdminRoute from "./AdminRoute";
import MakeAdmin from "../Components/Dashboard/MakeAdmin/MakeAdmin";
import AddDoctors from "../Components/Dashboard/AddDoctors/AddDoctors";
import DashboardHome from "../Components/Dashboard/Home/DashboardHome";
const RouteNav = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/registration' element={<Registration/>}></Route>
                {/* Dashboard */}
                <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}>
                    <Route path='/dashboard' element={<DashboardHome/>}></Route>
                    <Route path={`/dashboard/payment/:appointmentID`} element={<Payment/>}></Route>
                    <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin/></AdminRoute>}></Route>
                    <Route path={`/dashboard/add-doctors`} element={<AdminRoute><AddDoctors/></AdminRoute>}></Route>
                </Route>
                <Route path="/appointment" element={<PrivateRoute><Appointment/></PrivateRoute>}></Route>
            </Routes>
        </Router>
    );
};

export default RouteNav;