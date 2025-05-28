import React from 'react';
import { FileText, Download, Calendar, File as FilePdf } from 'lucide-react';

interface Document {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'pdf' | 'doc';
  size: string;
  downloadUrl: string;
}

const documents: Document[] = [
  {
    id: 'proposal',
    title: 'Project Proposal',
    description: 'Initial research proposal including literature review and methodology.',
    date: 'September 15, 2024',
    type: 'pdf',
    size: '2.4 MB',
    downloadUrl: 'https://drive.google.com/file/d/1qRgQOs0aMt8-YzpqFmgDamJLmmMJg2WF/view?usp=sharing'
  },
  {
    id: 'research-paper',
    title: 'Research Paper',
    description: 'https://drive.google.com/file/d/1ADXlyTDQRoc5uJkn8sEg8WnR_cGO9Cq7/view?usp=sharing',
    date: 'March 15, 2025',
    type: 'pdf',
    size: '3.2 MB',
    downloadUrl: '#'
  },
  {
    id: 'final-report',
    title: 'Final Report',
    description: 'https://drive.google.com/file/d/1hxiIBnzU5UxbShrkgqDSFJDawuOA816T/view?usp=sharing',
    date: 'April 25, 2025',
    type: 'pdf',
    size: '4.8 MB',
    downloadUrl: '#'
  }
];

const Documents: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Project Documents</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Access research documents and reports.
          </p>
        </div>
      </div>
      
      {/* Documents Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center">
                <FileText className="text-primary-600 mr-3" size={28} />
                <h2 className="text-3xl font-bold">Research Documents</h2>
              </div>
              
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Filter
                </button>
                <button className="px-4 py-2 border border-primary-600 rounded-md bg-primary-600 text-sm font-medium text-white hover:bg-primary-700">
                  Upload New
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc) => (
                <DocumentCard key={doc.id} document={doc} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Document Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Document Categories</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <CategoryCard 
                icon={<FilePdf size={28} className="text-error-600" />}
                title="Project Proposal"
                count={1}
                color="bg-primary-50 text-primary-600"
              />
              <CategoryCard 
                icon={<FileText size={28} className="text-primary-600" />}
                title="Research Paper"
                count={1}
                color="bg-primary-50 text-primary-600"
              />
              <CategoryCard 
                icon={<FileText size={28} className="text-secondary-600" />}
                title="Final Report"
                count={1}
                color="bg-secondary-50 text-secondary-600"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface DocumentCardProps {
  document: Document;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
  const getIcon = () => {
    switch (document.type) {
      case 'pdf':
        return <FilePdf size={24} className="text-error-500" />;
      case 'doc':
        return <FileText size={24} className="text-primary-500" />;
      default:
        return <FileText size={24} className="text-gray-500" />;
    }
  };
  
  const getTypeColor = () => {
    switch (document.type) {
      case 'pdf':
        return 'bg-blue-500 error-500';
      case 'doc':
        return 'bg-primary-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  return (
    <div className="document-card group">
      <div className={`document-card__icon ${getTypeColor()}`}>
        {getIcon()}
      </div>
      
      <div className="document-card__content">
        <h3 className="document-card__title">{document.title}</h3>
        <p className="document-card__desc">{document.description}</p>
      </div>
      
      <div className="document-card__footer">
        <div className="flex items-center text-sm text-gray-500">
          <Calendar size={14} className="mr-1" />
          <span>{document.date}</span>
          <span className="mx-2">•</span>
          <span>{document.size}</span>
        </div>
        
        <a 
          href={document.downloadUrl} 
          className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
        >
          <Download size={16} className="mr-1" />
          <span className="text-sm font-medium">Download</span>
        </a>
      </div>
    </div>
  );
};

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  count: number;
  color: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, count, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
      <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-gray-600">{count} document{count !== 1 ? 's' : ''}</p>
    </div>
  );
};

export default Documents;