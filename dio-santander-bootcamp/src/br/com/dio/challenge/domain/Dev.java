package br.com.dio.challenge.domain;

import java.util.LinkedHashSet;
import java.util.Optional;
import java.util.Set;

public class Dev {
	
	private String name;
	private Set<Content> inscribedContents = new LinkedHashSet<>();
	private Set<Content> finishedContents = new LinkedHashSet<>();
	
	public void bootcampSubscribe(Bootcamp bootcamp) {
		this.inscribedContents.addAll(bootcamp.getContents());
		bootcamp.getDevSubs().add(this);
	}
	
	public void progress() {
		Optional<Content> content = this.inscribedContents.stream().findFirst();
		if(content.isPresent()) {
			this.finishedContents.add(content.get());
			this.inscribedContents.remove(content.get());
		} else {
			System.err.println("Você não está inscrito!");
		}
	}
	
	public double calculateXPTotal() {
		return this.finishedContents.stream().mapToDouble(content -> content.calculateXP()).sum();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<Content> getInscribedContents() {
		return inscribedContents;
	}

	public void setInscribedContents(Set<Content> inscribedContents) {
		this.inscribedContents = inscribedContents;
	}

	public Set<Content> getFinishedContents() {
		return finishedContents;
	}

	public void setFinishedContents(Set<Content> finishedContents) {
		this.finishedContents = finishedContents;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((finishedContents == null) ? 0 : finishedContents.hashCode());
		result = prime * result + ((inscribedContents == null) ? 0 : inscribedContents.hashCode());
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
		Dev other = (Dev) obj;
		if (finishedContents == null) {
			if (other.finishedContents != null)
				return false;
		} else if (!finishedContents.equals(other.finishedContents))
			return false;
		if (inscribedContents == null) {
			if (other.inscribedContents != null)
				return false;
		} else if (!inscribedContents.equals(other.inscribedContents))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}
	
	
	
	
	

}
