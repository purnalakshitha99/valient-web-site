import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface DemoSlide {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  phobia: 'aerophobia' | 'arachnophobia' | 'cynophobia' | 'claustrophobia';
}

const demoSlides: DemoSlide[] = [
  {
    id: 'aero-1',
    title: 'Skyscraper Scenario',
    description: 'VR environment simulating progressively higher floors of a skyscraper with balconies and glass floors.',
    imageUrl: 'https://images.pexels.com/photos/442579/pexels-photo-442579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    phobia: 'aerophobia'
  },
  {
    id: 'aero-2',
    title: 'Mountain Bridge',
    description: 'Virtual suspension bridge crossing a mountain chasm, with adjustable height and stability settings.',
    imageUrl: 'https://images.pexels.com/photos/5388731/pexels-photo-5388731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    phobia: 'aerophobia'
  },
  {
    id: 'spider-1',
    title: 'AR Spider Encounters',
    description: 'Augmented reality application that introduces virtual spiders into the real environment, with controllable size and behavior.',
    imageUrl: 'https://images.pexels.com/photos/1209536/pexels-photo-1209536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    phobia: 'arachnophobia'
  },
  {
    id: 'spider-2',
    title: 'Web Exploration',
    description: 'VR environment allowing patients to explore spider habitats at their own pace, with educational components.',
    imageUrl: 'https://images.pexels.com/photos/989941/pexels-photo-989941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    phobia: 'arachnophobia'
  },
  {
    id: 'dog-1',
    title: 'Virtual Dog Park',
    description: 'Immersive environment with gradually increasing numbers of dogs, featuring realistic behaviors and sounds.',
    imageUrl: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    phobia: 'cynophobia'
  },
  {
    id: 'dog-2',
    title: 'Controlled Dog Interactions',
    description: 'One-on-one scenarios with virtual dogs, allowing users to practice approaching and interacting safely.',
    imageUrl: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    phobia: 'cynophobia'
  },
  {
    id: 'claustro-1',
    title: 'Elevator Simulation',
    description: 'Virtual elevator with adjustable crowding levels and emergency stop scenarios for controlled exposure.',
    imageUrl: 'https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    phobia: 'claustrophobia'
  },
  {
    id: 'claustro-2',
    title: 'Confined Space Navigation',
    description: 'Series of increasingly narrow corridors and spaces with gamified objectives to encourage progression.',
    imageUrl: 'https://images.pexels.com/photos/1687831/pexels-photo-1687831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    phobia: 'claustrophobia'
  }
];

const ProjectDemo: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activePhobia, setActivePhobia] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  
  const filteredSlides = activePhobia 
    ? demoSlides.filter(slide => slide.phobia === activePhobia) 
    : demoSlides;
    
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredSlides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredSlides.length) % filteredSlides.length);
  };
  
  const openModal = (imageUrl: string) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const filterByPhobia = (phobia: string | null) => {
    setActivePhobia(phobia);
    setCurrentSlide(0);
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">VR/AR Environments</h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button 
              onClick={() => filterByPhobia(null)} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activePhobia === null 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              All Environments
            </button>
            <button 
              onClick={() => filterByPhobia('aerophobia')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activePhobia === 'aerophobia' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Aerophobia
            </button>
            <button 
              onClick={() => filterByPhobia('arachnophobia')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activePhobia === 'arachnophobia' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Arachnophobia
            </button>
            <button 
              onClick={() => filterByPhobia('cynophobia')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activePhobia === 'cynophobia' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Cynophobia
            </button>
            <button 
              onClick={() => filterByPhobia('claustrophobia')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activePhobia === 'claustrophobia' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Claustrophobia
            </button>
          </div>
          
          {/* Slider */}
          <div className="relative bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative h-96">
              <img 
                src={filteredSlides[currentSlide].imageUrl} 
                alt={filteredSlides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{filteredSlides[currentSlide].title}</h3>
                  <p className="text-gray-200">{filteredSlides[currentSlide].description}</p>
                </div>
              </div>
              
              <button 
                onClick={() => openModal(filteredSlides[currentSlide].imageUrl)}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                aria-label="Expand image"
              >
                <Maximize2 size={20} />
              </button>
            </div>
            
            <div className="flex justify-between p-4">
              <button 
                onClick={prevSlide} 
                className="p-2 rounded-full bg-gray-200 text-gray-800 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex items-center">
                <span className="text-sm text-gray-600">
                  {currentSlide + 1} / {filteredSlides.length}
                </span>
              </div>
              
              <button 
                onClick={nextSlide} 
                className="p-2 rounded-full bg-gray-200 text-gray-800 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          {/* Thumbnails */}
          <div className="mt-6 grid grid-cols-4 gap-3">
            {filteredSlides.map((slide, index) => (
              <button 
                key={slide.id} 
                onClick={() => setCurrentSlide(index)}
                className={`rounded-lg overflow-hidden border-2 transition-all ${
                  currentSlide === index 
                    ? 'border-primary-600 opacity-100 transform scale-105' 
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img 
                  src={slide.imageUrl} 
                  alt={slide.title}
                  className="w-full h-16 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img 
              src={modalImage} 
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectDemo;