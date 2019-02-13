import React, {Component} from "react"
import {Link, NavLink, Redirect, Route} from "react-router-dom"

class Header extends Component {

    state = {
        searchRedirect: false,
        searchString: ""
    }

    searchForSoftware(event) {
        const {name, value} = event.target
        this.setState({
            searchRedirect: true
        })
        console.log("request redirect")
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            searchString: value,
            searchRedirect: true
        })
        console.log("save searchString")
    }

    submitForm() {

        // this.props.history.push({pathname: '/apps', state: {searchString: this.state.searchString}})
        return <Link to={{
            pathname: '/apps',
            searchString: this.state.searchString
        }}/>
    }

    render() {
        return (
            <div>

                {/*{this.state.searchRedirect ? <Link to={{pathname: '/apps', state: this.state.searchString}}/> : null}*/}
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
                            <form className="form-inline"  onSubmit={this.submitForm}>
                                <input
                                    onKeyDown={(event) => (event.keyCode === 13) ? this.form.submit() : null }
                                    size="25"
                                    name="name"
                                    className="form-control mr-sm-2"
                                    type="text"
                                    onChange={this.handleChange}
                                    placeholder="..."/>
                                    <button type="submit">Szuk</button>
                                <Link className="btn btn-outline-success my-2 my-sm-0"
                                      to={
                                          {
                                              pathname: '/apps',
                                              searchString: this.state.searchString
                                          }
                                      }>
                                    Szukaj
                                </Link>
                            </form>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header