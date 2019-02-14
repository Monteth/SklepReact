import React from "react"
import softAvatar from "../Assets/game_placeholder.png"

function SoftItem(props) {
    const itemStyle = {float: 'left'}
    const cardStyle = {width: '280px'}
    return (
        <div className="container">
            <div style={itemStyle}>
                <div style={{paddingLeft: '50px', paddingTop: '50px'}}>
                    <img src={softAvatar} style={{width: '280px'}} alt={'game avatar'} />
                    <div className="card custom-card" style={cardStyle}>
                        <br/>
                        <h3 className="text-center">{props.item.name.toUpperCase()}</h3>
                        <p>{props.item.description.substr(0, 125)}</p>
                        <button className="btn btn-success">Pobierz</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoftItem