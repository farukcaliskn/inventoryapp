import React, { Component } from 'react'
import StockService from '../services/StockService'

class ListStockComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                stock: []
        }
        this.addStock = this.addStock.bind(this);
        this.editStock = this.editStock.bind(this);
        this.deleteStock = this.deleteStock.bind(this);
        this.addCart = this.addCart.bind(this);

    }

    deleteStock(id){
        StockService.deleteStock(id).then( res => {
            this.setState({stock: this.state.stock.filter(stock => stock.id !== id)});
        });
    }

    editStock(id){
        this.props.history.push(`/add-stock/${id}`);
    }

    componentDidMount(){
        StockService.getStock().then((res) => {
            this.setState({ stock: res.data});
        });
    }

    addStock(){
        this.props.history.push('/add-stock/_add');
    }
    addCart(){
        console.log("Merhaba")
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Ürün Listesi</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addStock}> Ürün Ekle</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Ürün Adı </th>
                                    <th> Ürün Fiyatı </th>
                                    <th> Ürün Adedi</th>
                                    <th> İşlemler</th>
                                    <th> Sepet</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.stock.map(
                                        stock => 
                                        <tr key = {stock.id}>
                                             <td> {stock.item_name} </td>   
                                             <td> {stock.item_price}</td>
                                             <td> {stock.item_qty}</td>
                                             <td>
                                                 <button onClick={ () => this.editStock(stock.id)} className="btn btn-info">Güncelle </button>
                                                 <button onClick={ () => this.deleteStock(stock.id)} className="btn btn-danger ml-1">Sil </button>
                                             </td>
                                             <td>
                                             <button onClick = {() => this.addCart()} className="btn btn-success ml-1">Sepete Ekle</button>
                                                 <input type="number" placeholder="Adet" name="qty_cart" style={{height: "32px", width: "58px"}}/>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListStockComponent
