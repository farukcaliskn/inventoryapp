import React, { Component } from 'react'
import StockService from '../services/StockService'
import swal from '@sweetalert/with-react'

var sepet = 0;
var sepetim = [];
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
        this.changeQty_CartHandler = this.changeQty_CartHandler.bind(this);

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
    
    changeQty_CartHandler= (e) => {
        this.setState({qty_cart: e.target.value});
        //console.log(event.target.value);
    }
    addCart (item_name, item_qty, item_price, id){
        
    
        let cart = {qty_cart: this.state.qty_cart}; //inputtaki değer
        if(item_qty<cart.qty_cart){
            swal("Uyarı","Stokta Yeterince Ürün Yok!","warning")

        }
        else if(cart.qty_cart == null){
            swal("Uyarı","Lütfen Adet Giriniz.","warning")
        }else if(cart.qty_cart <= 0 ){
            swal("Uyarı","Lütfen Sıfırdan Farklı Pozitif Sayılar Giriniz.","warning")
        }
        else{
        var newStockQty = item_qty - cart.qty_cart ;
        console.log("Kalan Stok: " + newStockQty)
        sepet =sepet + cart.qty_cart * item_price
        console.log("Ürün Tutarı: " + sepet)
      
        sepetim[0] = [item_name, cart, sepet]  
        console.log( sepetim[0][0]);
        }
        let stock = {item_name: item_name, item_price:item_price, item_qty:newStockQty};
        StockService.updateStock(stock, id).then( res => {
            this.props.history.push('/stock');
        });
      
    }
    confirmCart(){
        console.log(sepet)
        var tutar = sepet
        swal({
            title: tutar + " TL Tutarında Ürün Almayı Onaylıyor Musunuz?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((confirm) => {
            if (confirm) {
                window.location.reload();
              swal("Sepet Onaylandı", {
                icon: "success",
              });
            } else {
              swal(tutar);
            }
          });
    }
        
    

    render() {
        return (
            <div>
                 <h2 className="text-center">Ürün Listesi</h2>
                 <div className = "row ">
                    <button className="btn btn-primary" onClick={this.addStock}> Ürün Ekle</button>
                    <button className="btn btn-success ml-2" onClick={this.confirmCart}> Sepeti Onayla</button>

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
                                             <button onClick = { () => this.addCart(stock.item_name, stock.item_qty, stock.item_price, stock.id)} className="btn btn-success ml-1">Sepete Ekle</button>
                                            <input type="number" placeholder="Adet" name="qty_cart" min="0" onChange={this.changeQty_CartHandler} style={{height: "32px", width: "58px"}}/>
                                             
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
