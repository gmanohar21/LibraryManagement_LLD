package com.mn.model;

import java.io.Serializable;

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
@Table(name="Users")
public class Users implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="UserId")
	private Integer UserId;
	@Column(name="UserName")
	private String UserName;
	@Column(name="Password")
	private String Password;
	@Column(name="UserRoleid")
	private Integer UserRoleid;
}
