import React from 'react'

const Index: React.FC = () => (
  <div className="p-index">
    <section className="p-index_hero">
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
        <a href="http://k-sato.hatenablog.com">
          <button type="button" className="button button-link">
            Blog
          </button>
        </a>
      </div>
    </section>
    <section className="p-index_profile">
      <div className="columns">
        <div className="column is-4 is-offset-2">
          <h2 className="subtitle">Interest</h2>
          <ul>
            <li>CTF (Team m1z0r3)</li>
            <li>Web / Network</li>
            <li>Security</li>
            <li>Machine Learning (Deep Learning)</li>
          </ul>
        </div>
        <div className="column is-4">
          <h2 className="subtitle">Certification</h2>
          <ul>
            <li>Fundamental Information Technology Engineer</li>
            <li>Applied Information Technology Engineer</li>
            <li>Network Specialist</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="p-index_label" />
  </div>
)

export default Index
