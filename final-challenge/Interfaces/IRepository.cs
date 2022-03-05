using System.Collections.Generic;

namespace DIO.Series
{
    public interface IRepository<T>
    {
        List<T> Lista();
        T ReturnById(int id);        
        void InsertInto(T entidade);        
        void DeleteBy(int id);        
        void AttBy(int id, T entidade);
        int NextId();
    }
}