// import { UserAuthWrapper } from 'redux-auth-wrapper'
// import { routerActions } from 'react-router-redux'
// import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect'

// Layout Component Wrappers

// export const UserIsAuthenticated = connectedReduxRedirect({
//   redirectPath: '/login',
//   authSelector: state => state.user.data !== null,
//   redirectAction: routerActions.replace,
//   wrapperDisplayName: 'UserIsAuthenticated'
// });

//authenticatingSelector: state => state.user.isLoading,
//AuthenticatingComponent: Loading,

// export const UserIsAuthenticated = UserAuthWrapper({
//   authSelector: state => state.user.data,
//   redirectAction: routerActions.replace,
//   failureRedirectPath: '/', // '/login' by default.
//   wrapperDisplayName: 'UserIsAuthenticated'
// })

// export const UserIsNotAuthenticated = UserAuthWrapper({
//   authSelector: state => state.user,
//   redirectAction: routerActions.replace,
//   failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect || '/dashboard',
//   wrapperDisplayName: 'UserIsNotAuthenticated',
//   predicate: user => user.data === null,
//   allowRedirectBack: false
// });

// UI Component Wrappers

// export const VisibleOnlyAuth = connectedReduxRedirect({
//   redirectPath: '/login',
//   authSelector: state => state.user,
//   wrapperDisplayName: 'VisibleOnlyAuth',
//   predicate: user => user.data,
//   FailureComponent: null
// })

// export const HiddenOnlyAuth = connectedReduxRedirect({
//   redirectPath: '/login',
//   authSelector: state => state.user,
//   wrapperDisplayName: 'HiddenOnlyAuth',
//   predicate: user => user.data === null,
//   FailureComponent: null
// })
