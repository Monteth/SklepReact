import React, {Component} from "react"
import {NavLink} from "react-router-dom"

class Header extends Component {

    redirect() {

    }

    render() {
        return (
            <header className="navi">" "
                <div className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">

                    <NavLink className="navbar-brand" to="/">SpokoSklep</NavLink>

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="nabvarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                    <NavLink className="nav-link" to="/apps">Aplikacje</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/account">Konto</NavLink>
                            </li>
                        </ul>
                        <form className="form-inline mt-2 mt-md-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Wyszukaj..."/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Szuk</button>
                        </form>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header