import React from 'react';
import { Monitor, Database, Code, Layers, User, Book, Search, Target } from 'lucide-react';

const Domain: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Research Domain</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Exploring the intersection of virtual/augmented reality technology and cognitive behavioral therapy for phobia treatment.
          </p>
        </div>
      </div>
      
      {/* Literature Survey */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start mb-8">
              <Book className="text-primary-600 mr-4 flex-shrink-0" size={32} />
              <div>
                <h2 className="text-3xl font-bold mb-6">Literature Survey</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our research builds upon decades of work in exposure therapy and the emerging field of therapeutic applications for immersive technologies. Key findings from our literature review include:
                </p>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">Key Findings</h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <span className="bg-primary-100 text-primary-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <p>
                        <span className="font-semibold">Efficacy of Exposure Therapy:</span> Multiple meta-analyses have confirmed that exposure therapy is among the most effective treatments for specific phobias, with success rates between 60-90% depending on the phobia type and treatment protocol.
                      </p>
                    </li>
                    <li className="flex">
                      <span className="bg-primary-100 text-primary-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <p>
                        <span className="font-semibold">VR in Therapy:</span> Virtual reality exposure therapy (VRET) has shown comparable results to in-vivo exposure in several controlled studies, with the added benefits of increased safety, control, and patient comfort.
                      </p>
                    </li>
                    <li className="flex">
                      <span className="bg-primary-100 text-primary-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <p>
                        <span className="font-semibold">AR Applications:</span> Augmented reality applications for phobia treatment are still emerging, with preliminary studies showing promise for specific phobias like arachnophobia.
                      </p>
                    </li>
                    <li className="flex">
                      <span className="bg-primary-100 text-primary-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      <p>
                        <span className="font-semibold">Patient Engagement:</span> Gamification elements in therapeutic VR/AR applications have been shown to increase patient engagement and treatment adherence.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Research Problem */}
            <div className="flex items-start mb-8">
              <Search className="text-primary-600 mr-4 flex-shrink-0" size={32} />
              <div>
                <h2 className="text-3xl font-bold mb-6">Research Problem & Gap</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Despite promising results in VR/AR therapy applications, several significant gaps remain in the literature:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary-800">Identified Gaps</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-error-100 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                          <span className="text-error-600 text-sm">!</span>
                        </div>
                        <p>Limited research on multi-phobia treatment protocols using the same VR/AR platform</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-error-100 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                          <span className="text-error-600 text-sm">!</span>
                        </div>
                        <p>Insufficient exploration of integrated physiological feedback in VR/AR exposure therapy</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-error-100 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                          <span className="text-error-600 text-sm">!</span>
                        </div>
                        <p>Few studies comparing VR and AR efficacy for different phobia types</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary-800">Our Research Questions</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                          <span className="text-primary-600 text-sm">Q</span>
                        </div>
                        <p>How does therapeutic efficacy differ between VR and AR for different phobia types?</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                          <span className="text-primary-600 text-sm">Q</span>
                        </div>
                        <p>Can a unified platform effectively address multiple phobia types?</p>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                          <span className="text-primary-600 text-sm">Q</span>
                        </div>
                        <p>What gamification elements most effectively increase patient engagement and treatment outcomes?</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Objectives */}
            <div className="flex items-start mb-8">
              <Target className="text-primary-600 mr-4 flex-shrink-0" size={32} />
              <div>
                <h2 className="text-3xl font-bold mb-6">Objectives & Methodology</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Primary Objectives</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-primary-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Develop VR/AR environments</p>
                        <p className="text-gray-600">Create immersive, therapeutically sound environments for each phobia type.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Implement gamification elements</p>
                        <p className="text-gray-600">Design engaging, game-based interactions that encourage treatment adherence.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Compare VR vs AR efficacy</p>
                        <p className="text-gray-600">Evaluate which technology provides better outcomes for each phobia type.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Measure physiological responses</p>
                        <p className="text-gray-600">Integrate biometric monitoring to track and adapt to patient stress levels.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Methodology</h3>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <p className="mb-4">Our research employs a mixed-methods approach combining:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        <p>Development of VR/AR environments using Unity and Meta Quest hardware</p>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        <p>Small-scale pilot testing with volunteer participants (n=20 per phobia type)</p>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        <p>Quantitative assessment using standardized anxiety scales (SUDS, BAI)</p>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        <p>Qualitative feedback through semi-structured interviews</p>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        <p>Physiological data collection (heart rate, skin conductance) during exposure sessions</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Technologies */}
            <div className="flex items-start">
              <Code className="text-primary-600 mr-4 flex-shrink-0" size={32} />
              <div>
                <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <TechCard 
                    icon={<Monitor size={24} />}
                    title="Unity"
                    description="Game engine for developing VR/AR environments and interactions"
                  />
                  <TechCard 
                    icon={<Layers size={24} />}
                    title="Blender"
                    description="3D modeling software for creating environmental assets"
                  />
                  <TechCard 
                    icon={<Code size={24} />}
                    title="C#"
                    description="Programming language for Unity-based development"
                  />
                  <TechCard 
                    icon={<Database size={24} />}
                    title="Firebase"
                    description="Backend database for user data and progress tracking"
                  />
                  <TechCard 
                    icon={<User size={24} />}
                    title="Meta Quest"
                    description="VR hardware platform for immersive experiences"
                  />
                  <TechCard 
                    icon={<Monitor size={24} />}
                    title="ARCore/ARKit"
                    description="Augmented reality frameworks for mobile applications"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TechCard: React.FC<TechCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-primary-100 rounded-lg text-primary-600 mr-3">
          {icon}
        </div>
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Domain;