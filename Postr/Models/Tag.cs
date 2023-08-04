using System.Collections.Generic;

namespace Postr.Models
{
    public class Tag
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<PostTag> PostTags { get; set; }
    }
}
