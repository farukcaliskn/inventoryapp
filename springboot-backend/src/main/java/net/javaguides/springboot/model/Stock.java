package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "stock")
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "item_name")
    private String item_name;

    @Column(name = "item_price")
    private long item_price;

    @Column(name = "item_qty")
    private long item_qty;

    public Stock() {
    }

    public Stock(long id, String item_name, long item_price, long item_qty) {
        this.id = id;
        this.item_name = item_name;
        this.item_price = item_price;
        this.item_qty = item_qty;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getItem_name() {
        return item_name;
    }

    public void setItem_name(String item_name) {
        this.item_name = item_name;
    }

    public long getItem_price() {
        return item_price;
    }

    public void setItem_price(long item_price) {
        this.item_price = item_price;
    }

    public long getItem_qty() {
        return item_qty;
    }

    public void setItem_qty(long item_qty) {
        this.item_qty = item_qty;
    }
}
