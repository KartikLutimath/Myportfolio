
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <h2 className="heading-lg text-center mb-4 animate-fade-in-up">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 animate-fade-in-up animate-delaySm">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 animate-fade-in-right animate-delayMd">
            <div className="bg-white shadow-sm rounded-xl p-8 h-full">
              <h3 className="heading-md mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">Email</h4>
                    <a href="mailto:kartik.lutimath@example.com" className="text-gray-800 hover:text-primary transition-colors">
                      kartiklutimath@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-800 hover:text-primary transition-colors">
                      +91-6360534933
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">Location</h4>
                    <p className="text-gray-800">
                      India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-sm font-semibold text-gray-500 mb-3">Social Profiles</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/KartikLutimath" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-primary hover:text-white transition-all"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/kartiklutimath/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-primary hover:text-white transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-fade-in-left animate-delayLg">
            <div className="bg-white shadow-sm rounded-xl p-8">
              <h3 className="heading-md mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2" size={18} /> Send Message
                    </span>
                  )}
                </button>
                
                {submitSuccess && (
                  <div className="mt-4 p-3 bg-green-50 text-green-800 rounded-md text-sm">
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
