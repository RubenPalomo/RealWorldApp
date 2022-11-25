package com.devn8.app.models;

public class TransactionClass {
    protected String fromName;
    protected String toName;
    protected int amount;

    public TransactionClass(){}

    public TransactionClass(String fromName, String toName, int amount) {
        this.fromName = fromName;
        this.toName = toName;
        this.amount = amount;
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

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}
