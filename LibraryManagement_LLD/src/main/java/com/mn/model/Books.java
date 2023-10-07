package com.mn.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Entity
@Table(name="Books")
public class Books {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="BookId")
	private Integer BookId;
	@Column(name="BookName")
	private String BookName;
}
