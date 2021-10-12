import { Redirect, Route } from 'react-router-dom';
import { AuthorizationStatus } from '../../const/const';
import { PrivateRouteProps } from '../../types/types';


function PrivateRoute(rest : PrivateRouteProps): JSX.Element{
  const {path, exact, render, authorizationStatus}=rest;
  return(
    <Route
      path={path}
      exact={exact}
      render = {() => (
        authorizationStatus === AuthorizationStatus.Auth ? render() : <Redirect to='/login'/>)}
    />
  );
}
export default PrivateRoute;
