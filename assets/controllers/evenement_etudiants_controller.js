import { Controller } from '@hotwired/stimulus'

// Controller Stimulus pour sélectionner des étudiants dans un modal
export default class extends Controller {
  static targets = ['departement', 'semestres', 'groupes', 'search', 'liste', 'status', 'selectedZone']
  static values = {
    endpoint: String,
    semestresEndpoint: String,
    groupesEndpoint: String,
    semestresPlaceholder: String,
    groupesPlaceholder: String,
    loadingMessage: String,
    errorMessage: String,
    emptyMessage: String,
  }

  connect () {
    // Log de diagnostic pour confirmer la connexion du contrôleur (peut être retiré ensuite)
    // Vous devriez voir ce message dans la console lorsque le modal est présent dans le DOM
    console.info('[evenement-etudiants] connect')

    this.page = 1
    this.limit = 20
    this.loading = false
    this.hasMore = false
    this.currentResults = []
    this.selected = new Map() // id -> { id, text }
    this.debounceTimer = null

    // Etat initial: cascade verrouillée
    this.semestresTarget.setAttribute('disabled', 'disabled')
    this.groupesTarget.setAttribute('disabled', 'disabled')

    // Si des IDs sont déjà présents dans le champ hidden, les recharger (texte non dispo ici, on affichera l’ID)
    this._initFromHidden()

    // Si un département est déjà sélectionné (cas d'édition), charger les semestres
    const depId = this.departementTarget?.value
    if (depId) {
      this.onDepartementChange()
    }
  }

  // Récupère le champ hidden pour y stocker les IDs (robuste même si le modal est hors du <form>)
  get hiddenInput () {
    // 1) tentative: chercher dans le formulaire englobant
    const inForm = this.element.closest('form')?.querySelector('input[name="evenement[etudiantsIds]"]')
    if (inForm) return inForm
    // 2) fallback: recherche globale dans le document (cas courant: le modal n'est pas dans le <form>)
    return document.querySelector('input[name="evenement[etudiantsIds]"]')
  }

  // Initialiser sélection depuis le champ hidden (cas d'édition)
  _initFromHidden () {
    const hidden = this.hiddenInput
    if (!hidden || !hidden.value) return
    const ids = hidden.value.split(/[\s,]+/).map(v => parseInt(v, 10)).filter(v => !isNaN(v))
    ids.forEach(id => {
      if (!this.selected.has(id)) this.selected.set(id, { id, text: `#${id}` })
    })
    this._renderSelected()
  }

  onDepartementChange () {
    // Quand le département change, réinitialiser filtres, page, résultats et sélection
    this.page = 1
    this.currentResults = []

    // Vider et verrouiller les filtres enfants
    this._clearOptions(this.semestresTarget)
    // Placeholder semestres
    this._appendOption(this.semestresTarget, '', this.semestresPlaceholderValue || '— sélectionner —', true)

    this._clearOptions(this.groupesTarget)
    // Placeholder groupes
    this._appendOption(this.groupesTarget, '', this.groupesPlaceholderValue || '— sélectionner —', true)

    this.semestresTarget.setAttribute('disabled', 'disabled')
    this.groupesTarget.setAttribute('disabled', 'disabled')

    this.clearSelection()

    // Charger les semestres du département si défini
    const depId = this.departementTarget.value
    if (depId) {
      const url = new URL(this.semestresEndpointValue, window.location.origin)
      url.searchParams.set('departement', depId)
      fetch(url, { headers: { Accept: 'application/json' } })
        .then((r) => r.json())
        .then((json) => {
          // Réinjecter placeholder et options
          this._clearOptions(this.semestresTarget)
          this._appendOption(this.semestresTarget, '', this.semestresPlaceholderValue || '— sélectionner —', true)
          ;(json.items || []).forEach((it) => this._appendOption(this.semestresTarget, it.id, it.text))
          // Activer le sélecteur de semestres après chargement
          this.semestresTarget.removeAttribute('disabled')
        })
        .finally(() => {
          this.reload()
        })
    } else {
      // Aucun département → garder tout verrouillé
      this.reload()
    }
  }

  onSemestresChange () {
    // Quand les semestres changent: gérer la cascade (groupes)
    const selectedSemestres = Array.from(this.semestresTarget.options).filter((o) => o.selected).map((o) => o.value)

    // Toujours vider les groupes et verrouiller par défaut
    this._clearOptions(this.groupesTarget)
    this.groupesTarget.setAttribute('disabled', 'disabled')

    if (selectedSemestres.length === 0) {
      // Aucun semestre sélectionné → garder groupes désactivés
      this.page = 1
      this.currentResults = []
      this.reload()
      return
    }

    // Charger les groupes pour les semestres sélectionnés, puis activer le select
    this._loadGroupesBySemestres(() => {
      this.groupesTarget.removeAttribute('disabled')
    })

    // Rechargement de la liste des étudiants
    this.page = 1
    this.currentResults = []
    this.reload()
  }

  _loadGroupesBySemestres (afterLoadCb) {
    // Charger les groupes uniquement en fonction des semestres sélectionnés
    this._clearOptions(this.groupesTarget)
    // Placeholder groupes
    this._appendOption(this.groupesTarget, '', this.groupesPlaceholderValue || '— sélectionner —', true)
    const selectedSemestres = Array.from(this.semestresTarget.options)
      .filter((o) => o.selected)
      .map((o) => o.value)
    if (selectedSemestres.length === 0) return

    const url = new URL(this.groupesEndpointValue, window.location.origin)
    selectedSemestres.forEach((sid) => url.searchParams.append('semestres[]', sid))

    fetch(url, { headers: { Accept: 'application/json' } })
      .then((r) => r.json())
      .then((json) => {
        // Réinjecter placeholder puis options
        this._clearOptions(this.groupesTarget)
        this._appendOption(this.groupesTarget, '', this.groupesPlaceholderValue || '— sélectionner —', true)
        ;(json.items || []).forEach((it) => this._appendOption(this.groupesTarget, it.id, it.text))
        if (typeof afterLoadCb === 'function') afterLoadCb()
      })
  }

  onSearch (event) {
    clearTimeout(this.debounceTimer)
    this.debounceTimer = setTimeout(() => {
      this.page = 1
      this.currentResults = []
      this.reload()
    }, 300)
  }

  clearSemestres () {
    // Désélectionner tous les semestres
    Array.from(this.semestresTarget.options).forEach((o) => { o.selected = false })
    // Réinitialiser les groupes
    this._clearOptions(this.groupesTarget)
    this._appendOption(this.groupesTarget, '', this.groupesPlaceholderValue || '— sélectionner —', true)
    this.groupesTarget.setAttribute('disabled', 'disabled')
    // Recharger la liste
    this.page = 1
    this.currentResults = []
    this.reload()
  }

  clearGroupes () {
    // Désélectionner tous les groupes
    Array.from(this.groupesTarget.options).forEach((o) => { o.selected = false })
    // Recharger la liste
    this.page = 1
    this.currentResults = []
    this.reload()
  }

  reload () {
    if (this.loading) return
    this.loading = true

    const url = new URL(this.endpointValue, window.location.origin)
    const dep = this.departementTarget.value
    const qs = this.searchTarget.value || ''

    if (dep) url.searchParams.set('departement', dep)

    // semestres[] multi
    const selectedSemestres = Array.from(this.semestresTarget.options).filter((o) => o.selected).map((o) => o.value)
    selectedSemestres.forEach((sid) => url.searchParams.append('semestres[]', sid))

    // groupes[] multi
    const selectedGroupes = this.groupesTarget ? Array.from(this.groupesTarget.options).filter((o) => o.selected).map((o) => o.value) : []
    selectedGroupes.forEach((gid) => url.searchParams.append('groupes[]', gid))

    url.searchParams.set('q', qs)
    url.searchParams.set('page', String(this.page))
    url.searchParams.set('limit', String(this.limit))

    this.statusTarget.textContent = this.loadingMessageValue || 'Chargement…'

    fetch(url, { headers: { Accept: 'application/json' } })
      .then((r) => r.json())
      .then((json) => {
        if (this.page === 1) this._clearOptions(this.listeTarget)
        const items = json.items || []
        this.currentResults = this.currentResults.concat(items)
        items.forEach((it) => this._appendOption(this.listeTarget, it.id, it.text))
        this.hasMore = !!json.hasMore
        const total = json.total || this.currentResults.length
        if (total === 0) {
          this.statusTarget.textContent = this.emptyMessageValue || 'Aucun résultat'
        } else {
          this.statusTarget.textContent = `${this.currentResults.length} / ${total}`
        }
      })
      .catch(() => {
        this.statusTarget.textContent = this.errorMessageValue || 'Erreur de chargement'
      })
      .finally(() => {
        this.loading = false
      })
  }

  loadMore () {
    if (this.loading || !this.hasMore) return
    this.page += 1
    this.reload()
  }

  addSelected () {
    // Ajouter les options sélectionnées de la liste à la sélection courante
    const options = Array.from(this.listeTarget.selectedOptions)
    options.forEach(opt => {
      const id = parseInt(opt.value, 10)
      if (!this.selected.has(id)) this.selected.set(id, { id, text: opt.textContent })
    })
    this._renderSelected()
    this._syncHidden()
  }

  selectAllVisible () {
    // Sélectionne toutes les options visibles dans la liste (utile pour "Tout sélectionner")
    const options = Array.from(this.listeTarget.options)
    options.forEach(opt => {
      // ignorer placeholders ou options désactivées
      if (opt.disabled || opt.value === '') return
      // marquer l'option comme sélectionnée visuellement
      opt.selected = true
      const id = parseInt(opt.value, 10)
      if (isNaN(id)) return
      if (!this.selected.has(id)) this.selected.set(id, { id, text: opt.textContent })
    })
    this._renderSelected()
    this._syncHidden()
  }

  clearSelection () {
    this.selected.clear()
    this._renderSelected()
    this._syncHidden()
  }

  removeItem (event) {
    const id = parseInt(event.currentTarget.dataset.id, 10)
    this.selected.delete(id)
    this._renderSelected()
    this._syncHidden()
  }

  applySelection () {
    // Rien de plus à faire, déjà synchronisé
  }

  _renderSelected () {
    // Render inside modal
    this.selectedZoneTarget.innerHTML = ''
    const badges = this._buildBadges()
    badges.forEach((badge) => this.selectedZoneTarget.appendChild(badge.cloneNode(true)))

    // Also render under the button in the form if the container exists
    const external = document.getElementById('evenement-selected-summary')
    if (external) {
      external.innerHTML = ''
      // When rendered outside modal, the remove buttons should still work
      badges.forEach((badge) => external.appendChild(badge))
    }
  }

  _buildBadges () {
    const out = []
    this.selected.forEach(({ id, text }) => {
      const badge = document.createElement('span')
      badge.className = 'badge bg-primary d-inline-flex align-items-center gap-1 me-1 mb-1'
      const label = document.createElement('span')
      label.textContent = text || `#${id}`
      const btn = document.createElement('button')
      btn.type = 'button'
      btn.className = 'btn btn-sm btn-link text-white p-0'
      btn.innerHTML = '&times;'
      btn.dataset.id = String(id)
      btn.addEventListener('click', this.removeItem.bind(this))
      badge.appendChild(label)
      badge.appendChild(btn)
      out.push(badge)
    })
    return out
  }

  _syncHidden () {
    const hidden = this.hiddenInput
    if (!hidden) return
    hidden.value = Array.from(this.selected.keys()).join(',')
  }

  _appendOption (select, value, text, disabled = false) {
    const opt = document.createElement('option')
    opt.value = String(value)
    opt.textContent = text
    if (disabled) {
      opt.setAttribute('disabled', 'disabled')
      opt.selected = false
    }
    select.appendChild(opt)
  }

  _clearOptions (select) {
    while (select.options.length > 0) select.remove(0)
  }
}
