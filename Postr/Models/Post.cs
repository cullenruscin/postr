using System;
using System.ComponentModel.DataAnnotations;

namespace Postr.Models
{
    public class Post
    {
        public int Id { get; set; } 

        [MaxLength(256)]
        public string Content { get; set; }

        public DateTime CreateDate { get; set; }

        public int UserProfileId { get; set; }

        public UserProfile UserProfile { get; set; }  
    }
}
