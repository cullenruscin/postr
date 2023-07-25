using System;
using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Postr.Models;
using Postr.Utils;


namespace Postr.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(IConfiguration configuration) : base(configuration) { }

        public List<User> GetAllUsers()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, FirebaseUserId, Username, Email, CreateDate
                                        FROM [User]";

                    using (SqlDataReader reader = cmd.ExecuteReader()) 
                    { 
                        var users = new List<User>();
                        while (reader.Read())
                        {
                            users.Add(new User()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                                Username = DbUtils.GetString(reader, "Username"),
                                Email = DbUtils.GetString(reader, "Email"),
                                CreateDate = DbUtils.GetDateTime(reader, "CreateDate")
                            });
                        }
                        return users;
                    }
                }
            }
        }
    }
}
