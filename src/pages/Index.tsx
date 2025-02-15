
import { HeartAnimation } from "@/components/HeartAnimation";
import { MessageForm } from "@/components/MessageForm";
import { MessageGallery } from "@/components/MessageGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-love-50 to-love-100">
      {/* Hero Section with enhanced background */}
      <section className="relative py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-love-100/50 via-white/80 to-love-100/50" />
        <div className="container px-4 mx-auto relative z-10">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-down">
            Share Your Heart
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-up">
            Express your love with beautiful, heartfelt messages that touch the soul
          </p>
          <div className="flex justify-center">
            <HeartAnimation />
          </div>
        </div>
      </section>

      {/* Message Form Section with soft gradient */}
      <section className="py-16 bg-gradient-to-b from-white via-white to-love-50/30">
        <div className="container px-4 mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
            Send a Love Message
          </h2>
          <MessageForm />
        </div>
      </section>

      {/* Message Gallery Section with diagonal gradient */}
      <section className="py-16 bg-gradient-to-br from-love-50/50 via-white to-love-50/50">
        <div className="container px-4 mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
            Love Messages Gallery
          </h2>
          <MessageGallery />
        </div>
      </section>

      {/* About Section with subtle pattern */}
      <section className="py-16 relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-t from-love-50/30 to-white/50" />
        <div className="container px-4 mx-auto text-center max-w-3xl relative z-10">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">
            About Us
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We believe in the power of words to express love, kindle romance, and
            strengthen bonds. Our platform provides a beautiful space for sharing
            heartfelt messages with those who matter most.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether it's Valentine's Day or any other special moment, let your love
            shine through carefully crafted words that touch the heart.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
