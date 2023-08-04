using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Postr.Repositories;

namespace Postr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TagController : ControllerBase
    {
        private readonly ITagRepository _tagRepository;

        public TagController(ITagRepository tagRepository)
        {
            _tagRepository = tagRepository;
        }

        [HttpGet]
        public IActionResult GetAllTags()
        {
            var tags = _tagRepository.GetAll();
            return Ok(tags);
        }
    }
}