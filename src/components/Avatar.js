import React, { Component } from 'react'

export default class Avatar extends Component {
    render () {
        return (
            <div className="Avatar">
                <div className="Image Box">
                    <img className="ProfilePicture" 
                        src={this.props.src}
                        alt={this.props.alt}>
                    </img>
                </div>
                <div className="container-fluid">
                    <h1>Favorite Author Quote</h1>
                    <h2>'“We have to continually be jumping off cliffs and developing our wings on the way down.” -Kurt Vonnegut'</h2>
                </div>
            </div>
        )
    }
}