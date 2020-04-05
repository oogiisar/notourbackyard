import TokenService from './token-service';
import config from '../config';

const notOutBackYardApiService = {
  getTypes() {
    return fetch(`${config.API_ENDPOINT}/users/type`, {
      headers: {},
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  getCleanups(user_id) {
    return fetch(`${config.API_ENDPOINT}/cleanups/${user_id}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postCleanup(newCleanup, user_id) {
    return fetch(`${config.API_ENDPOINT}/cleanups/${user_id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newCleanup),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getCleanupCount(location) {
    return fetch(`${config.API_ENDPOINT}/overview/${location}`, {
      headers: {},
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  getTopCountries() {
    return fetch(`${config.API_ENDPOINT}/overview/top`, {
      headers: {},
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  }
}

export default notOutBackYardApiService;
