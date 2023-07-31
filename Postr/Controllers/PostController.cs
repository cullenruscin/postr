using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Security.Claims;
using Postr.Models;
using Postr.Repositories;

namespace Postr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;
        private readonly IUserProfileRepository _userProfileRepository;
        public PostController(IPostRepository postRepository, IUserProfileRepository userProfileRepository)
        {
            _postRepository = postRepository;
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet]
        public IActionResult GetAllPostsResult()
        {
            return Ok(_postRepository.GetAll());
        }

        [HttpGet("user/{id}")]
        public IActionResult GetAllUserPostsResult(int id)
        {
            return Ok(_postRepository.GetByUserProfileId(id));
        }

        [HttpGet("{id}")]
        public IActionResult GetPostById(int id)
        {
            var post = _postRepository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [HttpPost]
        public IActionResult Post(Post post)
        {
            UserProfile user = GetCurrentUserProfile();

            post.CreateDate = DateTime.Now;
            post.UserProfileId = user.Id;
            _postRepository.Add(post);
            return CreatedAtAction(
                nameof(GetPostById), new { post.Id }, post);
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}