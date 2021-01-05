import { API_ENDPOINT, FETCHING_TIMEOUT } from '../configs';

const buildURL = (path) =>
  // eslint-disable-next-line no-useless-escape
  [API_ENDPOINT.replace(/[\/]+$/, ''), path.replace(/[\/]+$/, '')].join('/');

const buildQueryString = (params) => {
  if (!params) return '';

  return `?${Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
    )
    .join('&')}`;
};

const generateOptions = (customOptions) => {
  const defaultOptions = {
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  return { ...defaultOptions, ...customOptions };
};

const fetchWithTimeout = (args, timeout = FETCHING_TIMEOUT) =>
  Promise.race([
    fetch(...args),
    new Promise((_, rj) => {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        rj(new Error(`Fetching timeout in ${timeout} ms`));
      }, timeout);
    }),
  ]);

const handleResponse = (response) => {
  if (response.redirected && response.url) {
    return Promise.resolve(response);
  }

  if (!response.ok) {
    return Promise.reject(response);
  }

  if (response.status === 204) {
    return Promise.resolve(response);
  }

  return response.json();
};

/**
 * @function apiGet
 * @description Make a GET request.
 * @param {string} path
 * @param {object} query
 * @param {object} options
 * @returns {promise}
 */
const apiGet = (path, query = undefined, options = { timeout: undefined }) =>
  fetchWithTimeout(
    [
      `${buildURL(path)}${buildQueryString(query)}`,
      generateOptions({
        ...options,
        method: 'GET',
      }),
    ],
    options.timeout,
  )
    .then(handleResponse)
    .catch(handleResponse);

/**
 * @function apiPost
 * @description Make a POST request.
 * @param {string} path
 * @param {object} body
 * @param {object} options
 * @returns {promise}
 */
const apiPost = (
  path,
  body,
  options = { keepBody: false, timeout: undefined },
) =>
  fetchWithTimeout(
    [
      buildURL(path),
      generateOptions({
        ...options,
        method: 'POST',
        body: !options.keepBody ? JSON.stringify(body) : body,
      }),
    ],
    options.timeout,
  )
    .then(handleResponse)
    .catch(handleResponse);

/**
 * @function apiPut
 * @description Make a PUT request.
 * @param {string} path
 * @param {object} body
 * @param {object} options
 * @returns {promise}
 */
const apiPut = (
  path,
  body,
  options = { keepBody: false, timeout: undefined },
) =>
  fetchWithTimeout(
    [
      buildURL(path),
      generateOptions({
        ...options,
        method: 'PUT',
        body: !options.keepBody ? JSON.stringify(body) : body,
      }),
    ],
    options.timeout,
  )
    .then(handleResponse)
    .catch(handleResponse);

/**
 * @function apiDelete
 * @description Make a DELETE request.
 * @param {string} path
 * @param {object} body
 * @param {object} options
 * @returns {promise}
 */
const apiDelete = (
  path,
  body,
  options = { keepBody: false, timeout: undefined },
) =>
  fetchWithTimeout(
    [
      buildURL(path),
      generateOptions({
        ...options,
        method: 'DELETE',
        body: !options.keepBody ? JSON.stringify(body) : body,
      }),
    ],
    options.timeout,
  )
    .then(handleResponse)
    .catch(handleResponse);

/**
 * @function apiPatch
 * @description Make a PATCH request.
 * @param {string} path
 * @param {object} body
 * @param {object} options
 * @returns {promise}
 */
const apiPatch = (
  path,
  body,
  options = { keepBody: false, timeout: undefined },
) =>
  fetchWithTimeout(
    [
      buildURL(path),
      generateOptions({
        ...options,
        method: 'PATCH',
        body: !options.keepBody ? JSON.stringify(body) : body,
      }),
    ],
    options.timeout,
  )
    .then(handleResponse)
    .catch(handleResponse);

export default {
  get: apiGet,
  post: apiPost,
  put: apiPut,
  delete: apiDelete,
  patch: apiPatch,
};
