import React, { Component } from 'react';

class blade extends Component {

    render(){
        return(
            <div id={`${this.props.data.title}`} className={`info-blade`}>
                <div>
                    <p>{this.props.data.title}</p>
                </div>
            </div>
        )
    }
}

export default blade;