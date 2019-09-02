using System;

namespace ChatApplication.WebApi.Models
{
    public class MessageModel
    {
        public int MessageId { get; set; }
        public string TextMessage { get; set; }
        public DateTime Date { get; set; }
    }
}