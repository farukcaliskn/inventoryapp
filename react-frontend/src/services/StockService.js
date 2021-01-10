import axios from 'axios';

const STOCK_API_BASE_URL = "http://localhost:8080/api/v1/items";

class StockService {

    getStock(){
        return axios.get(STOCK_API_BASE_URL);
    }

    createStock(stock){
        return axios.post(STOCK_API_BASE_URL, stock);
    }

    getStockById(stockId){
        return axios.get(STOCK_API_BASE_URL + '/' + stockId);
    }

    updateStock(stock, stockId){
        return axios.put(STOCK_API_BASE_URL + '/' + stockId, stock);
    }

    deleteStock(stockId){
        return axios.delete(STOCK_API_BASE_URL + '/' + stockId);
    }
}

export default new StockService()