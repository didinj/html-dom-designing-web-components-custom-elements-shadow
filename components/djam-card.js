
class DjamCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['title'];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute('title') || 'Untitled Card';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          max-width: 400px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          overflow: hidden;
          background: #fff;
          font-family: Arial, sans-serif;
        }

        .header {
          background: #0d6efd;
          color: white;
          padding: 12px 16px;
          font-size: 1.2rem;
          font-weight: bold;
        }

        .body {
          padding: 16px;
          color: #333;
        }

        ::slotted(img) {
          width: 100%;
          display: block;
          border-bottom: 1px solid #eee;
        }
      </style>

      <div class="header">${title}</div>
      <div class="body">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('djam-card', DjamCard);
