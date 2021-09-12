import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function PrivateRoute({component: Component, ...rest}) {
  const { currentuser } = useAuth()
  
  return (
    <Route
      {...rest}
      render={props => {
        return currentuser ? <Component {...props} /> : 
        <Redirect to="/login" />
      }}
    >
    </Route>
  )
}
