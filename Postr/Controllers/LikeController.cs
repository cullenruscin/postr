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
    public class LikeController : ControllerBase
    {
        private readonly ILikeRepository _likeRepository;
        public LikeController(ILikeRepository likeRepository)
        {
            _likeRepository = likeRepository;
        }

        [HttpPost]
        public IActionResult CreateLikeResult(Like like)
        {
            if (like == null)
            {
                return BadRequest("Invalid Like data.");
            }

            _likeRepository.Create(like);

            return Ok(new { message = "Like created successfully." });
        }

        [HttpDelete("{postId}/{userProfileId}")]
        public IActionResult DeleteLikeResult(int postId, int userProfileId)
        {
            var existingLike = _likeRepository.GetByPostIdAndUserProfileId(postId, userProfileId);

            if (existingLike == null)
            {
                return NotFound(new { message = "Like not found." });
            }

            _likeRepository.Delete(existingLike.Id);

            return Ok(new { message = "Like deleted successfully." });
        }
    }
}