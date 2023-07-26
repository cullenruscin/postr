﻿using System.Collections.Generic;
using Postr.Models;
using Postr.Utils;

namespace Postr.Repositories
{
    public interface IUserProfileRepository
    {
        List<UserProfile> GetAllUsers();
        UserProfile GetByFirebaseUserId(string firebaseUserId);
        UserProfile GetById(int id);
        void Add(UserProfile user);
    }
}