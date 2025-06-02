// Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/Sites/intranetV3/assets/components/Toast.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/04/2024 10:28

import { Toast as ToastBs } from 'bootstrap'

class Toast {
  constructor() {
    // Create a container for all toasts if it doesn't exist
    this.ensureToastContainerExists();
  }

  ensureToastContainerExists() {
    if (!document.getElementById('toast-container')) {
      const toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      toastContainer.className = 'position-fixed top-0 end-0 p-3 d-flex flex-column';
      toastContainer.style.zIndex = '1000';
      // Add some spacing between toasts
      toastContainer.style.gap = '0.5rem';
      document.body.appendChild(toastContainer);
      this.toastContainer = toastContainer;
    }
  }

  createAndShow(type, text, icone, options = {}) {
    this.ensureToastContainerExists();

    // Create a toast wrapper to ensure proper flex layout
    const toastWrapper = document.createElement('div');
    toastWrapper.className = 'toast-wrapper';
    toastWrapper.style.width = '100%';

    const html = `<div class="my_toast alert alert-${type} border-2 d-flex align-items-center" role="alert">
                    <div class="bg-${type} me-3 icon-item"><span class="fas ${icone} text-white fs-3"></span></div>
                    <p class="mb-0 flex-1">${text}</p>
                    <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>`;

    toastWrapper.innerHTML = html;

    // Add event listener to remove the toast after it's hidden
    toastWrapper.children[0].addEventListener('hidden.bs.toast', (event) => {
      const wrapper = event.target.closest('.toast-wrapper');
      if (wrapper) {
        wrapper.remove();
      }
    });

    // Append to the toast container
    document.getElementById('toast-container').appendChild(toastWrapper);

    this.show(type, text, options);
  }

  show(type, text, options = {}) {
    // Get all toast elements
    const toastElList = [].slice.call(document.querySelectorAll('.my_toast'));

    // Initialize and show each toast
    toastElList.forEach((toastEl) => {
      // Make sure the toast is properly initialized with Bootstrap
      const tst = new ToastBs(toastEl, {
        autohide: true,
        delay: 5000,
        ...options,
      });

      // Show the toast
      tst.show();
    });

    // Store the last shown toast for reference
    this.lastShownToast = toastElList[toastElList.length - 1];
  }

  error(text, options = {}) {
    this.createAndShow('danger', text, 'fa-times-circle', options)
  }

  warning(text, options = {}) {
    this.createAndShow('warning', text, 'fa-exclamation-circle', options)
  }

  success(text, options = {}) {
    this.createAndShow('success', text, 'fa-check-circle', options)
  }

  info(text, options = {}) {
    this.createAndShow('info', text, 'fa-info-circle', options)
  }
}

export default new Toast()
