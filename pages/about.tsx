import React from 'react'

const About: React.FC = () => (
  <div className="p-about">
    <h1 className="title">Koki Sato</h1>

    <div className="card mb-4">
      <header className="card-header">
        <p className="card-header-title">About</p>
      </header>
      <div className="card-content is-size-5">
        <p>A software engineer in Tokyo who loves coding.</p>
        <p className="mb-2">
          I develop and operate a wide range from front-end to back-end and infrastructure.
        </p>
        <p>I used to work as a network engineer and operate large ISP network.</p>
        <p>When I was a student, I was interested in security and played CTF (Capture The Flag).</p>
      </div>
    </div>

    <div className="card mb-4">
      <header className="card-header">
        <p className="card-header-title">Career History</p>
      </header>
      <div className="card-content">
        <ul>
          <li>
            2023/01 - Present : <b>Preferred Networks, Inc.</b> -- <i>DevOps Engineer</i>
          </li>
          <li>
            2019/04 - 2022/12 : <b>Internet Multifeed Co.</b> -- <i>Software & Network Engineer</i>
          </li>
          <li>
            2016/10 - 2019/02 : <b>Increments inc. (Qiita Inc.)</b> -- <i>Engineer part-time job</i>
          </li>
          <li>
            2018/03 - 2018/03 : <b>LINE Corporation</b> -- <i>Engineer internship</i>
          </li>
          <li>
            2017/08 - 2018/01 : <b>Wantedly inc.</b> -- <i>Engineer internship</i>
          </li>
        </ul>
      </div>
    </div>

    <div className="card mb-4">
      <header className="card-header">
        <p className="card-header-title">Education</p>
      </header>
      <div className="card-content">
        <ul>
          <li>
            2017/04 - 2019/03 : <b>Waseda University</b>
            <ul>
              <li>Master of Engineering, Fundamental Science and Engineering</li>
            </ul>
          </li>
          <li>
            2013/04 - 2017/03 : <b>Waseda University</b>
            <ul>
              <li>Bachelor of Engineering, Fundamental Science and Engineering</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div className="card mb-4">
      <header className="card-header">
        <p className="card-header-title">Certification</p>
      </header>
      <div className="card-content">
        <ul>
          <li>Fundamental Information Technology Engineer</li>
          <li>Applied Information Technology Engineer</li>
          <li>Network Specialist</li>
        </ul>
      </div>
    </div>

    <div className="card">
      <header className="card-header">
        <p className="card-header-title">Links</p>
      </header>
      <div className="card-content">
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
            <a href="https://www.linkedin.com/in/koki-sato">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.wantedly.com/id/koki310dm">Wantedly</a>
          </li>
          <li>
            <a href="http://koki-sato.hatenablog.com">Hatena Blog</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default About
