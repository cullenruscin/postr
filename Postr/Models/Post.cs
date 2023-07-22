using System;
using System.ComponentModel.DataAnnotations;

namespace Postr.Models
{
    public class Post
    {
        public int Id { get; set; } 

        public int UserId { get; set; }

        [MaxLength(256)]
        public string Content { get; set; }

        public DateTime CreateDate { get; set; }
    }
}
