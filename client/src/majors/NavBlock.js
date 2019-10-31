import React, { Component } from 'react';

class NavBlock extends Component {
    state = { menuToggle: true}

    componentDidMount(){
        document.addEventListener("mousedown", this.offClickCheck, false);
    }

    offClickCheck = (e) => {
        if( !this.node.contains(e.target) && this.state.menuToggle === false ){
            this.navToggle();
        }
    }

    navToggle = () => {
        let menuButton = document.getElementsByClassName("menuButton")[0];
        let linkBar = document.getElementsByClassName("linkBar")[0];

        if( this.state.menuToggle ){
            menuButton.classList.add("change");
            linkBar.classList.add("change");
        }else{
            menuButton.classList.remove("change");
            linkBar.classList.remove("change");
        }
        this.setState( {menuToggle: !this.state.menuToggle} );
    }

    mapLinks = () => {
        return this.props.links.map( (item, i) => (
            <li key={i}>
                <a href={`#${item.title}`}>{item.title}</a>
            </li>
        ))  
    }

    render(){
        let linkCreate = this.props.links ? this.mapLinks() : '';
 
        return (
            <nav className="navBar row" ref={ node => this.node = node}>
                <div className="col-12">
                    <div className="navMenu">
                        <div className="menuButton" onClick={this.navToggle}>
                            <div className="menuBar one"></div>
                            <div className="menuBar two"></div>
                            <div className="menuBar three"></div>
                            <p className="menuText">Menu</p>
                        </div>
                        <ul className="linkBar">
                            {linkCreate}
                        </ul>
                    </div>
                </div>
            </nav>
            
        )
    }
}

export default NavBlock