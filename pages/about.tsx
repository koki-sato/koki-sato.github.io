import React from 'react'

const About: React.FC = () => (
  <div className="p-about">
    <h1 className="title">Koki Sato</h1>
    <div className="panel">
      <h2 className="subtitle">About</h2>
      <ul>
        <li>Network Engineer</li>
        <li>Web Engineer</li>
        <li>CTF Player</li>
      </ul>
    </div>
    <div className="panel">
      <h2 className="subtitle">Career History</h2>
      <ul>
        <li>
          2019/04 - Present : <b>Internet Multifeed Co.</b> -- <i>Network Engineer</i>
        </li>
        <li>
          2016/10 - 2019/02 : <b>Increments inc.</b> -- <i>Engineer part-time job</i>
        </li>
        <li>
          2018/03 - 2018/03 (4 weeks) : <b>LINE Corporation</b> -- <i>Engineer internship</i>
        </li>
        <li>
          2017/08 - 2018/01 : <b>Wantedly inc.</b> -- <i>Engineer internship</i>
        </li>
      </ul>
    </div>
    <div className="panel">
      <h2 className="subtitle">Education</h2>
      <ul>
        <li>
          2017/04 - 2019/03 :{' '}
          <b>Waseda University Graduate School, Fundamental Science and Engineering</b>
        </li>
        <li>
          2013/04 - 2017/03 : <b>Waseda University, Fundamental Science and Engineering</b>
        </li>
      </ul>
    </div>
    <div className="panel">
      <h2 className="subtitle">Certification</h2>
      <ul>
        <li>Fundamental Information Technology Engineer</li>
        <li>Applied Information Technology Engineer</li>
        <li>Network Specialist</li>
      </ul>
    </div>
    <div className="panel">
      <h2 className="subtitle">Links</h2>
      <ul>
        <li>
          <a href="https://twitter.com/koki310dm">Twitter</a>
        </li>
        <li>
          <a href="https://github.com/koki-sato">GitHub</a>
        </li>
        <li>
          <a href="https://qiita.com/koki-sato">Qiita</a>
        </li>
        <li>
          <a href="https://www.wantedly.com/users/18666745">Wantedly</a>
        </li>
        <li>
          <a href="http://k-sato.hatenablog.com">Hatena Blog</a>
        </li>
      </ul>
    </div>
  </div>
)

export default About
