const initialState = {
  users: [],
  posts: [],
  groups: [],
  userPosts: [],
  profile: undefined,
  signupStatus: {},
  profilePosts: [],
  isLoggedIn: false,
  selectedGroup: undefined,
  groupPosts: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLEAN_UP_PROFILE':
      return {
        ...state,
        profile: undefined,
        profilePosts: []
      }
    case 'CLEAN_UP_GROUP_PAGE':
      return {
        ...state,
        selectedGroup: undefined,
        groupPosts: [],
      }
    case 'GET_USERS_COMPLETED':
      return {
        ...state,
        users: action.payload
      }
    case 'GET_POSTS_COMPLETED':
      return {
        ...state,
        posts: action.payload
      }
    case 'ADD_VOTE_COMPLETED':
      return {
        ...state,
        posts: action.payload
      }
    case 'GET_PROFILE_COMPLETED':
      return {
        ...state,
        profile: action.payload.profile,
        profilePosts: action.payload.posts
      }
    case 'MAKE_POST_COMPLETED':
      return {
        ...state,
        posts: action.payload
      }
    case 'DELETE_POST_COMPLETED':
      setTimeout(() => {
        alert(action.payload.message)
      }, 100);
      return {
        ...state,
        posts: action.payload.data
      }
    case 'EDIT_POST_COMPLETED':
      setTimeout(() => {
        alert(action.payload.message)
      }, 100);
      return {
        ...state,
        posts: action.payload.data
      }
    case 'MAKE_COMMENT_COMPLETED':
      return {
        ...state,
        posts: action.payload
      }
    case 'COMMENT_VOTES_COMPLETED':
      return {
        ...state,
        posts: action.payload
      }
    case 'DELETE_COMMENT_COMPLETED':
      return {
        ...state,
        posts: action.payload
      }
    case 'UPDATE_VOTES_BY_USER_ID_COMPLETED':
      return {
        ...state,
        profilePosts: action.payload
      }
    case 'MAKE_POST_BY_USER_ID_COMPLETED':
      return {
        ...state,
        profilePosts: action.payload
      }
    case 'EDIT_POST_BY_USER_ID_COMPLETED':
      return {
        ...state,
        profilePosts: action.payload
      }
    case 'DELETE_POST_BY_USER_ID_COMPLETED':
      return {
        ...state,
        profilePosts: action.payload
      }
    case 'MAKE_COMMENT_BY_USER_ID_COMPLETED':
      return {
        ...state,
        profilePosts: action.payload
      }
    case 'UPDATE_COMMENT_VOTES_BY_USER_ID_COMPLETED':
      return {
        ...state,
        profilePosts: action.payload
      }
    case 'DELETE_COMMENT_BY_USER_ID_COMPLETED':
      return {
        ...state,
        profilePosts: action.payload
      }
    case 'GET_ALL_GROUPS_COMPLETED':
      return {
        ...state,
        groups: action.payload
      }
    case 'CREATE_GROUP_COMPLETED':
      return {
        ...state,
        groups: action.payload
      }
    case 'GET_GROUP_PAGE_COMPLETE':
      return {
        ...state,
        selectedGroup: action.payload.group,
        groupPosts: action.payload.posts
      }
    case 'JOIN_GROUP_COMPLETED':
      return {
        ...state,
        selectedGroup: action.payload
      }
    case 'LEAVE_GROUP_COMPLETED':
      return {
        ...state,
        selectedGroup: action.payload
      }
    case 'CREATE_GROUP_POST_COMPLETED':
      return {
        ...state,
        groupPosts: action.payload
      }
    case 'UPDATE_GROUP_VOTES_COMPLETED':
      return {
        ...state,
        selectedGroup: action.payload
      }
    case 'DISBAND_GROUP_COMPLETED':
      return {
        ...state,
        selectedGroup: undefined,
        groupPosts: []
      }
    case 'EDIT_GROUP_DESCRIPTION_COMPLETED':
      return {
        ...state,
        selectedGroup: action.payload
      }
    case 'DELETE_GROUP_POST_COMPLETED':
      return {
        ...state,
        groupPosts: action.payload
      }
    case 'EDIT_GROUP_POST_COMPLETED':
      return {
        ...state,
        groupPosts: action.payload
      }
    case 'UPDATE_GROUP_POSTS_VOTES_COMPLETED':
      return {
        ...state,
        groupPosts: action.payload
      }
    case 'MAKE_GROUP_cOMMENT_COMPLETED':
      return {
        ...state,
        groupPosts: action.payload
      }
    case 'DELETE_GROUP_COMMENT_COMPLETED':
      return {
        ...state,
        groupPosts: action.payload
      }
    case 'UPDATE_GROUP_COMMENT_VOTES_COMPLETED':
      return {
        ...state,
        groupPosts: action.payload
      }
    case 'REMOVE_USER_COMPLETED':
      return {
        ...state,
        selectedGroup: action.payload
      }
    case 'MAKE_GROUP_ADMIN_COMPLETED':
      return {
        ...state,
        selectedGroup: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

export default reducer