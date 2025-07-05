import React from 'react';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;