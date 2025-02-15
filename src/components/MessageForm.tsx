
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { addMessage } from "./MessageGallery";

export const MessageForm = () => {
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");
  const [sender, setSender] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    addMessage({
      message,
      to: recipient,
      from: sender,
    });

    toast({
      title: "Message sent",
      description: "Your love message has been shared!",
    });

    setMessage("");
    setRecipient("");
    setSender("");

    // Force re-render of the page to show the new message
    window.location.reload();
  };

  return (
    <form id="message-form" onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Your Name</label>
        <Input
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          placeholder="Enter your name"
          className="w-full"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Recipient's Name</label>
        <Input
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Enter your loved one's name"
          className="w-full"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Your Message</label>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your heartfelt message here..."
          className="w-full min-h-[150px]"
          required
        />
      </div>
      <Button type="submit" className="w-full bg-love-500 hover:bg-love-600">
        Send Love
      </Button>
    </form>
  );
};
