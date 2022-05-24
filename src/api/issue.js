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

export const indexTasks = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/task/',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showTask = (id, user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/task/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateTask = (id, data, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/task/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    // I could also feed in the whole data object, like task: data, but then if I send it a data object with more keys it won't work
    // But also I don't know when I would do that anyway
    data: {
      task: {
        title: data.title,
        description: data.description,
        date: data.date,
        checked: data.checked
      }
    }
  })
}

export const deleteTask = (id, user) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/task/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
