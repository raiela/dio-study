using System;

namespace DIO.Series
{
    class Program
    {
        static RepositorySerie repositorySerie = new RepositorySerie();
        static void Main(string[] args)
        {
            string opUser = getOpUser();

			while (opUser.ToUpper() != "X")
			{
				switch (opUser)
				{
					case "1":
						ListSerie();
						break;
					case "2":
						InsertSerie();
						break;
					case "3":
						AttSerie();
						break;
					case "4":
						DelSerie();
						break;
					case "5":
						ViewSerie();
						break;
					case "C":
						Console.Clear();
						break;

					default:
						throw new ArgumentOutOfRangeException();
				}

				opUser = getOpUser();
			}

			Console.WriteLine("Obrigado por utilizar nossos serviços.");
			Console.ReadLine();
        }

        private static void DelSerie()
		{
			Console.Write("Digite o id da série: ");
			int indiceSerie = int.Parse(Console.ReadLine());

			repositorySerie.DeleteBy(indiceSerie);
		}

        private static void ViewSerie()
		{
			Console.Write("Digite o id da série: ");
			int indiceSerie = int.Parse(Console.ReadLine());

			var serie = repositorySerie.ReturnById(indiceSerie);

			Console.WriteLine(serie);
		}

        private static void AttSerie()
		{
			Console.Write("Digite o id da série: ");
			int indiceSerie = int.Parse(Console.ReadLine());

			foreach (int i in Enum.GetValues(typeof(Genre)))
			{
				Console.WriteLine("{0}-{1}", i, Enum.GetName(typeof(Genre), i));
			}
			Console.Write("Digite o gênero entre as opções acima: ");
			int entradaGenero = int.Parse(Console.ReadLine());

			Console.Write("Digite o Título da Série: ");
			string entradaTitulo = Console.ReadLine();

			Console.Write("Digite o Ano de Início da Série: ");
			int entradaAno = int.Parse(Console.ReadLine());

			Console.Write("Digite a Descrição da Série: ");
			string entradaDescricao = Console.ReadLine();

			Serie atualizaSerie = new Serie(id: indiceSerie,
										genre: (Genre)entradaGenero,
										title: entradaTitulo,
										year: entradaAno,
										description: entradaDescricao);

			repositorySerie.AttBy(indiceSerie, atualizaSerie);
		}
        private static void ListSerie()
		{
			Console.WriteLine("Listar séries");

			var lista = repositorySerie.Lista();

			if (lista.Count == 0)
			{
				Console.WriteLine("Nenhuma série cadastrada.");
				return;
			}

			foreach (var serie in lista)
			{
                var excluido = serie.returnDeletedsio();
                
				Console.WriteLine("#ID {0}: - {1} {2}", serie.returnDeletedsio(), serie.returnTitle(), (excluido ? "*Excluído*" : ""));
			}
		}

        private static void InsertSerie()
		{
			Console.WriteLine("Inserir nova série");

			foreach (int i in Enum.GetValues(typeof(Genre)))
			{
				Console.WriteLine("{0}-{1}", i, Enum.GetName(typeof(Genre), i));
			}
			Console.Write("Digite o gênero entre as opções acima: ");
			int entradaGenero = int.Parse(Console.ReadLine());

			Console.Write("Digite o Título da Série: ");
			string entradaTitulo = Console.ReadLine();

			Console.Write("Digite o Ano de Início da Série: ");
			int entradaAno = int.Parse(Console.ReadLine());

			Console.Write("Digite a Descrição da Série: ");
			string entradaDescricao = Console.ReadLine();

			Serie novaSerie = new Serie(id: repositorySerie.NextId(),
										genre: (Genre)entradaGenero,
										title: entradaTitulo,
										year: entradaAno,
										description: entradaDescricao);

			repositorySerie.InsertInto(novaSerie);
		}

        private static string getOpUser()
		{
			Console.WriteLine();
			Console.WriteLine("DIO Séries a seu dispor!!!");
			Console.WriteLine("Informe a opção desejada:");

			Console.WriteLine("1- Listar séries");
			Console.WriteLine("2- Inserir nova série");
			Console.WriteLine("3- Atualizar série");
			Console.WriteLine("4- Excluir série");
			Console.WriteLine("5- Visualizar série");
			Console.WriteLine("C- Limpar Tela");
			Console.WriteLine("X- Sair");
			Console.WriteLine();

			string opUser = Console.ReadLine().ToUpper();
			Console.WriteLine();
			return opUser;
		}
    }
}