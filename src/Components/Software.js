import React, {Component} from "react"
import SoftItem from "./SoftItem"

class Software extends Component {
    constructor(prefs) {
        super(prefs)

        this.state = {
            query: "http://localhost:8080/api/software",
            apps: []
        }

        this.componentDidMount = this.componentDidMount.bind(this)
    }

    updateData() {
        console.log("update data")
        let localQuery = this.state.query
        if (this.props.location.searchString) {
            localQuery += "?name=" + this.props.location.searchString
        }
        fetch(localQuery)
            .then(data => data.json())
            .then(data => {
                this.setState({apps: data})
            })
        console.log(localQuery)
    }


    componentDidMount() {
        this.updateData()
        console.log("component did mount")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location.searchString !== prevProps.location.searchString) {
            this.updateData()
        }
        console.log("Component did update")
        console.log("props:", this.props)
    }

    render() {
        const appItems = this.state.apps.map(item => <SoftItem key={item.idSoftware} item={item}/>)

        return (
            <div>
                {appItems}
            </div>
        )
    }


}

export default Software