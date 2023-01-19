import React from 'react'

const Index: React.FC = () => (
  <div className="p-index">
    <h1 className="title">Koki Sato</h1>
    <h2 className="subtitle">WELCOME TO MY PORTFOLIO PAGE</h2>
    <div className="buttons">
      <a href="https://twitter.com/koki310dm">
        <button type="button" className="button button-link">
          Twitter
        </button>
      </a>
      <a href="https://github.com/koki-sato">
        <button type="button" className="button button-link">
          GitHub
        </button>
      </a>
      <a href="http://qiita.com/koki-sato">
        <button type="button" className="button button-link">
          Qiita
        </button>
      </a>
      <a href="https://www.linkedin.com/in/koki-sato">
        <button type="button" className="button button-link">
          LinkedIn
        </button>
      </a>
    </div>
  </div>
)

export default Index
