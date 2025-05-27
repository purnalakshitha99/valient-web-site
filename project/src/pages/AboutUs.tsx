import React from 'react';
import { Mail, Linkedin, Github, User, BookOpen } from 'lucide-react';
import charindu from '../img/charindu.jpeg';
import dinidu from '../img/dinidu.jpeg';
import ruhan from '../img/ruhan.jpeg';
import sayuru from '../img/sayuru.jpeg';
import didula from '../img/didula.jpg'; 

interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  email: string;
  specialization: string;
  linkedin?: string;
  github?: string;
  bio: string;
}

const supervisor = {
  name: "Dr. Didula Chamara Thanaweera Arachchi",
  role: "Research Supervisor",
  title: "Lecturer",
  department: "Faculty of Computing, SLIIT",
  education: "M.Sc. in IT, Specialized in Multimedia (UCSC)",
  email: "didula.c@sliit.lk",
  photo: didula // Correct to .jpeg or .jpg if needed
};

const teamMembers: TeamMember[] = [
  {
    id: 'member1',
    name: 'Team Member 1',
    role: 'Team Lead',
    photo: charindu,
    email: 'member1@example.com',
    specialization: 'VR/AR Development',
    linkedin: 'https://linkedin.com/',
    github: 'https://github.com/',
    bio: 'Specializing in VR/AR development with focus on therapeutic applications.'
  },
  {
    id: 'member2',
    name: 'Team Member 2',
    role: 'Technical Lead',
    photo: dinidu,
    email: 'member2@example.com',
    specialization: 'Unity Development',
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
    bio: 'Experienced in Unity development and C# programming.'
  },
  {
    id: 'member3',
    name: 'Team Member 3',
    role: 'Research Coordinator',
    photo: ruhan,
    email: 'member3@example.com',
    specialization: 'Research Methodology',
    linkedin: 'https://linkedin.com/',
    bio: 'Focused on research methodology and data analysis.'
  },
  {
    id: 'member4',
    name: 'Team Member 4',
    role: 'UX Designer',
    photo: didula,
    email: 'member4@example.com',
    specialization: 'User Experience Design',
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
    bio: 'Specializing in user experience design for therapeutic applications.'
  },
    {
    id: 'member4',
    name: 'Team Member 4',
    role: 'UX Designer',
    photo: sayuru,
    email: 'member4@example.com',
    specialization: 'User Experience Design',
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
    bio: 'Specializing in user experience design for therapeutic applications.'
  }
];

const AboutUs: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Our Team</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Meet the researchers, developers, and advisors behind Project 24-25J-042.
          </p>
        </div>
      </div>

      {/* Team Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
              <div className="md:flex">
                <div className="md:w-1/2 relative">
                  <img
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Research team meeting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h2 className="text-white text-2xl font-bold">Interdisciplinary Collaboration</h2>
                      <p className="text-primary-100">Bringing together expertise in psychology, technology, and design</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">Our Research Team</h2>
                  <p className="text-gray-700 mb-4">
                    Our team combines expertise from multiple disciplines to create effective VR/AR therapeutic experiences. With backgrounds in clinical psychology, computer science, UX design, and 3D art, we approach phobia treatment from a holistic perspective.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Based at the Virtual Reality Therapy Lab within the Department of Computer Science, our team collaborates with the Department of Psychology to ensure that our technological solutions are grounded in established therapeutic practices.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">Virtual Reality</span>
                    <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">Augmented Reality</span>
                    <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">Exposure Therapy</span>
                    <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">Human-Computer Interaction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Supervisor Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center">Research Supervisor</h2>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={supervisor.photo}
                      alt={supervisor.name}
                      className="w-full h-full object-cover" // You might want to consider `object-contain` here too if needed
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-2xl font-bold mb-2">{supervisor.name}</h3>
                    <p className="text-primary-600 font-medium mb-2">{supervisor.role}</p>
                    <p className="text-gray-700 mb-2">{supervisor.title}</p>
                    <p className="text-gray-700 mb-2">{supervisor.department}</p>
                    <p className="text-gray-700 mb-4">{supervisor.education}</p>
                    <div className="flex items-center">
                      <Mail size={16} className="text-gray-500 mr-2" />
                      <a href={`mailto:${supervisor.email}`} className="text-gray-700 hover:text-primary-600 transition-colors">
                        {supervisor.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members Grid */}
            <h2 className="text-3xl font-bold mb-12 text-center">Research Team Members</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden"> {/* Container for the image, height is 192px */}
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-contain transition-transform duration-500 hover:scale-105" // <--- MODIFIED HERE from object-cover to object-contain
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-primary-600 font-medium mb-4">{member.role}</p>

        <div className="flex items-center mb-3">
          <User size={16} className="text-gray-500 mr-2" />
          <p className="text-gray-700 text-sm">{member.specialization}</p>
        </div>

        <div className="flex items-center mb-4">
          <Mail size={16} className="text-gray-500 mr-2" />
          <a href={`mailto:${member.email}`} className="text-gray-700 text-sm hover:text-primary-600 transition-colors">
            {member.email}
          </a>
        </div>

        <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

        <div className="flex space-x-3">
          {member.linkedin && (
            <a
              href={member.linkedin}
              className="text-gray-600 hover:text-primary-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
            </a>
          )}

          {member.github && (
            <a
              href={member.github}
              className="text-gray-600 hover:text-primary-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
            </a>
          )}

          <a
            href="#"
            className="text-gray-600 hover:text-primary-600 transition-colors flex items-center"
          >
            <BookOpen size={18} className="mr-1" />
            <span className="text-xs">Publications</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;