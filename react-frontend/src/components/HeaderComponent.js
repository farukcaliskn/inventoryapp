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
                    <div><a href="/" className="navbar-brand">Stok/Satış/Fatura Takip Sistemi</a></div>
                    <a className="btn btn-primary " href ="/user/_add"> Kayıt Ol</a>
                    <a className="btn btn-success ml-1 float-right" href ="/user/_login"> Giriş Yap</a>


                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
