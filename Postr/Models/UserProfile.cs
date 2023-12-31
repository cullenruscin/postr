﻿using Microsoft.SqlServer.Server;
using System;
using System.ComponentModel.DataAnnotations;

namespace Postr.Models
{
    public class UserProfile
    {
        public int Id { get; set; }

        [StringLength(28, MinimumLength = 28)]
        public string FirebaseUserId { get; set; }

        [Required]
        [MaxLength(48)]
        public string FirstName { get; set; }

        [Required]
        [MaxLength(48)]
        public string LastName { get; set; }

        [Required]
        [MaxLength(32)]
        public string DisplayName { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [MaxLength(256)]
        public string Email { get; set; }

        public DateTime CreateDate { get; set; }

        [Required]
        public int UserTypeId { get; set; }
        public UserType UserType { get; set; }

        [Required]
        [MaxLength(256)]
        public string DisplayPicture { get; set; }

        [MaxLength(256)]
        public string Bio { get; set; }

        public string FullName
        {
            get
            {
                return $"{FirstName} {LastName}";
            }
        }
    }
}
