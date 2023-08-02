using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Postr.Models;
using Postr.Utils;
using System.Collections.Generic;

namespace Postr.Repositories
{
    public class PostRepository : BaseRepository, IPostRepository
    {
        private readonly ILikeRepository _likeRepository;
        public PostRepository(IConfiguration configuration, ILikeRepository likeRepository) : base(configuration)
        {
            _likeRepository = likeRepository;
        }

        public List<Post> GetAll()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT p.Id, p.UserProfileId, p.Content, p.CreateDate, p.ParentId, p.IsDeleted,    
                    up.FirebaseUserId, up.FirstName, up.LastName, up.DisplayName, 
                    up.Email, up.CreateDate, up.UserTypeId                                       
                    FROM [Post] p
                    JOIN UserProfile up ON p.UserProfileId = up.Id";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var posts = new List<Post>();
                        while (reader.Read())
                        {
                            var post = new Post()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Content = DbUtils.GetString(reader, "Content"),
                                CreateDate = DbUtils.GetDateTime(reader, "CreateDate"),
                                ParentId = DbUtils.GetNullableInt(reader, "ParentId"),
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
                                IsDeleted = DbUtils.GetBool(reader, "IsDeleted")
                            };

                            post.Likes = _likeRepository.GetByPostId(post.Id);
                            post.LikeCount = post.Likes.Count;

                            posts.Add(post);
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
                SELECT p.Id, p.UserProfileId, p.Content, p.CreateDate, p.ParentId, p.IsDeleted,
                up.FirebaseUserId, up.FirstName, up.LastName, up.DisplayName, up.Email, up.CreateDate, up.UserTypeId
                FROM Post p
                JOIN UserProfile up ON p.UserProfileId = up.Id
                WHERE p.Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            var post = new Post()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Content = DbUtils.GetString(reader, "Content"),
                                CreateDate = DbUtils.GetDateTime(reader, "CreateDate"),
                                ParentId = DbUtils.GetNullableInt(reader, "ParentId"),
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
                                IsDeleted = DbUtils.GetBool(reader, "IsDeleted")
                            };

                            // Fetch the likes for this post using the likeRepository
                            post.Likes = _likeRepository.GetByPostId(post.Id);

                            // Calculate the like count
                            post.LikeCount = post.Likes.Count;

                            return post;
                        }
                        return null;
                    }
                }
            }
        }
        public List<Post> GetByParentId(int parentId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT p.Id, p.UserProfileId, p.Content, p.CreateDate, p.ParentId, p.IsDeleted,
                            up.FirebaseUserId, up.FirstName, up.LastName, up.DisplayName, up.Email, up.CreateDate, up.UserTypeId
                        FROM Post p
                        JOIN UserProfile up ON p.UserProfileId = up.Id
                        WHERE p.ParentId = @ParentId";

                    DbUtils.AddParameter(cmd, "@ParentId", parentId);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var childPosts = new List<Post>();
                        while (reader.Read())
                        {
                            var post = new Post()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Content = DbUtils.GetString(reader, "Content"),
                                CreateDate = DbUtils.GetDateTime(reader, "CreateDate"),
                                ParentId = DbUtils.GetNullableInt(reader, "ParentId"),
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
                                IsDeleted = DbUtils.GetBool(reader, "IsDeleted")
                            };

                            // Fetch the likes for this post using the likeRepository
                            post.Likes = _likeRepository.GetByPostId(post.Id);

                            // Calculate the like count
                            post.LikeCount = post.Likes.Count;

                            childPosts.Add(post);
                        }
                        return childPosts;
                    }
                }
            }
        }

        public List<Post> GetByUserProfileId(int userProfileId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                SELECT p.Id, p.Content, p.CreateDate, p.ParentId, p.IsDeleted,
                    up.FirebaseUserId, up.FirstName, up.LastName, up.DisplayName, up.Email, up.CreateDate, up.UserTypeId
                FROM Post p
                JOIN UserProfile up ON p.UserProfileId = up.Id
                WHERE up.Id = @UserProfileId";

                    DbUtils.AddParameter(cmd, "@UserProfileId", userProfileId);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var posts = new List<Post>();
                        while (reader.Read())
                        {
                            var post = new Post()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Content = DbUtils.GetString(reader, "Content"),
                                CreateDate = DbUtils.GetDateTime(reader, "CreateDate"),
                                ParentId = DbUtils.GetNullableInt(reader, "ParentId"),
                                UserProfileId = userProfileId,
                                UserProfile = new UserProfile()
                                {
                                    Id = userProfileId,
                                    FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                                    FirstName = DbUtils.GetString(reader, "FirstName"),
                                    LastName = DbUtils.GetString(reader, "LastName"),
                                    DisplayName = DbUtils.GetString(reader, "DisplayName"),
                                    Email = DbUtils.GetString(reader, "Email"),
                                    CreateDate = DbUtils.GetDateTime(reader, "CreateDate"),
                                    UserTypeId = DbUtils.GetInt(reader, "UserTypeId")
                                },
                                IsDeleted = DbUtils.GetBool(reader, "IsDeleted")
                            };

                            // Fetch the likes for this post using the likeRepository
                            post.Likes = _likeRepository.GetByPostId(post.Id);

                            // Calculate the like count
                            post.LikeCount = post.Likes.Count;

                            posts.Add(post);
                        }
                        return posts;
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
                    INSERT INTO [Post] (Content, CreateDate, UserProfileId, ParentId, IsDeleted)   
                    OUTPUT INSERTED.ID   
                    VALUES (@Content, @CreateDate, @UserProfileId, @ParentId, @IsDeleted)
                    ";

                    DbUtils.AddParameter(cmd, "@Content", post.Content);
                    DbUtils.AddParameter(cmd, "@CreateDate", post.CreateDate);
                    DbUtils.AddParameter(cmd, "@UserProfileId", post.UserProfileId);
                    DbUtils.AddParameter(cmd, "@ParentId", post.ParentId);
                    DbUtils.AddParameter(cmd, "@IsDeleted", post.IsDeleted);

                    post.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
        public void SoftDelete(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    UPDATE [Post] 
                    SET IsDeleted = 1
                    WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
