using System.ComponentModel.DataAnnotations;

namespace Postr.Models
{
    public class UserType
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(20)]
        public string Name { get; set; }

        public static int ADMIN_ID => 1;
        public static int USER_ID => 2;
    }
}
