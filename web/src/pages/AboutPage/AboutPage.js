import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
  return (
    <>
      <h1>AboutPage</h1>
      <p>
        Find me in <code>./web/src/pages/AboutPage/AboutPage.js</code>
      </p>
      <p>
      <Link to={routes.home()}>Home</Link>
        <Link to={routes.about()}>About</Link>
      </p>
    </>
  )
}

export default AboutPage
