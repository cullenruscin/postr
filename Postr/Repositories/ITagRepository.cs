using Postr.Models;
using System.Collections.Generic;

namespace Postr.Repositories
{
    public interface ITagRepository
    {
        List<Tag> GetAll();
        Tag GetById(int id);
        Tag GetByName(string name);
        void Add(Tag tag);
    }
}
