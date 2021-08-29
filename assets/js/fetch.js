// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/fetch.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 29/08/2021 09:37

const request = (url, params = {}, method = 'GET') => {
  console.log(params)
  let options = {
    method
  }
  if ('GET' === method) {
    url += '?' + (new URLSearchParams(params)).toString()
  } else {
    options.body = JSON.stringify(params)
    options.headers = {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }

  return fetch(url, options).then(response => response.json())
}

export const get = (url, params) => request(url, params, 'GET')
export const post = (url, params) => request(url, params, 'POST')

export const load = (url, params, objet) => {
  //loader?window.umbrella.Spinner.show()
  objet.innerHTML = ''
  fetch(Routing.generate(url, params))
    .then(function (response) {
      return response.text()
    })
    .then(function (body) {
      objet.innerHTML = body
      //loader?window.umbrella.Spinner.hide()
    })
}

