import React, {Component} from "react"
import {Link, NavLink, Redirect, Route} from "react-router-dom"

class Header extends Component {

    state = {
        searchRedirect: false,
        searchString: ""
    }


    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            searchString: value
        })
    }


    loadLink = () => {
        console.log("loadLink")
        return <Link
            to={
                {
                    pathname: '/apps',
                    searchString: this.state.searchString
                }
            }/>
    }

    keyPress = (event) => {
        if(event.key === 'Enter'){
            console.log('enter press here! ')
            this.setState({searchRedirect: true})
        }
    }

    render() {
        return (
            <div>
                {this.state.searchRedirect ? <Redirect to={
                    {
                        pathname: '/apps',
                        searchString: this.state.searchString
                    }
                }/> : null}
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
                            <div className="form-inline">
                                <input
                                    onKeyPress={this.keyPress}
                                    size="25"
                                    name="name"
                                    className="form-control mr-sm-2"
                                    type="text"
                                    onChange={this.handleChange}
                                    placeholder="..."/>
                                <Link className="btn btn-outline-success my-2 my-sm-0"
                                      to={
                                          {
                                              pathname: '/apps',
                                              searchString: this.state.searchString
                                          }
                                      }>
                                    Szukaj
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header