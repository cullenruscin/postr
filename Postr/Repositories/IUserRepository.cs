using System.Collections.Generic;
using Postr.Models;
using Postr.Utils;

namespace Postr.Repositories
{
    public interface IUserRepository
    {
        List<User> GetAllUsers();
    }
}
