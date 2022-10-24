// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/js/fetch.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 27/09/2022 10:25

const request = (_url, params = {}, method = 'GET') => {
  let url = _url
  const options = {
    method,
  }
  if (method === 'GET') {
    url += `?${(new URLSearchParams(params)).toString()}`
  } else {
    options.body = JSON.stringify(params)
    options.headers = {
      'Content-Type': 'application/json;charset=utf-8',
    }
  }

  return fetch(url, options).then((response) => response.json())
}

export const get = (url, params) => request(url, params, 'GET')
export const post = (url, params) => request(url, params, 'POST')

export const load = (url, _objet) => {
  const objet = _objet
  // todo: a tester. window.da.loader.display = 'block'
  objet.innerHTML = ''
  fetch(url)
    .then((response) => response.text())
    .then((body) => {
      objet.innerHTML = body
      // window.da.loader.display = 'none'
    })
}
