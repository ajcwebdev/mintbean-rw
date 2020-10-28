import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <h1>MintBean</h1>
      <p>
        This is the home page
      </p>
      <p>
      <Link to={routes.about()}>About</Link>
        <Link to={routes.home()}>Home</Link>
      </p>
    </>
  )
}

export default HomePage
