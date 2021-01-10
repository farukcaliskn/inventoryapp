package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Stock;
import net.javaguides.springboot.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class StockController {
    @Autowired
    private StockRepository stockRepository;

    // get all Stocks
    @GetMapping("/items")
    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    // create Stock rest api
    @PostMapping("/items")
    public Stock createStock(@RequestBody Stock Stock) {
        return stockRepository.save(Stock);
    }

    // get Stock by id rest api
    @GetMapping("/items/{id}")
    public ResponseEntity<Stock> getStockById(@PathVariable Long id) {
        Stock Stock = stockRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Stock not exist with id :" + id));
        return ResponseEntity.ok(Stock);
    }

    // update Stock rest api

    @PutMapping("/items/{id}")
    public ResponseEntity<Stock> updateStock(@PathVariable Long id, @RequestBody Stock StockDetails) {
        Stock Stock = stockRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Stock not exist with id :" + id));

        Stock.setItem_name(StockDetails.getItem_name());
        Stock.setItem_price(StockDetails.getItem_price());
        Stock.setItem_qty(StockDetails.getItem_qty());

        Stock updatedStock = stockRepository.save(Stock);
        return ResponseEntity.ok(updatedStock);
    }

    // delete Stock rest api
    @DeleteMapping("/items/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteStock(@PathVariable Long id) {
        Stock Stock = stockRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Stock not exist with id :" + id));

        stockRepository.delete(Stock);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
