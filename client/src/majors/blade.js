import React, { Component } from 'react';

class blade extends Component {
    // state = { bladeData: this.props.blade };

    render(){
        console.log(this.props)
        return(
            <div className={this.props.className}>
                {this.props.data.title}
            </div>
        )
    }
}

export default blade;