// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/components/table.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/08/2021 13:34

import {post} from '../js/fetch'

const ASC = 'asc'
const DESC = 'desc'

const ICON_ASC = '&#9660;'
const ICON_DESC = '&#9650;'

export default class Table extends HTMLElement {


  constructor () {
    super()
    this.div = this

    this.base_url = this.dataset.base_url

    this.options = JSON.parse(this.dataset.options)
    this.table = this.querySelector('table.datable')
    this.tableBody = this.table.querySelector('tbody')
    this.pageActive = this.options.pageActive //par défaut on récupère
    this.nbElementPerPage = this.options.pageLength
    this.order = []
    this.filter = []
    //récupérer les filtres disponibles et ajouter les écouteurs selon?

    this.tableBody.innerHTML = ''

    this.options.columns.forEach((column) => {
      if (column.sortable === true) {
        document.getElementById(column.id).style.cursor = 'pointer'
        document.getElementById(column.id).addEventListener('click', (elem) => {
          this.order = [{
            column: elem.target.dataset.name,
            order: elem.target.dataset.order//todo: ordre actuel... a inverser dans la requete? Mettre les deux fleches si pas trié ? si defaultorder = false?
          }]
          //todo: mettre à jour le sens de la fleche...
          this._buildArray()
        })
      }
    })

    const select = document.getElementById('datable_select') //todo: ne doit pas dépendre de datatable qui est le nom du tableau...
    select.addEventListener('change', (e) => {
      this.nbElementPerPage = e.target.value
      this._buildArray()
    })

    document.getElementById('table_filtre').addEventListener('click', () => {
      let inputs = document.getElementById('table-filters').getElementsByTagName('input')
      let selects = document.getElementById('table-filters').getElementsByTagName('select')
      inputs.forEach((input) => {
        this._getFilterFromField(input)
      })

      selects.forEach((select) => {
        this._getFilterFromField(select)
      })

      this._buildArray()
    })

    //suppression des filtres
    document.getElementById('table_suppr_filtre').addEventListener('click', () => {
      this.filter = []
      this._buildArray()
    })

    this._updateHeader()
    this._buildArray()
  }

  _convertToFetch (tableau) {
    let obj = {}

    Object.entries(tableau).forEach(entry => {
      const [key, item] = entry
      obj[key] = item
    })
    return obj
  }

  _buildArray () {
    this.tableBody.innerHTML = ''
    post(this.base_url, {
      page: this.pageActive,
      nbElementPerPage: this.nbElementPerPage,
      order: this.order,
      filter: this._convertToFetch(this.filter)
    }).then((data) => {
      data.data.forEach((item) => {
        let html = '<tr>'
        this.options.columns.forEach((column) => {
          html += `<td>${item[column.name]}</td>`
        })
        html += '</tr>'
        this.tableBody.innerHTML += html
      })
      this._updatePagination(data.paging)

    })
  }

  _updateHeader () {
    this.options.columns.forEach((column) => {
      let texte = document.getElementById(column.id).innerText
      if (column.sortable === true) {
        if (column.order === DESC || column.order === '') {
          document.getElementById(column.id).innerHTML = texte + ' ' + ICON_DESC
          document.getElementById(column.id).dataset.order = DESC
        } else {
          document.getElementById(column.id).innerHTML = texte + ' ' + ICON_ASC
          document.getElementById(column.id).dataset.order = ASC
        }
      }
    })
  }

  _updatePagination (paging) {
    const nav = document.getElementById('datable_nav')
    const previousDisabled = paging.firstPage === true ? 'disabled' : ''
    const nextDisabled = paging.lastPage === true ? 'disabled' : ''
    let pageCutLow = paging.numActivePage - 1
    let pageCutHigh = paging.numActivePage + 1

    let html = `<ul class="pagination justify-content-end">
                        <li class="page-item ${previousDisabled}">
                            <a class="page-link" href="#">
                                <span class="fas fa-arrow-left"></span>
                            </a>
                        </li>`
    // 10 pages, on affiche tout
    if (paging.nbPages <= 10) {
      for (let i = 1; i <= paging.nbPages; i++) {
        let pageActive = i === paging.numActivePage ? 'active' : ''
        html += `<li class="page-item ${pageActive}">
                  <a class="page-link" href="#">${i}</a>
               </li>`
      }
    } else {
      // Show the very first page followed by a "..." at the beginning of the
      // pagination section (after the Previous button)
      if (paging.numActivePage > 2) {
        html += '<li class="page-item"><a class="page-link" href="#">1</a></li>'
        if (paging.numActivePage > 3) {
          const pag = paging.numActivePage - 2
          html += '<li class="page-item"><a class="page-link" href="#" data-page="' + pag + '">...</a></li>'
        }
      }
      // Determine how many pages to show after the current page index
      if (paging.numActivePage === 1) {
        pageCutHigh += 2
      } else if (paging.numActivePage === 2) {
        pageCutHigh += 1
      }
      // Determine how many pages to show before the current page index
      if (paging.numActivePage === paging.nbPages) {
        pageCutLow -= 2
      } else if (paging.numActivePage === paging.nbPages - 1) {
        pageCutLow -= 1
      }
      // Output the indexes for pages that fall inside the range of pageCutLow
      // and pageCutHigh
      for (let p = pageCutLow; p <= pageCutHigh; p++) {
        if (p === 0) {
          p += 1
        }
        if (p > paging.nbPages) {
          continue
        }
        let pageActive = p === paging.numActivePage ? 'active' : ''
        html += '<li class="page-item ' + pageActive + '"><a class="page-link" href="#">' + p + '</a></li>'
      }
      // Show the very last page preceded by a "..." at the end of the pagination
      // section (before the Next button)
      if (paging.numActivePage < paging.nbPages - 1) {
        if (paging.numActivePage < paging.nbPages - 2) {
          let pag = 0
          if (paging.numActivePage === 1) {
            pag = paging.numActivePage + 4
          } else {
            pag = paging.numActivePage + 2
          }
          html += '<li class="page-item"><a class="page-link" href="#" data-page="' + pag + '">...</a></li>'
        }
        html += '<li class="page-item"><a class="page-link" href="#">' + paging.nbPages + '</a></li>'
      }
    }
    html += `<li class="page-item ${nextDisabled}">
                  <a class="page-link" href="#">
                      <span class="fas fa-arrow-right"></span>
                  </a>
              </li>
          </ul>`
    nav.innerHTML = html

    this.div.querySelectorAll('.page-link').forEach((element) => {
      element.addEventListener('click', (e) => {
        let page = e.target.innerText
        if (page === '...') {
          page = e.target.dataset.page
        }

        this.pageActive = page
        this._buildArray()
      })
    })
  }

  _getFilterFromField (input) {
    switch (input.type) {
      case 'text':
      case 'select-one':
        this.filter[input.name] = input.value
        break
      case 'checkbox':
        if (input.checked === true) {
          if (!(input.name in this.filter)) {
            this.filter[input.name] = []
          }
          this.filter[input.name].push(
            input.value)
        }
        break
    }
  }
}
