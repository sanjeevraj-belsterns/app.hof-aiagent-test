/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ['/'];

/**
 * An array of routes that are accessible to the public
 *These routes will redirect logged in users to for example /sign-up
 * @type {string[]}
 */
export const authRoutes = ['/sign-in', '/reset'];

/**
 * An array of routes that are accessible to the public
 * Routes that start with this prefix are used for API authentication purpose
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

export const protectedRoutes = ['/dashboard'];

/**
 * The default redirect path after Logged in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/home';
