import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success?: boolean;
    message?: string;
  }>({
    submitted: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // In a real application, you would send the form data to a server here
    // For now, we'll just simulate a successful submission
    
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Your message has been sent. We will contact you soon!'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({ submitted: false });
    }, 5000);
  };
  
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Get in touch with our research team about collaborations, questions, or participation.
          </p>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <ContactCard 
                icon={<Mail className="text-primary-600" size={24} />}
                title="Email Us"
                details={[
                  "it21186042@my.sliit.lk",
                  "it21202018@my.sliit.lk"
                ]}
              />
              <ContactCard 
                icon={<Phone className="text-primary-600" size={24} />}
                title="Call Us"
                details={[
                  "(+94) 70 324 86 86"
                 
                ]}
              />
              <ContactCard 
                icon={<MapPin className="text-primary-600" size={24} />}
                title="Visit Us"
                details={[
                  "Interactive Media Department",
                  "SLIIT, Malabe, Sri Lanka",
                  
                ]}
              />
            </div>
            
            <div className="grid grid-cols-1">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name <span className="text-error-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-error-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="Research Inquiry">Research Inquiry</option>
                      <option value="Participation Interest">Participation Interest</option>
                      <option value="Collaboration Opportunity">Collaboration Opportunity</option>
                      <option value="Media Inquiry">Media Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message <span className="text-error-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  {formStatus.submitted && (
                    <div className={`p-4 rounded-lg ${formStatus.success ? 'bg-success-50 text-success-800' : 'bg-error-50 text-error-800'}`}>
                      <div className="flex items-start">
                        {formStatus.success ? (
                          <Send className="mr-3 flex-shrink-0" size={20} />
                        ) : (
                          <AlertCircle className="mr-3 flex-shrink-0" size={20} />
                        )}
                        <p>{formStatus.message}</p>
                      </div>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                  >
                    Send Message
                    <Send size={16} className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Faq 
                question="How can I participate in the study?" 
                answer="We're currently recruiting participants with specific phobias (heights, spiders, dogs, or confined spaces). If you're interested in participating, please contact us through the form above or email research@university.edu for more information about eligibility and compensation."
              />
              <Faq 
                question="Are there any risks involved in the VR exposure therapy?" 
                answer="While VR exposure therapy is designed to gradually expose participants to anxiety-inducing stimuli, our protocols ensure that exposure is controlled and tailored to each participant's comfort level. Some participants may experience mild anxiety during sessions, but our trained staff is always present to provide support."
              />
              <Faq 
                question="What equipment will be used in the study?" 
                answer="We use Meta Quest headsets for our VR sessions and tablets or smartphones for AR experiences. Physiological responses are monitored using non-invasive sensors that track heart rate and skin conductance. All equipment is sanitized between uses according to university health guidelines."
              />
              <Faq 
                question="Can I collaborate with your research team?" 
                answer="We welcome collaborations with other researchers, developers, or clinicians working in related fields. Please contact the Principal Investigator, Dr. Sarah Johnson, with details about your background and potential areas for collaboration."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, details }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <div className="space-y-1">
        {details.map((detail, index) => (
          <p key={index} className="text-gray-600">{detail}</p>
        ))}
      </div>
    </div>
  );
};

interface FaqProps {
  question: string;
  answer: string;
}

const Faq: React.FC<FaqProps> = ({ question, answer }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-bold mb-3">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

export default Contact;