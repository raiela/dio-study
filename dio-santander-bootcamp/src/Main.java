import br.com.dio.challenge.domain.Bootcamp;
import br.com.dio.challenge.domain.Course;
import br.com.dio.challenge.domain.Dev;

public class Main {

	public static void main(String[] args) {
		
	
		Course course = new Course();
		course.setDescription("Java course - Learning Language");
		course.setTitle("Java Course");
		course.setWorkload(10);
		
		Bootcamp bootcamp = new Bootcamp();
        bootcamp.setName("Bootcamp Java Developer");
        bootcamp.setDescription("Descrição Bootcamp Java Developer");
        bootcamp.getContents().add(course);
        
        Dev devRaiela = new Dev();
        devRaiela.setName("Raiela");
        devRaiela.bootcampSubscribe(bootcamp);
        System.out.println("Conteudos concluidos: " + devRaiela.getFinishedContents());
        System.out.println("Conteudos inscritos - " + devRaiela.getInscribedContents());
        
        Dev devEdu = new Dev();
        devEdu.setName("Edu");
		

	}

}
