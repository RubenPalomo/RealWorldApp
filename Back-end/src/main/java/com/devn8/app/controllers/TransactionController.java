package com.devn8.app.controllers;

import com.devn8.app.models.Transaction;
import com.devn8.app.repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TransactionController {
    private final TransactionRepository transactionRepository;

    @Autowired
    public TransactionController(TransactionRepository transactionRepository){ this.transactionRepository=transactionRepository;}

    @GetMapping("/transactions")
    public List<Transaction> getTransactions() { return transactionRepository.findAll();}

    @GetMapping("/transaction/{id}")
    public Transaction findById(@PathVariable String id) { return transactionRepository.findById(id).get();}

    @PostMapping("/transactions")
    public void save(@RequestBody Transaction transaction) { transactionRepository.save(transaction);}

    @PutMapping("/transactions")
    public void update(@RequestBody Transaction transaction) { transactionRepository.save(transaction);}

    @DeleteMapping("/transaction/{id}")
    public void deleteById(@PathVariable String id) { transactionRepository.deleteById(id);}
}
