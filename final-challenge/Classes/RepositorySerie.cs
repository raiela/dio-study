using System;
using System.Collections.Generic;
using DIO.Series;

public class RepositorySerie : IRepository<Serie>{
    private List<Serie> serieList = new List<Serie>();

    public void AttBy(int id, Serie serieObject){
        serieList[id] = serieObject;
    }

    public void DeleteBy(int id){
        serieList[id].Deletedsio();
    }

    public void InsertInto(Serie serieObject){
        serieList.Add(serieObject);
    }

    public List<Serie> Lista(){
        return serieList;
    }

    public int NextId(){
        return serieList.Count;
    }

    public Serie ReturnById(int id){
        return serieList[id];
    }

    
}