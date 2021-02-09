import React, { Component } from 'react'
import StockService from '../services/StockService'

class BillViewComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            stock: {}
        }
    }

    componentDidMount(){
        StockService.getStockById(this.state.id).then( res => {
            this.setState({stock: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Fatura Detayları</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Ürün Adları </label>
                            <div> { this.state.stock.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Stock Last Name: </label>
                            <div> { this.state.stock.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Stock Email ID: </label>
                            <div> { this.state.stock.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default BillViewComponent