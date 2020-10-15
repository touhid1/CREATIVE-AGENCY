import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage/HomePage";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Orders from "./components/Dashboard/Orders";
import Review from "./components/Dashboard/Review";
import ServiceList from "./components/Dashboard/ServiceList";

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});
	const globalStates = {
		user: [loggedInUser, setLoggedInUser],
	};

	return (
		<UserContext.Provider value={globalStates}>
			<Router>
				<Switch>
					<Route exact path="/">
						<HomePage></HomePage>
					</Route>
					<Route path="/login">
						<Login></Login>
					</Route>
					<Route exact path="/dashboard">
						<Dashboard></Dashboard>
					</Route>
					<PrivateRoute exact path="/dashboard/orders">
						<Orders></Orders>
					</PrivateRoute>
					<PrivateRoute exact path="/dashboard/orders/:_id">
						<Orders></Orders>
					</PrivateRoute>
					<PrivateRoute exact path="/dashboard/service-list">
						<ServiceList></ServiceList>
					</PrivateRoute>
					<PrivateRoute exact path="/dashboard/review">
						<Review></Review>
					</PrivateRoute>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
