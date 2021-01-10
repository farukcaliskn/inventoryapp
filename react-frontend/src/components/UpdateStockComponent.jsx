import React, { Component } from 'react'
import StockService from '../services/StockService';

class UpdateStockComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            item_name: '',
            item_price: '',
            item_qty: ''
        }
        this.changeitem_nameHandler = this.changeitem_nameHandler.bind(this);
        this.changeitem_priceHandler = this.changeitem_priceHandler.bind(this);
        this.updateStock = this.updateStock.bind(this);
    }

    componentDidMount(){
        StockService.getStockById(this.state.id).then( (res) =>{
            let stock = res.data;
            this.setState({item_name: stock.item_name,
                item_price: stock.item_price,
                item_qty : stock.item_qty
            });
        });
    }

    updateStock = (e) => {
        e.preventDefault();
        let stock = {item_name: this.state.item_name, item_price: this.state.item_price, item_qty: this.state.item_qty};
        console.log('stock => ' + JSON.stringify(stock));
        console.log('id => ' + JSON.stringify(this.state.id));
        StockService.updateStock(stock, this.state.id).then( res => {
            this.props.history.push('/stock');
        });
    }
    
    changeitem_nameHandler= (event) => {
        this.setState({item_name: event.target.value});
    }

    changeitem_priceHandler= (event) => {
        this.setState({item_price: event.target.value});
    }

    changeitem_qtyHandler= (event) => {
        this.setState({item_qty: event.target.value});
    }

    cancel(){
        this.props.history.push('/stock');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Stok Güncelle</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Ürün Adı: </label>
                                            <input placeholder="Ürün Adı" name="item_name" className="form-control" 
                                                value={this.state.item_name} onChange={this.changeitem_nameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Fiyat: </label>
                                            <input placeholder="Fiyat" name="item_price" className="form-control" 
                                                value={this.state.item_price} onChange={this.changeitem_priceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Miktar: </label>
                                            <input placeholder="Miktar" name="item_qty" className="form-control" 
                                                value={this.state.item_qty} onChange={this.changeitem_qtyHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateStock}>Kaydet</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Çık</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateStockComponent
