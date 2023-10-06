package com.mn.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mn.model.Users;

public interface usersRepository extends JpaRepository<Users, Integer> {

}
