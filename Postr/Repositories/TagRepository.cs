using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Postr.Models;
using Postr.Utils;
using System.Collections.Generic;

namespace Postr.Repositories
{
    public class TagRepository : BaseRepository, ITagRepository
    {
        public TagRepository(IConfiguration configuration) : base(configuration)
        {
        }

        public List<Tag> GetAll()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, Name
                        FROM Tag";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var tags = new List<Tag>();
                        while (reader.Read())
                        {
                            var tag = new Tag()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name")
                            };
                            tags.Add(tag);
                        }
                        return tags;
                    }
                }
            }
        }

        public Tag GetById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, Name
                        FROM Tag
                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            var tag = new Tag()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name")
                            };
                            return tag;
                        }
                        return null;
                    }
                }
            }
        }

        public Tag GetByName(string name)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, Name
                        FROM Tag
                        WHERE Name = @Name";

                    DbUtils.AddParameter(cmd, "@Name", name);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            var tag = new Tag()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name")
                            };
                            return tag;
                        }
                        return null;
                    }
                }
            }
        }

        public void Add(Tag tag)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Tag (Name)
                        VALUES (@Name)
                        SELECT SCOPE_IDENTITY()";

                    DbUtils.AddParameter(cmd, "@Name", tag.Name);

                    tag.Id = (int)(decimal)cmd.ExecuteScalar();
                }
            }
        }
    }
}