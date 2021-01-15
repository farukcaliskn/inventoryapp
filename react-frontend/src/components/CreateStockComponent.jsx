import React, { Component } from 'react'
import StockService from '../services/StockService';

class CreateStockComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            item_name: '',
            item_qty: '',
            item_price: ''
        }
        this.changeitem_nameHandler = this.changeitem_nameHandler.bind(this);
        this.changeitem_qtyHandler = this.changeitem_qtyHandler.bind(this);
        this.saveOrUpdateStock = this.saveOrUpdateStock.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            StockService.getStockById(this.state.id).then( (res) =>{
                let stock = res.data;
                this.setState({item_name: stock.item_name,
                    item_qty: stock.item_qty,
                    item_price : stock.item_price
                });
            });
        }        
    }
    saveOrUpdateStock = (e) => {
        e.preventDefault();
        let stock = {item_name: this.state.item_name, item_qty: this.state.item_qty, item_price: this.state.item_price};
        console.log('stock => ' + JSON.stringify(stock));

        // step 5
        if(this.state.id === '_add'){
            StockService.createStock(stock).then(res =>{
                this.props.history.push('/stock');
            });
        }else{
            StockService.updateStock(stock, this.state.id).then( res => {
                this.props.history.push('/stock');
            });
        }
    }
    
    changeitem_nameHandler= (event) => {
        this.setState({item_name: event.target.value});
    }

    changeitem_qtyHandler= (event) => {
        this.setState({item_qty: event.target.value});
    }

    changeitem_priceHandler= (event) => {
        this.setState({item_price: event.target.value});
    }
    //Önceki sayfaya döner
    cancel(){
        this.props.history.push('/stock');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Ürün Ekle</h3>
        }else{
            return <h3 className="text-center">Stok Güncelle</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Ürün Adı </label>
                                            <input placeholder="Ürün Adı" name="item_name" className="form-control" 
                                                value={this.state.item_name} onChange={this.changeitem_nameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Miktar </label>
                                            <input placeholder="Miktar" type="number" min ="1" name="item_qty" className="form-control" 
                                                value={this.state.item_qty} onChange={this.changeitem_qtyHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Fiyat </label>
                                            <input placeholder="Fiyat" type="number" min ="0.1"name="item_price" className="form-control" 
                                                value={this.state.item_price} onChange={this.changeitem_priceHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateStock}>Kaydet</button>
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

export default CreateStockComponent
