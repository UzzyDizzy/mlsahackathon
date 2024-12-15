export function saveToken(token) {
    localStorage.setItem('token', token);
  }
  
  export function getToken() {
    return localStorage.getItem('token');
  }
  
  export function clearToken() {
    localStorage.removeItem('token');
  }
  
  export function decodeToken(token) {
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload;
    } catch {
      return null;
    }
  }
  
  export function isLoggedIn() {
    const token = getToken();
    if (!token) return false;
    const payload = decodeToken(token);
    const currentTime = Date.now() / 1000;
    return payload && payload.exp > currentTime;
  }
  
  export function isAdmin() {
    const token = getToken();
    const payload = decodeToken(token);
    return payload?.role === 'admin';
  }
  
  export function logout() {
    clearToken(); // Removes token from localStorage.
  }
  