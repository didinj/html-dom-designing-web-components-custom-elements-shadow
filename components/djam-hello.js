
class DjamHello extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['greeting'];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const greeting = this.getAttribute('greeting') || 'Hello';

    this.shadowRoot.innerHTML = `
      <style>
        p {
          color: #0d6efd;
          font-family: Arial, sans-serif;
          border-left: 4px solid #0d6efd;
          padding-left: 8px;
        }
      </style>
      <p>${greeting} from <strong>DjamHello</strong> component!</p>
    `;
  }
}

customElements.define('djam-hello', DjamHello);
