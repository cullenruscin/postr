﻿using Postr.Models;
using System.Collections.Generic;

namespace Postr.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAllPosts();
    }
}