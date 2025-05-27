import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Headphones, Activity, Globe, Boxes } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-secondary-800 opacity-90"></div>
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" 
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Exposure Therapy for Four Different Phobias
            </h1>
            <h2 className="text-primary-100 text-xl md:text-2xl lg:text-3xl mb-8">
              Through Virtual and Augmented Reality Scenarios and Games
            </h2>
            <p className="text-white text-lg md:text-xl mb-8 max-w-2xl">
              Leveraging immersive technologies to create controlled environments for therapeutic exposure, helping patients overcome acrophobia, arachnophobia, cynophobia, and claustrophobia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/domain" className="btn btn-primary">
                Learn More
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/about" className="btn btn-outline border-white text-white hover:bg-white/10">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Project Overview</h2>
            <p className="text-lg text-gray-700">
              Our research explores the efficacy of virtual and augmented reality as tools for exposure therapy, a proven treatment for phobias. By creating controlled, immersive environments, we aim to provide a safe space for patients to confront their fears gradually.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Headphones className="w-12 h-12 text-primary-600" />}
              title="Immersive Exposure"
              description="Gradual exposure to fear-inducing stimuli in a controlled virtual environment."
            />
            <FeatureCard 
              icon={<Activity className="w-12 h-12 text-primary-600" />}
              title="Real-time Monitoring"
              description="Tracking physiological responses during exposure to tailor the treatment."
            />
            <FeatureCard 
              icon={<Globe className="w-12 h-12 text-primary-600" />}
              title="Accessible Therapy"
              description="Making exposure therapy more accessible and less intimidating for patients."
            />
            <FeatureCard 
              icon={<Boxes className="w-12 h-12 text-primary-600" />}
              title="Multimodal Approach"
              description="Combining visual, auditory, and interactive elements for comprehensive treatment."
            />
          </div>
        </div>
      </section>

      {/* Phobias Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Targeted Phobias</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PhobiaCard 
              title="Aerophobia"
              description="Fear of heights, treated through virtual reality scenarios featuring tall buildings, mountains, and bridges."
              imageUrl="https://img.freepik.com/free-photo/woman-feeling-tense-scared-about-airplane-takeoff-being-frightened-about-flying-abroad-travelling-with-international-airways-go-holiday-adventure-commercial-flight_482257-49464.jpg?ga=GA1.1.1912292379.1745836464&semt=ais_hybrid&w=740"
            />
            <PhobiaCard 
              title="Arachnophobia"
              description="Fear of spiders, addressed using augmented reality to gradually introduce spider models into the patient's environment."
              imageUrl="https://img.freepik.com/free-photo/macro-shot-beautiful-spider_181624-32317.jpg?ga=GA1.1.1912292379.1745836464&semt=ais_hybrid&w=740"
            />
            <PhobiaCard 
              title="Cynophobia"
              description="Fear of dogs, treated through virtual scenarios with friendly dogs in various environments like parks and homes."
              imageUrl="https://img.freepik.com/free-photo/dog-lifestyle-care-with-owner_23-2149150791.jpg?ga=GA1.1.1912292379.1745836464&semt=ais_hybrid&w=740"
            />
            <PhobiaCard 
              title="Claustrophobia"
              description="Fear of confined spaces, addressed with virtual reality simulations of elevators, small rooms, and crowded areas."
              imageUrl="https://img.freepik.com/free-photo/horror-scene-domestic-space_23-2151503710.jpg?ga=GA1.1.1912292379.1745836464&semt=ais_hybrid&w=740"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Interested in Our Research?</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Learn more about our methodology, findings, or opportunities for collaboration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/documents" className="btn bg-white text-primary-900 hover:bg-primary-50">
              View Documents
            </Link>
            <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface PhobiaCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const PhobiaCard: React.FC<PhobiaCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className="h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Home;