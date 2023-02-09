const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUser = state => state.auth.user;
const getToken = state => state.auth.token;
const getFetchingUser = state => state.auth.isFetchingUser;
const getIsPasswordForgotten = state => state.auth.isPasswordForgotten;

const authSelectors = {
  getIsLoggedIn,
  getToken,
  getUser,
  getFetchingUser,
  getIsPasswordForgotten,
};
export default authSelectors;
