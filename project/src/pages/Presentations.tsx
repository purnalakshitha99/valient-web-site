import React, { useState } from 'react';
import { Presentation, ChevronDown, ChevronUp, Eye, Download, Calendar, FileText } from 'lucide-react';

interface PresentationItem {
  id: string;
  title: string;
  date: string;
  description: string;
  slides: number;
  presenters: string[];
  viewUrl: string;
  downloadUrl: string;
  thumbnail: string;
}

const presentations: PresentationItem[] = [
  {
    id: 'proposal-presentation',
    title: 'Project Proposal Presentation',
    date: 'September 15, 2024',
    description: 'Initial presentation outlining research questions, objectives, and methodology.',
    slides: 24,
     presenters: ['All Team Members'],
    viewUrl: '#',
    downloadUrl: 'https://mysliit.sharepoint.com/:b:/s/CDAPSubmissionCloud/ERWcqcP29BVKn129-LMPP0IBzMgUrfzyLJUwYvd92pQ-_w?e=2xRgKn',
    thumbnail: 'https://cdn-icons-png.freepik.com/256/2838/2838127.png?ga=GA1.1.1912292379.1745836464&semt=ais_hybrid'
  },
  {
    id: 'progress-presentation-1',
    title: 'Progress Presentation 1',
    date: 'November 20, 2024',
    description: 'First progress report covering initial development and preliminary findings.',
    slides: 28,
    presenters: ['All Team Members'],
    viewUrl: '#',
    downloadUrl: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/En5lzpSSDvpBkhPpdz1CkS0B1-4tVzJ_QR7U-vqVk-Adxg?e=B9HQir',
    thumbnail: 'https://cdn-icons-png.freepik.com/256/2838/2838127.png?ga=GA1.1.1912292379.1745836464&semt=ais_hybrid'
  },
  {
    id: 'progress-presentation-2',
    title: 'Progress Presentation 2',
    date: 'February 10, 2025',
    description: 'Second progress report with focus on completed environments and preliminary testing results.',
    slides: 32,
     presenters: ['All Team Members'],
    viewUrl: '#',
    downloadUrl: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/EnHdrh8eEtpFjnNNKiLUWcoB0eyJaun0HpdeKtMwmlNJew?e=ceGbNA',
    thumbnail: 'https://cdn-icons-png.freepik.com/256/2838/2838127.png?ga=GA1.1.1912292379.1745836464&semt=ais_hybrid'
  },
  {
    id: 'final-presentation',
    title: 'Final Presentation',
    date: 'April 25, 2025',
    description: 'Final project presentation showcasing complete research findings and outcomes.',
    slides: 40,
    presenters: ['All Team Members'],
    viewUrl: '#',
    downloadUrl: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/EgwB-P1JQydGks4uJm4q4OsB3xmSwcGcG34fpNGjia944A?e=MagSdh',
    thumbnail: 'https://cdn-icons-png.freepik.com/256/2838/2838127.png?ga=GA1.1.1912292379.1745836464&semt=ais_hybrid'
  }
];

const Presentations: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  const toggleExpanded = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };
  
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Project Presentations</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Access presentation slides, notes, and research presentations.
          </p>
        </div>
      </div>
      
      {/* Presentations List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center mb-12">
              <Presentation className="text-primary-600 mr-3" size={28} />
              <h2 className="text-3xl font-bold">Research Presentations</h2>
            </div>
            
            <div className="space-y-6">
              {presentations.map((presentation) => (
                <div key={presentation.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 h-48 md:h-auto">
                      <img 
                        src={presentation.thumbnail} 
                        alt={presentation.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-6 md:w-2/3">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold mb-2">{presentation.title}</h3>
                        <button 
                          onClick={() => toggleExpanded(presentation.id)}
                          className="text-gray-500 hover:text-primary-600 transition-colors"
                        >
                          {expandedId === presentation.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-4">
                        <Calendar size={16} className="mr-1" />
                        <span className="text-sm">{presentation.date}</span>
                        <span className="mx-2">•</span>
                        <FileText size={16} className="mr-1" />
                        <span className="text-sm">{presentation.slides} slides</span>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{presentation.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {presentation.presenters.map((presenter, index) => (
                          <span 
                            key={index}
                            className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                          >
                            {presenter}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-3">
                        <a 
                          href={presentation.viewUrl} 
                          className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          <Eye size={16} className="mr-1" />
                          <span className="text-sm font-medium">View Online</span>
                        </a>
                        
                        <a 
                          href={presentation.downloadUrl} 
                          className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          <Download size={16} className="mr-1" />
                          <span className="text-sm font-medium">Download</span>
                        </a>
                      </div>
                      
                      {expandedId === presentation.id && (
                        <div className="mt-6 pt-6 border-t border-gray-200 animate-[slideDown_0.3s_ease-out]">
                          <h4 className="font-bold mb-3">Presentation Details</h4>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700 mb-3">
                              This presentation covers the key aspects of our research, including methodology, experimental design, and preliminary findings. It was presented to the research committee and includes detailed slides on our approach to VR/AR therapy implementation.
                            </p>
                            <p className="text-gray-700">
                              The presentation is available in both PowerPoint and PDF formats. For the best viewing experience, we recommend using the online viewer which preserves all animations and interactive elements.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      
      
      
    </div>
  );
};

export default Presentations;