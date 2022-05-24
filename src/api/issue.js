import apiUrl from '../apiConfig'
import axios from 'axios'

export const createIssue = (data, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/issue/',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      issue: {
        title: data.title,
        description: data.description,
        checked: data.checked
      }
    }
  })
}

export const indexIssue = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/issue/',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showIssue = (id, user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/issue/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateIssue = (id, data, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/issue/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    // I could also feed in the whole data object, like issue: data, but then if I send it a data object with more keys it won't work
    // But also I don't know when I would do that anyway
    data: {
      issue: {
        title: data.title,
        description: data.description,
        checked: data.checked
      }
    }
  })
}

export const deleteIssue = (id, user) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/issue/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
