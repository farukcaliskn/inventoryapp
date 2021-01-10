import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://cumhuriyet.edu.tr" className="navbar-brand">Stok/Satış/Fatura Takip Sistemi</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
