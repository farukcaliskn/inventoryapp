package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long>{

}
