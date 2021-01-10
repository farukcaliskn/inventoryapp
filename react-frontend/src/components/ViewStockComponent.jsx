import React, { Component } from 'react'
import StockService from '../services/StockService'

class ViewStockComponent extends Component {
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
                    <h3 className = "text-center"> Stok Detaylarını Görüntüle</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Ürünün Adı: </label>
                            <div> { this.state.stock.item_name }</div>
                        </div>
                        <div className = "row">
                            <label> Ürünün Fiyatı: </label>
                            <div> { this.state.stock.item_price }</div>
                        </div>
                        <div className = "row">
                            <label> Ürünün Miktarı </label>
                            <div> { this.state.stock.item_qty }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewStockComponent
