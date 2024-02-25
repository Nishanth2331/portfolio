import React, { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Comments: ${comments}`);
    setEmail('');
    setComments('');
  };

  return (
    <section id="contact" className="card">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
