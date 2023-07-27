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
                    cmd.CommandText = @"SELECT p.Id, p.UserProfileId, p.Content, p.CreateDate,
                                               
                                        up.FirebaseUserId, up.FirstName, up.LastName, up.DisplayName, 
                                        up.Email, up.CreateDate, up.UserTypeId                                       

                                        FROM [Post] p
                                        JOIN UserProfile up ON p.UserProfileId = up.Id";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var posts = new List<Post>();
                        while (reader.Read())
                        {
                            posts.Add(new Post()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Content = DbUtils.GetString(reader, "Content"),
                                CreateDate = DbUtils.GetDateTime(reader, "CreateDate"),
                                UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                                UserProfile = new UserProfile()
                                {
                                    Id = DbUtils.GetInt(reader, "UserProfileId"),
                                    FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                                    FirstName = DbUtils.GetString(reader, "FirstName"),
                                    LastName = DbUtils.GetString(reader, "LastName"),
                                    DisplayName = DbUtils.GetString(reader, "DisplayName"),
                                    Email = DbUtils.GetString(reader, "Email"),
                                    CreateDate = DbUtils.GetDateTime(reader, "CreateDate"),
                                    UserTypeId = DbUtils.GetInt(reader, "UserTypeId")
                                }
                            });
                        }
                        return posts;
                    }
                }
            }
        }
    }
}
