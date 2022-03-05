using System;
 namespace DIO.Series{
     public class Serie : BaseEntity{
         private Genre Genre { get; set;}        
         private string Title { get; set;}
         private string Description { get; set;}
         private int Year { get; set;}
         private bool Deletedis { get; set;}

         public Serie(int id, Genre genre, string title, String description, int year){
             this.Id = id;
             this.Genre = genre;
             this.Title = title;
             this.Description = description;
             this.Year = year;
             this.Deletedis = false;
         }

         public override string ToString(){
            string aux_return = "";
            aux_return += "Gênero: " + this.Genre + Environment.NewLine;
            aux_return += "Titulo: " + this.Title + Environment.NewLine;
            aux_return += "Descrição: " + this.Description + Environment.NewLine;
            aux_return += "Ano de Início: " + this.Year + Environment.NewLine;
            aux_return += "Excluido: " + this.Deletedis;
            return aux_return;
         }         

         public string returnTitle(){
             return this.Title;
         }

         public int returnId(){
             return this.Id;
         }

         public bool returnDeletedsio(){
             return this.Deletedis;
         }

         public void Deletedsio() {
            this.Deletedis = true;
        }
     }
 }