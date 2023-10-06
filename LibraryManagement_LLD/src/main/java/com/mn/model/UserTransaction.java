package com.mn.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Entity
public class UserTransaction {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer UserTransactionId; 
	private String UserId; 
	private Integer BookId;
}
