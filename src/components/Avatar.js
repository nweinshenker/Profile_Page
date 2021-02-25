import React, {Compoent} from 'react'

export default class Avatar extends React.Component {
    render () {
        return (
            <div className="Avatar">
                <div className="Image Box">
                    <img className="ProfilePicture" 
                        src={this.props.imageUrl}
                        alt={this.props.alt}>
                    </img>
                </div>
            </div>
        )
    }
}