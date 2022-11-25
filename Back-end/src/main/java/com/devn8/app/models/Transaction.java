package com.devn8.app.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;

public class Transaction {
    @Id
    private  String id;
    @Field
    private String fromName;
    @Field
    private String toName;
    @Field
    private double amount;

    public Transaction(){}

    public Transaction(String fromName, String toName, double amount) {
        this.fromName = fromName;
        this.toName = toName;
        this.amount = amount;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFromName() {
        return fromName;
    }

    public void setFromName(String fromName) {
        this.fromName = fromName;
    }

    public String getToName() {
        return toName;
    }

    public void setToName(String toName) {
        this.toName = toName;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "id='" + id + '\'' +
                ", fromName='" + fromName + '\'' +
                ", toName='" + toName + '\'' +
                ", amount=" + amount +
                '}';
    }
}
