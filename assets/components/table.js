// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/components/table.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 03/08/2021 17:59

import {post} from '../js/fetch'

export default class Table extends HTMLElement {
  constructor () {
    super()
    this.div = this

    this.base_url = this.dataset.base_url

    this.options = JSON.parse(this.dataset.options)
    console.log(this.options)
    this.table = this.querySelector('table.datable')
    this.tableBody = this.table.querySelector('tbody')
    this.pageActive = this.options.pageActive //par défaut on récupère
    this.nbElementPerPage = this.options.pageLength

    //récupérer les filtres disponibles et ajouter les écouteurs selon?

    this.tableBody.innerHTML = ''
    // this.tableBody.innerHTML = `<tr><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td></tr>`

    this.options.columns.forEach((column) => {
      if (column.sortable === true) {
        document.getElementById(column.id).style.cursor = 'pointer'
        document.getElementById(column.id).addEventListener('click', (elem) => {
          console.log('click')
        })
      }
    })

    const select = document.getElementById('datable_select') //todo: ne doit pas dépendre de datatable qui est le nom du tableau...
    select.addEventListener('change', (e) => {
      console.log(e)
      this.nbElementPerPage = e.target.value
      this._buildArray()
    })

    this._updateHeader()
    this._buildArray()
  }

  _buildArray () {
    this.tableBody.innerHTML = ''
    post(this.base_url, {
      page: this.pageActive,
      nbElementPerPage: this.nbElementPerPage
    }).then((data) => {
      //console.log(data)
      data.data.forEach((item) => {
        // console.log(item)
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
    //console.log(this.options.columns)
    this.options.columns.forEach((column) => {
      let texte = document.getElementById(column.id).innerText
      if (column.sortable === true) {
        texte = texte.trim().substring(0, texte.length - 1)
        if (column.order === 'DESC' || column.order === '') {
          document.getElementById(column.id).innerHTML = texte + '&#9650;'
        } else {
          document.getElementById(column.id).innerHTML = texte + '&#9660;'
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
      for (let i = 1; i < paging.nbPages; i++) {
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
          console.log(pag)
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
}
