using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Security.Claims;
using Postr.Models;
using Postr.Repositories;
using System.Collections.Generic;

namespace Postr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;
        private readonly IUserProfileRepository _userProfileRepository;
        private readonly ITagRepository _tagRepository;
        public PostController(IPostRepository postRepository, IUserProfileRepository userProfileRepository, ITagRepository tagRepository)
        {
            _postRepository = postRepository;
            _userProfileRepository = userProfileRepository;
            _tagRepository = tagRepository;
        }

        [HttpGet]
        public IActionResult GetPosts()
        {
            return Ok(_postRepository.GetAll());
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

        [HttpGet("parent/{id}")]
        public IActionResult GetPostsByParentId(int id)
        {
            return Ok(_postRepository.GetByParentId(id));
        }

        [HttpGet("user/{id}")]
        public IActionResult GetAllUserPosts(int id)
        {
            return Ok(_postRepository.GetByUserProfileId(id));
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

        [HttpDelete("{id}")]
        public IActionResult DeletePost(int id)
        {
            var post = _postRepository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }

            _postRepository.SoftDelete(id);

            return NoContent();
        }

        [HttpPost("{id}/tags")]
        public IActionResult AddTagsToPost(int id, List<int> tagIds)
        {
            var post = _postRepository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }

            _postRepository.AddTagsToPost(id, tagIds);

            return Ok();
        }

        [HttpDelete("{id}/tags")]
        public IActionResult RemoveTagsFromPost(int id, List<int> tagIds)
        {
            var post = _postRepository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }

            _postRepository.RemoveTagsFromPost(id, tagIds);

            return Ok();
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}