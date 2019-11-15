import React, { Component } from 'react';

class blade extends Component {
    
    parseData = () => {
        let dataArray = this.props.data.content;

        return dataArray.map( (contentObj, i) => {
            let elementTag = contentObj['tag'];
            let formattedEle = '';
            switch (elementTag) {
                case 'img':
                    formattedEle = React.createElement(elementTag, { src: contentObj['source'], key:i , alt: contentObj['alt'] ? contentObj['alt'] : 'No Image Alt Text'})
                    break;
            
                default:
                    formattedEle = React.createElement(elementTag, { key: i }, contentObj['copy'])
            }
            return formattedEle
        });
    }

    render(){

        return(
            <section id={`${this.props.data.link}`} className={`info-blade`}>
                <div className="content">
                    {this.parseData()}
                </div>
            </section>
        )
    }
}

export default blade;