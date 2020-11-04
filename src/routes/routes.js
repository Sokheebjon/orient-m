import React, { Suspense, lazy } from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import AuthPage from "../containers/AuthPage/AuthPage";
//routes
const MainPage = lazy(() => import("../containers/MainPage/MainPage"));
const OrdersPage = lazy(() => import("../containers/OrdersPage/OrdersPage"));
// const HomePage = lazy(() => import("../containers/HomePage/HomePage"));
const Organizations = lazy(() =>
  import("../containers/Organizations/Organizations")
);
const MainSideNav = lazy(() => import("../components/MainSideNav/MainSideNav"));

const Routes = ({ succesLogin, userData }) => {

  const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          localStorage.getItem("token") || succesLogin ? (
            <MainSideNav>
              <Component {...props} />
            </MainSideNav>
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  };

  return (
    <Suspense
      fallback={
        <>
          <div>Loading...</div>
        </>
      }
    >
      <Switch>
        <Route exact path="/login" component={AuthPage} />
        <ProtectedRoute exact path="/main" component={MainPage} />
        <ProtectedRoute exact path="/orders" component={OrdersPage} />
        <ProtectedRoute exact path="/organizations" component={Organizations} />
        <Redirect to="/login" />
      </Switch>
      )
    </Suspense>
  );
};

const mapState = (state) => {
  return {
    beginLogin: state.auth.beginLogin,
    succesLogin: state.auth.succesLogin,
    failureLogin: state.auth.failureLogin,
    userData: state.auth.userData,
    err: state.auth.err,
  };
};

const MainRoute = React.memo(Routes);

export default connect(mapState)(MainRoute);

// <Route exact path="/" component={HomePage} />
//  <ProtectedRoute exact path="/home" />/
