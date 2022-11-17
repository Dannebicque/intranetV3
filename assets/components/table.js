// Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/components/table.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 21/10/2022 14:50

import { post } from '../js/fetch'

const ASC = 'ASC'
const DESC = 'DESC'

const ICON_DESC = '&#9660;'
const ICON_ASC = '&#9650;'
const ICON_NONE = '&#9650;&#9660;'

export default class Table extends HTMLElement {
  constructor() {
    super()
    this.div = this

    this.options = JSON.parse(this.dataset.options)
    this.base_url = this.options.ajax.url

    this.table = this.querySelector('table.datable')
    this.tableBody = this.table.querySelector('tbody')
    this.pageActive = this.options.pageActive // par défaut on récupère
    this.nbElementPerPage = this.options.pageLength
    this.order = []
    this.filter = {}

    this.tableBody.innerHTML = ''
    this.options.columns.forEach((column) => {
      if (column.orderable === true) {
        if (column.order != null) {
          this.order = [{
            column: column.id,
            order: column.order,
          }]
        }

        document.getElementById(column.id).style.cursor = 'pointer'
        document.getElementById(column.id).addEventListener('click', (elem) => {
          this.order = [{
            column: elem.target.id,
            order: elem.target.dataset.order,
            // todo: ordre actuel... a inverser dans la requete? Mettre les deux fleches
            // si pas trié ? si defaultorder = false?
          }]
          // todo: mettre à jour le sens de la fleche...
          this._updateHeader()
          this._buildArray()
        })
      }
    })

    this.form = this.getElementsByTagName('form')
    const btnErase = document.getElementById('eraseFiltre')
    if (btnErase != null) {
      btnErase.addEventListener('click', (elem) => {
        elem.preventDefault()
        this.filter = {}
        this._clearForm()
        this._buildArray()
      })
    }
    // ajout des events sur le form
    this.inputs = this.form[0].getElementsByTagName('input')
    this.selects = this.form[0].getElementsByTagName('select')
    Array.from(this.inputs).forEach((input) => {
      if (input.type === 'text') {
        input.addEventListener('keyup', (event) => {
          if (event.target.type === 'text' && event.target.value.length < 3) {
            // on ne déclenche rien si moins de 3 caractères
            return
          }

          this._getFilterFromField(event.target)
          this._buildArray()
        })
      }

      if (input.type === 'radio' || input.type === 'checkbox') {
        input.addEventListener('change', (elem) => {
          this._getFilterFromField(elem.target)
          this._filterArray()
        })
      }
    })

    Array.from(this.selects).forEach((select) => {
      select.addEventListener('change', (elem) => {
        this._getFilterFromField(elem.target)
        this._filterArray()
      })
    })

    if (this.options.paging === true) {
      const select = document.getElementById(`${this.options.paging_id}_select`)
      select.addEventListener('change', (e) => {
        e.preventDefault()
        this.nbElementPerPage = e.target.value
        this._buildArray()
      })
    }

    this._initHeader()
    this._buildArray()
  }

  _filterArray() {
    this._buildArray()
  }

  _updateHeader() {
    // mise à jour du header après un tri
    this.order.forEach((order) => {
      const column = document.getElementById(order.column)
      if (order.order === ASC) {
        column.innerHTML = `${column.dataset.originalName} ${ICON_ASC}`
        column.dataset.order = 'DESC'
      } else if (order.order === DESC) {
        column.innerHTML = `${column.dataset.originalName} ${ICON_DESC}`
        column.dataset.order = 'ASC'
      } else {
        column.innerHTML = `${column.dataset.originalName} ${ICON_NONE}`
        column.dataset.order = 'ASC'
      }
    })
  }

  _buildArray() {
    this.tableBody.innerHTML = ''
    post(this.base_url, {
      paging: {
        pageLength: this.nbElementPerPage,
        pageActive: this.pageActive,
      },
      order: this.order,
      filter: this.filter,
    }).then((data) => {
      if (data.data.length > 0) {
        data.data.forEach((item) => {
          let html = '<tr>'
          this.options.columns.forEach((column) => {
            html += `<td>${item[column.id]}</td>`
          })
          html += '</tr>'
          this.tableBody.innerHTML += html
        })
      } else {
        let html = '<tr>'
        html += `<td colspan="${this.options.columns.length}" class="text-center">Pas de données.</td>`
        html += '</tr>'
        this.tableBody.innerHTML = html
      }
      this._updatePagination(data.paging)
    })
  }

  _initHeader() {
    this.options.columns.forEach((column) => {
      const texte = document.getElementById(column.id).innerText
      document.getElementById(column.id).dataset.originalName = texte
      if (column.orderable === true) {
        if (column.order === DESC) {
          document.getElementById(column.id).innerHTML = `${texte} ${ICON_DESC}`
          document.getElementById(column.id).dataset.order = DESC
        } else if (column.order === ASC) {
          document.getElementById(column.id).innerHTML = `${texte} ${ICON_ASC}`
          document.getElementById(column.id).dataset.order = ASC
        } else {
          document.getElementById(column.id).innerHTML = `${texte} ${ICON_NONE}`
          document.getElementById(column.id).dataset.order = ASC
        }
      }
    })
  }

  _updatePagination(paging) {
    const nav = document.getElementById(`${this.options.paging_id}_nav`)
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
      for (let i = 1; i <= paging.nbPages; i += 1) {
        const pageActive = i === paging.numActivePage ? 'active' : ''
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
          html += `<li class="page-item"><a class="page-link" href="#" data-page="${pag}">...</a></li>`
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
        const pageActive = p === paging.numActivePage ? 'active' : ''
        html += `<li class="page-item ${pageActive}"><a class="page-link" href="#">${p}</a></li>`
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
          html += `<li class="page-item"><a class="page-link" href="#" data-page="${pag}">...</a></li>`
        }
        html += `<li class="page-item"><a class="page-link" href="#">${paging.nbPages}</a></li>`
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

  static _extractNameFromForm(name) {
    const t = name.split('[')
    return t[1].substr(0, t[1].length - 1)
  }

  _getFilterFromField(input) {
    const name = Table._extractNameFromForm(input.name)
    switch (input.type) {
      case 'checkbox':
        if (input.checked === true) {
          if (!(name in this.filter)) {
            this.filter[name] = []
          }
          this.filter[name].push(
            input.value,
          )
        }
        break
      default:
        this.filter[name] = input.value
        break
    }
  }

  _clearForm() {
    Array.from(this.inputs).forEach((input) => {
      if (input.type === 'text') {
        input.value = ''
      }

      if (input.type === 'radio' || input.type === 'checkbox') {
        input.checked = false
      }
    })

    Array.from(this.selects).forEach((select) => {
      select.value = ''
    })
  }
}
