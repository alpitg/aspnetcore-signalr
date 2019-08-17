using System.Threading.Tasks;
using ChatApplication.WebApi.Hubs;
using ChatApplication.WebApi.Hubs.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace ChatApplication.WebApi.Controllers
{

    [Route("api/[controller]")]
    public class ChatMessagingController : Controller
    {
        private readonly IHubContext<ChatHub, IChatHub> _hubContext;

        public ChatMessagingController(IHubContext<ChatHub, IChatHub> hubContext)
        {
            _hubContext = hubContext;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetMessages()
        {
            var data = new { StatusCode = 200, Message = "Success" };

            // Client with "ReceiveMessage" on-listener will get the message 
            await _hubContext.Clients.All.ReceiveMessage(data);
            
            return Ok(data);
        }
    }
}