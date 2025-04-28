import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import resumeData from '../data/resume.ts';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-2 text-zinc-800">Contact Me</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-zinc-600">
            Let's connect! Feel free to reach out for opportunities, collaborations, or just to say hello.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100 h-full">
                <h3 className="text-xl font-semibold mb-6 text-zinc-800">Contact Information</h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <Phone className="mr-4 text-amber-500 mt-1" size={20} />
                    <div>
                      <p className="text-zinc-500 text-sm">Phone</p>
                      <a 
                        href={`tel:${resumeData.personalInfo.phone}`} 
                        className="text-zinc-800 hover:text-amber-500 transition-colors font-medium"
                      >
                        {resumeData.personalInfo.phone}
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Mail className="mr-4 text-amber-500 mt-1" size={20} />
                    <div>
                      <p className="text-zinc-500 text-sm">Email</p>
                      <a 
                        href={`mailto:${resumeData.personalInfo.email}`} 
                        className="text-zinc-800 hover:text-amber-500 transition-colors font-medium"
                      >
                        {resumeData.personalInfo.email}
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <MapPin className="mr-4 text-amber-500 mt-1" size={20} />
                    <div>
                      <p className="text-zinc-500 text-sm">Location</p>
                      <p className="text-zinc-800 font-medium">{resumeData.personalInfo.location}</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Linkedin className="mr-4 text-amber-500 mt-1" size={20} />
                    <div>
                      <p className="text-zinc-500 text-sm">LinkedIn</p>
                      <a 
                        href={`https://${resumeData.personalInfo.linkedin}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-zinc-800 hover:text-amber-500 transition-colors font-medium"
                      >
                        Connect with me
                      </a>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-100">
                  <p className="text-zinc-700 font-medium">
                    I'm always open to discussing new projects, opportunities, and ideas.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100">
                <h3 className="text-xl font-semibold mb-6 text-zinc-800">Send Me a Message</h3>
                
                {submitSuccess ? (
                  <div className="p-4 bg-green-50 border border-green-100 rounded-lg text-green-700 mb-6">
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {error && (
                      <div className="p-4 bg-red-50 border border-red-100 rounded-lg text-red-700 mb-6">
                        {error}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="john.doe@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Project Inquiry"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Hi Eric, I'd like to discuss a potential opportunity..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors flex items-center justify-center ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={16} className="ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;