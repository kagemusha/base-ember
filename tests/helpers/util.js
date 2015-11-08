export function setAuthToken(setToken=true) {
  const token = setToken ? 'my-token' : null;
  window.localStorage.setItem('authenticationToken', token);
}

