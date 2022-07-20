package br.com.dio.challenge.domain;

public class Course extends Content {
	
	private int workload;
	
	public int getWorkload() {
		return workload;
	}
	public void setWorkload(int workload) {
		this.workload = workload;
	}
	@Override
	public double calculateXP() {
		return XP_DEFAULT * workload;
	}
	@Override
	public String toString() {
		return "Course [workload=" + workload + ", getWorkload()=" + getWorkload() + ", calculateXP()=" + calculateXP()
				+ ", getTitle()=" + getTitle() + ", getDescription()=" + getDescription() + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}

}
