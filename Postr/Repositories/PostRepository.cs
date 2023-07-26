using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Postr.Models;
using Postr.Utils;
using System.Collections.Generic;

namespace Postr.Repositories
{
    public class PostRepository : BaseRepository, IPostRepository
    {
        public PostRepository(IConfiguration configuration) : base(configuration) { }

        public List<Post> GetAllPosts()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, UserProfileId, Content, CreateDate
                                        FROM Post";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var posts = new List<Post>();
                        while (reader.Read())
                        {
                            posts.Add(new Post()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                                Content = DbUtils.GetString(reader, "Content"),
                                CreateDate = DbUtils.GetDateTime(reader, "CreateDate")
                            });
                        }
                        return posts;
                    }
                }
            }
        }
    }
}
