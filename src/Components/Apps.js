import React, {Component} from "react"

class Apps extends Component{

    state = {
        apps: []
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/software")
            .then(response => response.json())
            .then(data => {
                this.setState({apps: data})
                console.log(data)
            })
    }

    render(){
        const appItems = this.state.apps.map(item => item.name)
        // item => <AppItem key={item.id} item={item}>

        return (
            <div>
                <h1>Apps Component works!</h1>
                {appItems}
            </div>
        )
    }


}

export default Apps