using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Postr.Models;
using Postr.Utils;
using System.Collections.Generic;

namespace Postr.Repositories
{
    public class LikeRepository : BaseRepository, ILikeRepository
    {
        public LikeRepository(IConfiguration configuration) : base(configuration) { }
        public Like GetByPostIdAndUserProfileId(int postId, int userProfileId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT * FROM [Like] WHERE PostId = @PostId AND UserProfileId = @UserProfileId";
                    DbUtils.AddParameter(cmd, "@PostId", postId);
                    DbUtils.AddParameter(cmd, "@UserProfileId", userProfileId);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            return new Like()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                PostId = DbUtils.GetInt(reader, "PostId"),
                                UserProfileId = DbUtils.GetInt(reader, "UserProfileId")
                            };
                        }
                        return null;
                    }
                }
            }
        }
        public List<Like> GetByPostId(int postId)
        {
            List<Like> likes = new List<Like>();

            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT * FROM [Like] WHERE PostId = @PostId";
                    DbUtils.AddParameter(cmd, "@PostId", postId);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            likes.Add(new Like()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                PostId = DbUtils.GetInt(reader, "PostId"),
                                UserProfileId = DbUtils.GetInt(reader, "UserProfileId")
                            });
                        }
                    }
                }
            }

            return likes;
        }
        public int GetLikeCountByPostId(int postId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using(SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT COUNT(*) FROM [Like] WHERE PostId = @PostId";
                    DbUtils.AddParameter(cmd, "@PostId", postId);

                    var likeCount = (int)cmd.ExecuteScalar();

                    return likeCount;
                }
            }
        }
        public void Create(Like like)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO [Like] (PostId, UserProfileId)
                    OUTPUT INSERTED.ID
                    VALUES (@PostId, @UserProfileId)";

                    DbUtils.AddParameter(cmd, "@PostId", like.PostId);
                    DbUtils.AddParameter(cmd, "@UserProfileId", like.UserProfileId);

                    like.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
        public void Delete(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    DELETE FROM [Like]
                    WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
