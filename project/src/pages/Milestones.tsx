import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, Check, Clock } from 'lucide-react';

interface Milestone {
  id: string;
  title: string;
  date: string;
  status: 'completed' | 'upcoming' | 'in-progress';
  description: string;
  marks?: {
    obtained?: number;
    total: number;
  };
  details: string[];
}

const milestones: Milestone[] = [
  {
    id: 'proposal',
    title: 'Project Proposal',
    date: 'September 15, 2024',
    status: 'completed',
    description: 'Initial project proposal including problem statement, objectives, and methodology.',
   
    details: [
      'Defined research questions and objectives',
      'Conducted preliminary literature review',
      'Outlined methodology and experimental design',
      'Identified required technologies and resources',
      'Established timeline and milestones'
    ]
  },
  {
    id: 'progress1',
    title: 'Progress Presentation 1',
    date: 'November 20, 2024',
    status: 'completed',
    description: 'First progress report focusing on literature review and initial VR environment development.',
   
    details: [
      'Comprehensive literature review completion',
      'Development of first VR environment (heights scenario)',
      'Initial user interface design',
      'Preliminary testing protocol establishment',
      'Progress on AR component development'
    ]
  },
  {
    id: 'progress2',
    title: 'Progress Presentation 2',
    date: 'February 10, 2025',
    status: 'completed',
    description: 'Second progress report with focus on completed environments and preliminary testing results.',
   
    details: [
      'Completion of all VR/AR environments',
      'Integration of physiological monitoring',
      'Preliminary testing results from first participant group',
      'Refinements based on initial feedback',
      'Data collection methodology validation'
    ]
  },
  {
    id: 'final',
    title: 'Final Assessment & Viva',
    date: 'May 28, 2025',
    status: 'upcoming',
    description: 'Final project presentation, demonstration, and oral defense.',
   
    details: [
      'Comprehensive results and analysis',
      'Live demonstration of VR/AR environments',
      'Discussion of challenges and solutions',
      'Presentation of future work and implications',
      'Submission of final report and all deliverables'
    ]
  }
];

const Milestones: React.FC = () => {
  const [openMilestone, setOpenMilestone] = useState<string | null>('proposal');
  
  const toggleMilestone = (id: string) => {
    if (openMilestone === id) {
      setOpenMilestone(null);
    } else {
      setOpenMilestone(id);
    }
  };
  
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Project Milestones</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Our research project timeline, deliverables, and assessment stages.
          </p>
        </div>
      </div>
      
      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-12">
              <Calendar className="text-primary-600 mr-3" size={28} />
              <h2 className="text-3xl font-bold">Project Timeline</h2>
            </div>
            
            <div className="relative pl-8 border-l-2 border-primary-200">
              {milestones.map((milestone) => (
                <div key={milestone.id} className="mb-12 last:mb-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                  
                  <div 
                    className={`p-6 rounded-lg shadow-md border-l-4 ${
                      milestone.status === 'completed' 
                        ? 'border-success-500 bg-white' 
                        : milestone.status === 'in-progress'
                          ? 'border-primary-500 bg-white' 
                          : 'border-gray-300 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start justify-between cursor-pointer" onClick={() => toggleMilestone(milestone.id)}>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <div className="flex items-center text-gray-600 mb-3">
                          <Clock size={16} className="mr-2" />
                          <span>{milestone.date}</span>
                        </div>
                        <div className="flex items-center">
                          <StatusBadge status={milestone.status} />
                          {milestone.marks?.obtained && (
                            <div className="ml-3 flex items-center text-success-700 bg-success-50 py-1 px-3 rounded-full text-sm">
                              <span>{milestone.marks.obtained}/{milestone.marks.total} marks</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <button className="text-gray-500 p-1">
                        {openMilestone === milestone.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>
                    
                    {openMilestone === milestone.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200 animate-[slideDown_0.3s_ease-out]">
                        <p className="mb-4 text-gray-700">{milestone.description}</p>
                        <h4 className="font-semibold mb-2">Key Deliverables:</h4>
                        <ul className="space-y-2">
                          {milestone.details.map((detail, index) => (
                            <li key={index} className="flex items-start">
                              <Check size={16} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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

interface StatusBadgeProps {
  status: 'completed' | 'upcoming' | 'in-progress';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let bgColor = '';
  let textColor = '';
  let label = '';
  
  switch (status) {
    case 'completed':
      bgColor = 'bg-success-100';
      textColor = 'text-success-800';
      label = 'Completed';
      break;
    case 'in-progress':
      bgColor = 'bg-primary-100';
      textColor = 'text-primary-800';
      label = 'In Progress';
      break;
    case 'upcoming':
      bgColor = 'bg-gray-100';
      textColor = 'text-gray-800';
      label = 'Upcoming';
      break;
  }
  
  return (
    <span className={`${bgColor} ${textColor} py-1 px-3 rounded-full text-sm font-medium`}>
      {label}
    </span>
  );
};

export default Milestones;