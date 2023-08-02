namespace Postr.Models
{
    public class Like
    {
        public int Id { get; set; }
        public int PostId { get; set; } 
        public int UserProfileId { get; set; }
    }
}
