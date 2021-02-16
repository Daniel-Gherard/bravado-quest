import axios from 'axios';

export const getContacts = ({ commit, rootState }, query = '') => {
  if (query.length > 0) {
    getContactsRequest().then((response) => {
      filterContacts(commit, response.data, query)
    })
  } else {
    getContactsRequest(commit)
  }
}

export const filterContacts = (commit, contacts, query) => {
  const regexp = new RegExp(query, "gi")

  const filteredContacts = contacts.filter((contact) => {
    const { avatar, ...remaining } = contact;
    return Object.keys(remaining).some(key => contact[key].toLowerCase().match(regexp));
  })

  commit('contacts', filteredContacts)
}

function getContactsRequest(commit = undefined) {
  return new Promise((resolve, reject) => {
    axios.get('/users.json')
    .then((response) => {
      if (commit) commit('contacts', response.data)
      resolve(response)
    })
    .catch((error) => {
      reject(error)
    })
  })
}