using ChatApplication.WebApi.Hubs.Interfaces;
using Microsoft.AspNetCore.SignalR;

namespace ChatApplication.WebApi.Hubs
{
    public class BroadcastHub : Hub<IBroadcastHub>
    {
        // TODO: We will use this class in our controller for to broadcast the message 
        //       when Add/Update/Delete functionality is called. 
    }
}