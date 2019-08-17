using System.Threading.Tasks;
using ChatApplication.WebApi.Hubs.Interfaces;
using Microsoft.AspNetCore.SignalR;

namespace ChatApplication.WebApi.Hubs
{
    public class ChatHub : Hub<IChatHub>
    {

    }
}