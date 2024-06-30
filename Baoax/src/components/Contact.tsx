import React, { useState } from 'react';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form data (optional, but recommended)
    // You can use a library like yup or react-hook-form for validation

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    }; // Replace with your actual template variables

    try {
      const response = await emailjs.send(
        'service_hhblo3r', // Replace with your actual service ID
        'template_zx025nc', // Replace with your actual template ID
        templateParams,
        '68uVjkmvUSTWp9GWI' // Replace with your actual user ID
      );

      console.log('SUCCESS!', response.status, response.text);
      alert('Mensaje enviado exitosamente');
    } catch (err) {
      console.error('FAILED...', err);
      alert('Error al enviar el mensaje, intenta de nuevo');
    } finally {
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
 
    <div id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
      <h1 className="text-[50px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Contact with Me</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 lg:w-1/2">
        <div className="lg:flex gap-9">
          <input
            name="name"
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
            placeholder="Enter your Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
            placeholder="Enter your Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
          placeholder="Write your Message.."
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          cols={30}
          rows={10}
        />
        <button
          className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold mb-10"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;