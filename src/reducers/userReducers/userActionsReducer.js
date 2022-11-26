const initialstate = {
  loggedInUser: undefined,
}

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'SEND_TOKEN_COMPLETED': {
      if (action.payload.status) {
        return {
          ...state,
          isLoggedIn: true,
          loggedInUser: action.payload.data
        }
      } else {
        setTimeout(() => {
          alert('Must Login Again')
        }, 100);
        return {
          ...state
        }
      }
    }
    case 'SIGNUP_COMPLETED':
      return {
        ...state,
        signupStatus: action.payload
      }
    case 'LOGIN_COMPLETED':
      if (action.payload.result === true) {
        setTimeout(() => {
          alert(action.payload.message)
        }, 100);
        return {
          ...state,
          isLoggedIn: action.payload.result,
          loggedInUser: action.payload.user,
        }
      } else {
        setTimeout(() => {
          alert(action.payload.message)
        }, 100);
        return {
          ...state
        }
      }
    case 'LOGOUT_COMPLETED':
      return {
        ...state,
        isLoggedIn: false,
        loggedInUser: undefined
      }
    case 'EDIT_FRIENDS_COMPLETED':
      return {
        ...state,
        loggedInUser: action.payload
      }
    default:
      return ({});
  }
}

export default reducer;
