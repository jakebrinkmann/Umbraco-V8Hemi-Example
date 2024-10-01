import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import engineIcon from './images/engine.jpg'
import buttonOff from './images/button-off.png'
import buttonStarting from './images/button-starting.png'
import buttonRunning from './images/button-running.png'
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import {OpenAPI, V1Service} from "./api";
import { UMB_AUTH_CONTEXT } from "@umbraco-cms/backoffice/auth"

@customElement('v8hemi-ui')
export default class V8hemiUi extends UmbElementMixin(LitElement) {

  
  @property({ type: String })
  engineStatus = 'off'
  
  @property({ type: String })
  noiseText = 'bop'
  
  buttonImage = buttonOff
  
  constructor() {
    super();
    this.consumeContext(UMB_AUTH_CONTEXT, (_auth) => {
      const openApiConfig = _auth.getOpenApiConfiguration()
      OpenAPI.TOKEN = openApiConfig.token
      OpenAPI.BASE = openApiConfig.base
      OpenAPI.WITH_CREDENTIALS = openApiConfig.withCredentials
    });
  }

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
        <div class="motor-block">
          <div class="motor-noise motor-noise-before">${this.noiseText}</div>
          <img src=${engineIcon} class="engine-icon" alt="a V8 Engine" style="max-width: 80%; max-height: 400px;"/>
          <div class="motor-noise motor-noise-after">${this.noiseText}</div>
        </div>
        <div class="card">
          <button @click=${this._onClick} class="ignition" part="button">
            <img src=${this.buttonImage} class="ignitionButton" alt="Engine Start Stop" style="max-width: 200px;" />
          </button>
        </div>
        
      </div>
    `
  }

  private _onClick() {
   
    if (this.engineStatus === 'off') {
      this.engineStatus = 'starting'
      setTimeout( () => { 
        V1Service.getApiV1BlendV8HemiNoise().then(response => {
          this.noiseText = response
          this.engineStatus = 'running'
          this.requestUpdate()
        })
      }, 500)
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

    @keyframes motor-noise-before {
      0% {
        opacity: 1;
        transform: translate3d(0,0,0);
      }
      10% {
        opacity: 1;
        transform: translate3d(-15px,-5px,0);
      }
      20% {
        opacity: .75;
        transform: translate3d(-30px,-10px,0);
      }
      30% {
        opacity: .5;
        transform: translate3d(-40px,-15px,0);
      }
      40% {
        opacity: 0;
        transform: translate3d(-50px,-20px,0);
      }
      50% {
        opacity: 0;
        transform: translate3d(0,0,0);
      }
      70% {
        opacity: 1;
        transform: translate3d(-15px,5px,0);
      }
      80% {
        opacity: .75;
        transform: translate3d(-30px,10px,0);
      }
      90% {
        opacity: .5;
        transform: translate3d(-40px,15px,0);
      }
      100% {
        opacity: 0;
        transform: translate3d(-50px,20px,0);
      }
    }
    
    @keyframes motor-noise-after {
      0% {
        opacity: 1;
        transform: translate3d(0,0,0);
      }
      10% {
        opacity: 1;
        transform: translate3d(15px,5px,0);
      }
      20% {
        opacity: .75;
        transform: translate3d(30px,10px,0);
      }
      30% {
        opacity: .5;
        transform: translate3d(40px,15px,0);
      }
      40% {
        opacity: 0;
        transform: translate3d(50px,20px,0);
      }
      50% {
        opacity: 1;
        transform: translate3d(0,0,0);
      }
      70% {
        opacity: 1;
        transform: translate3d(15px,-5px,0);
      }
      80% {
        opacity: .75;
        transform: translate3d(30px,-10px,0);
      }
      90% {
        opacity: .5;
        transform: translate3d(40px,-15px,0);
      }
      100% {
        opacity: 0;
        transform: translate3d(50px,-20px,0);
      }
    }

    .starting .ignition {
      animation: tilt-shaking 0.2s linear infinite;
    }
    
    .running .engine-icon {
      animation: tilt-shaking-small 0.3s linear infinite;
    }
    
    .motor-block {
      display: flex;
      justify-content: center;
      align-items: center;      
    }
    
    .motor-noise {
      font-size: calc(4vw + 4vh + 2vmin);
      font-weight: bold;
      opacity: 0;
    }
    
    .running .motor-noise-after {
      animation: motor-noise-after 0.6s linear infinite;
    }
    .running .motor-noise-before {
      animation: motor-noise-before 0.8s linear infinite reverse;
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
    'v8hemi-ui': V8hemiUi
  }
}
