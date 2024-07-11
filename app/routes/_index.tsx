import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [{ title: 'Koki Sato' }, { name: 'description', content: 'A portfolio page of Koki Sato' }]
}

export default function Index() {
  return (
    <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Koki Sato</h1>
        <p className="text-lg text-gray-600 mt-2">A software engineer in Tokyo who loves coding.</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">About</h2>
        <p className="text-gray-600">
          I am engaged in a wide range of development and operations, from frontend to backend and
          infrastructure. I used to work as a network engineer and operate a large ISP network. When
          I was a student, I was interested in security and played CTF (Capture The Flag).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Career History</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>
            2023/01 - Present : <b>Preferred Networks, Inc.</b> -- <i>DevOps Engineer</i>
          </li>
          <li>
            2019/04 - 2022/12 : <b>Internet Multifeed Co.</b> -- <i>Software & Network Engineer</i>
          </li>
          <li>
            2016/10 - 2019/02 : <b>Increments inc. (Qiita Inc.)</b> -- <i>Engineer part-time job</i>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Education</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            2017/04 - 2019/03 : <b>Waseda University</b>
            <ul className="list-disc list-inside pl-4">
              <li>Master of Engineering, Fundamental Science and Engineering</li>
            </ul>
          </li>
          <li>
            2013/04 - 2017/03 : <b>Waseda University</b>
            <ul className="list-disc list-inside pl-4">
              <li>Bachelor of Engineering, Fundamental Science and Engineering</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Certification</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Fundamental Information Technology Engineer</li>
          <li>Applied Information Technology Engineer</li>
          <li>Network Specialist</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Links</h2>
        <ul className="flex flex-wrap space-x-4 text-blue-600">
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
        </ul>
      </section>
    </div>
  )
}
