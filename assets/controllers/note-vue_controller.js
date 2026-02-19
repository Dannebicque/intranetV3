import { Controller } from '@hotwired/stimulus'

/**
 * @property {string} urlPointerNoteValue
 * @property {boolean} isVueValue
 * @property {HTMLInputElement} checkboxTarget
 * @property {HTMLElement} spinnerTarget
 */
export default class extends Controller {
  static values = {
    urlPointerNote: String,
    isVue: Boolean,
  };

  static targets = ['checkbox', 'spinner'];

  connect() {
    this.checkboxTarget.checked = this.isVueValue;
  }

  /** @param {InputEvent & {target: HTMLInputElement}} event */
  async pointerNote(event) {
    event.preventDefault();
    this._setLoading(true);

    const response = await fetch(`${this.urlPointerNoteValue}`, {
      method: 'POST',
      body: JSON.stringify({
        isVue: event.target.checked,
      }),
    });

    const data = await response.json();

    if (typeof data.isVue === 'boolean') {
      this.isVueValue = data.isVue;
    }

    this._setLoading(false);
  }

  /** @param {boolean} loading */
  _setLoading(loading) {
    if (loading) {
      this.spinnerTarget.classList.remove('d-none');
      this.checkboxTarget.classList.add('d-none');
    } else {
      this.spinnerTarget.classList.add('d-none');
      this.checkboxTarget.classList.remove('d-none');
    }
  }
}
