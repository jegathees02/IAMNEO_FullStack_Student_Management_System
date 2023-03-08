package com.example.demo.repository;

import org.springframework.stereotype.Repository;

import com.example.demo.model.Student;

import org.springframework.data.repository.CrudRepository;
@Repository
public interface StudentRepository extends CrudRepository<Student,Integer>{
Student findById(int roll);
}