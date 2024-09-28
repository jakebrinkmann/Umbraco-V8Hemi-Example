import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import engineIcon from './images/engine.jpg'
import buttonOff from './images/button-off.png'
import buttonStarting from './images/button-starting.png'
import buttonRunning from './images/button-running.png'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export default class MyElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0
  
  @property({ type: String })
  engineStatus = 'off'
  
  buttonImage = buttonOff
  

  render() {
    switch (this.engineStatus) {
      case 'running':
        this.buttonImage = buttonRunning
        break
      case 'starting':
        this.buttonImage = buttonStarting
        break
      default:
        this.buttonImage = buttonOff
    }

    return html`
      <div class="v8hemi ${this.engineStatus}">
        <div>
          <img src=${engineIcon} class="engine-icon" alt="a V8 Engine" style="max-width: 80%; max-height: 400px;"/>
        </div>
        <slot></slot>
        <div class="card">
          <button @click=${this._onClick} class="ignition" part="button">
            <img src=${this.buttonImage} class="ignitionButton" alt="Engine Start Stop" style="max-width: 200px;" /><br />
            1252 count is ${this.count}
          </button>
        </div>
        <p class="read-the-docs">${this.docsHint}</p>
        
      </div>
    `
  }

  private _onClick() {
    this.count++
    
    if (this.engineStatus === 'off') {
      this.engineStatus = 'starting'
      console.log('starting')
      setTimeout( () => { console.log('running'); this.engineStatus = 'running' }, 1500)
    } else {
      this.engineStatus = 'off'
    }
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    @keyframes tilt-shaking {
      0% { transform: rotate(0deg); }
      25% { transform: rotate(5deg); }
      50% { transform: rotate(0deg); }
      75% { transform: rotate(-5deg); }
      100% { transform: rotate(0deg); }
    }

    @keyframes tilt-shaking-small {
      0% { transform: rotate(0deg); }
      25% { transform: rotate(2deg); }
      50% { transform: rotate(0deg); }
      75% { transform: rotate(-2deg); }
      100% { transform: rotate(0deg); }
    }

    .starting .ignition {
      animation: tilt-shaking 0.2s linear infinite;
    }
    
    .running .engine-icon {
      animation: tilt-shaking-small 0.3s linear infinite;
    }
    
    .v8hemi { 
      background-color: white;
      padding-top: 2rem;
    }
    
    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    ::slotted(h1) {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: white;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
