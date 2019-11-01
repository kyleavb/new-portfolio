import React, { Component } from 'react';

class blade extends Component {
    
    parseData = () => {
        let dataArray = this.props.data.content;

        return dataArray.map( (contentObj, i) => {
            let elementTag = contentObj['tag'];
            let formattedEle = ''
            switch (elementTag) {
                case 'img':
                    console.log('IMAGE');
                    break;
            
                default:
                    formattedEle = React.createElement(elementTag, {key: i}, contentObj['copy'])
            }
            return formattedEle
        });

        // return rawCopy.map( (newComp, i) => {
        //     let elementTag = Object.keys(newComp)[0];
        //     return React.createElement(elementTag, {key: i}, newComp[elementTag]);
        // })
    }

    render(){

        return(
            <div id={`${this.props.data.link}`} className={`info-blade`}>
                <div>
                    {this.parseData()}
                </div>
            </div>
        )
    }
}

export default blade;