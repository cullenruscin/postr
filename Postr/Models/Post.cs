using System;
using System.Collections.Generic;
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
        
        public List<Like> Likes { get; set; }

        public int LikeCount { get; set; }

        public int? ParentId { get; set; }

        public Post ParentPost { get; set; }

        public bool IsDeleted { get; set; }
        public List<Tag> Tags { get; set; }
    }
}
