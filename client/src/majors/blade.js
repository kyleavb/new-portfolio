import React, { Component } from 'react';

class blade extends Component {
    // state = { bladeData: this.props.blade };

    render(){
        console.log(this.props)
        return(
            <div className={this.props.className}>
                <p>{this.props.data.title}</p>
            </div>
        )
    }
}

export default blade;