package com.devn8.app.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.ArrayList;

@Document
public class User {
    @Id
    private  String id;
    @Field
    private String firstName;
    @Field
    private String lastName;
    @Field
    private ArrayList transaction;

    public User(){}

    public User(String id, String firstName, String lastName, ArrayList transaction) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.transaction = transaction;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public ArrayList getTransaction() {
        return transaction;
    }

    public void setTransaction(ArrayList transaction) {
        this.transaction = transaction;
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", transaction=" + transaction +
                '}';
    }
}
