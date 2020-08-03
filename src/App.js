import React from "react"

import "./App.css"
import Login from "./pages/Login/Login"
import Dashboard from "./pages/Dashboard/Dashboard"
import ReactDOM from "react-dom"
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom"

function App() {
  const user = localStorage.getItem("user")
  return (
    <BrowserRouter>
      <Switch>

        <PrivateRoute exact user={user} path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        {user && (
          <Redirect
            to={{
              pathname: "/dashboard",
            }}
          />
        )}
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

function PrivateRoute({ children, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        console.log(user ? user : "bu")

        return user ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          )
      }}
    />
  )
}

export default App
