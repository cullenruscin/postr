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

        public List<Post> GetAll()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT p.Id, p.UserProfileId, p.Content, p.CreateDate,      

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

        public Post GetById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT p.UserProfileId, p.Content, p.CreateDate,
                    
                    up.FirebaseUserId, up.FirstName, up.LastName, up.DisplayName, up.Email, up.CreateDate, up.UserTypeId

                    FROM Post p
                    JOIN UserProfile up ON p.UserProfileId = up.Id
                    WHERE p.Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);   
                    using (SqlDataReader reader = cmd.ExecuteReader()) 
                    {
                        Post post = null;
                        if (reader.Read())
                        {
                            post = new Post()
                            {
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
                                },
                            };
                        }
                        return post;
                    }  
                }
            }
        }

        public void Add(Post post)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO [Post] (Content, CreateDate, UserProfileId)   
                    OUTPUT INSERTED.ID   
                    VALUES (@Content, @CreateDate, @UserProfileId)
                    ";

                    DbUtils.AddParameter(cmd, "@Content", post.Content);
                    DbUtils.AddParameter(cmd, "@CreateDate", post.CreateDate);
                    DbUtils.AddParameter(cmd, "@UserProfileId", post.UserProfileId);

                    post.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
    }
}
