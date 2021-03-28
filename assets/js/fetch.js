// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/fetch.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/03/2021 12:43

const request = (url, params = {}, method = 'GET') => {
  let options = {
    method
  }
  if ('GET' === method) {
    url += '?' + (new URLSearchParams(params)).toString()
  } else {
    options.body = JSON.stringify(params)
  }

  return fetch(url, options).then(response => response.json())
}

export const get = (url, params) => request(url, params, 'GET')
export const post = (url, params) => request(url, params, 'POST')

