package br.com.dio.challenge.domain;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.Set;


public class Bootcamp {
	
	private String name;
	private String description;
	private final LocalDate dateInitial = LocalDate.now();
	private final LocalDate dateFinish = dateInitial.plusDays(40);
	private Set<Dev> devSubs = new HashSet<>();
	private Set<Content> contents = new LinkedHashSet<>();
	
		
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Set<Dev> getDevSubs() {
		return devSubs;
	}
	public void setDevSubs(Set<Dev> devSubs) {
		this.devSubs = devSubs;
	}
	public Set<Content> getContents() {
		return contents;
	}
	public void setContents(Set<Content> contents) {
		this.contents = contents;
	}
	public LocalDate getDateInitial() {
		return dateInitial;
	}
	public LocalDate getDateFinish() {
		return dateFinish;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((contents == null) ? 0 : contents.hashCode());
		result = prime * result + ((dateFinish == null) ? 0 : dateFinish.hashCode());
		result = prime * result + ((dateInitial == null) ? 0 : dateInitial.hashCode());
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((devSubs == null) ? 0 : devSubs.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Bootcamp other = (Bootcamp) obj;
		if (contents == null) {
			if (other.contents != null)
				return false;
		} else if (!contents.equals(other.contents))
			return false;
		if (dateFinish == null) {
			if (other.dateFinish != null)
				return false;
		} else if (!dateFinish.equals(other.dateFinish))
			return false;
		if (dateInitial == null) {
			if (other.dateInitial != null)
				return false;
		} else if (!dateInitial.equals(other.dateInitial))
			return false;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (devSubs == null) {
			if (other.devSubs != null)
				return false;
		} else if (!devSubs.equals(other.devSubs))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}
	
	

}
