using Postr.Models;
using System.Collections.Generic;

namespace Postr.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAll();
        List<Post> GetByUserProfileId(int userProfileId);
        Post GetById(int id);
        void Add(Post post);
    }
}
