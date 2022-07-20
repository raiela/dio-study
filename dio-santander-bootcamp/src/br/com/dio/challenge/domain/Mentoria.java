package br.com.dio.challenge.domain;

import java.time.LocalDate;

public class Mentoria extends Content {
	
	private LocalDate date;
	
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	@Override
	public double calculateXP() {
		return XP_DEFAULT + 20;
	}
	@Override
	public String toString() {
		return "Mentoria [date=" + date + ", getDate()=" + getDate() + ", calculateXP()=" + calculateXP()
				+ ", getTitle()=" + getTitle() + ", getDescription()=" + getDescription() + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	
}
