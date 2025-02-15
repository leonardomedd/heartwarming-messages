
import { Heart } from "lucide-react";

export type LoveMessage = {
  id: number;
  message: string;
  from: string;
  to: string;
};

const initialMessages: LoveMessage[] = [
  {
    id: 1,
    message: "Every moment with you is like a dream come true. You make my heart smile.",
    from: "John",
    to: "Sarah",
  },
  {
    id: 2,
    message: "You are my sunshine on cloudy days, my shelter in the storm, my everything.",
    from: "Michael",
    to: "Emily",
  },
  {
    id: 3,
    message: "In your eyes, I found my home. In your heart, I found my peace.",
    from: "David",
    to: "Lisa",
  },
  {
    id: 4,
    message: "Your love is the strength that keeps me going, the light that guides my way.",
    from: "Robert",
    to: "Emma",
  },
  {
    id: 5,
    message: "Every love story is beautiful, but ours is my favorite.",
    from: "William",
    to: "Sophie",
  },
  {
    id: 6,
    message: "You're not just my love, you're my best friend and my soulmate.",
    from: "James",
    to: "Olivia",
  }
];

let messages = [...initialMessages];

export const addMessage = (message: Omit<LoveMessage, "id">) => {
  const newMessage = {
    ...message,
    id: messages.length + 1,
  };
  messages = [newMessage, ...messages];
  return newMessage;
};

export const MessageGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {messages.map((message) => (
        <div
          key={message.id}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-love-100"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-500">To: {message.to}</p>
              <p className="text-sm text-gray-500">From: {message.from}</p>
            </div>
            <Heart className="w-5 h-5 text-love-500" />
          </div>
          <p className="text-gray-700 font-medium italic">{message.message}</p>
        </div>
      ))}
    </div>
  );
};
