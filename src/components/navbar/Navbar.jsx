import { useState } from "react"
import "./navbar.css"
function Navbar() {
  const [scroll, setScroll] = useState(false)
    window.onscroll = () => {
        setScroll(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }
  return (
    <div className={scroll ? "navbar main navbar-expand-md  py-4 fixed-top scroll" : "navbar main navbar-expand-md navbar-light  bg-light py-4 fixed-top"}>
    <div className="container">
    <a href="#" className="navbar-brand">Hussein</a>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#nav">
         <i className="fa fa-bars main-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="nav">
        <ul className="navbar-nav ">
          <li className="d-flex nav-item ml-md-5">
            <div className="p-2 align-self-start">
                <i className="fa fa-phone"></i>
            </div>
            <div className="p-2 align-self-end">
                0024993920698
            </div>
            <div className="p-2 align-self-start d-none d-md-block">
                <i className="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div className="p-2 align-self-end d-none d-md-block">
                husseinyoussouf77@gmail.com
            </div>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#myskill" className="nav-link">My Skill</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Navbar