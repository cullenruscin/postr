using System.Collections.Generic;
using Postr.Models;

namespace Postr.Repositories
{
    public interface ILikeRepository
    {
        Like GetByPostIdAndUserProfileId(int postId, int userProfileId);
        List<Like> GetByPostId(int postId);
        int GetLikeCountByPostId(int postId);
        void Create(Like like);
        void Delete(int id);
    }
}
