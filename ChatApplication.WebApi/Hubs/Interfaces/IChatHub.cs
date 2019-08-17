using System.Threading.Tasks;

namespace ChatApplication.WebApi.Hubs.Interfaces
{
    public interface IChatHub
    {
        // NOTE: All methods defined here will ack as listener on client side 
        //       ex. this.hubConnection.on('ReceiveMessage', data => { })
        Task ReceiveMessage(object data);
        Task SendMessageToAll(string user, string message);
    }
}