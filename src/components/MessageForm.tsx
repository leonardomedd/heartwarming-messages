
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const MessageForm = () => {
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Your love message has been shared!",
    });
    setMessage("");
    setRecipient("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
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
