import { TIMEOUT_SEC } from './config.js';

/**
 * Create a timeout promise that rejects after the specified number of seconds
 * @param {number} s - The number of seconds before the promise rejects
 * @returns {Promise<never>} A promise that rejects after the specified timeout
 * @private
 */
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} seconds`));
    }, s * 1000);
  });
};

/**
 * Make an AJAX request to the specified URL, with optional upload data
 * @param {string} url - The URL to make the request to
 * @param {Object} [uploadData] - The data to be uploaded in a POST request
 * @returns {Promise<Object>} The response data from the AJAX request
 */
export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (error) {
    throw error;
  }
};
