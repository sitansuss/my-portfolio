// src/components/Contact.tsx
import React, { useState } from 'react'; // Import useState
import './Contact.css';
import { useInView } from 'react-intersection-observer';
// import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'; // Uncomment if you use react-icons

const Contact: React.FC = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: methodsRef, inView: methodsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 150
  });
  
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 300
  });

  // State for form submission status
  const [submitStatus, setSubmitStatus] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('Submitting...'); // Initial submitting message
    const form = event.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json' // Important for Formspree to return JSON
        }
      });

      if (response.ok) {
        setSubmitStatus("Thanks for your message! I'll get back to you soon.");
        form.reset(); // Clear the form fields
      } else {
        // Try to parse error from Formspree if response is not ok
        const responseData = await response.json();
        if (responseData && Object.hasOwn(responseData, 'errors')) {
          setSubmitStatus(responseData["errors"].map((error: { message: string }) => error["message"]).join(", "));
        } else {
          setSubmitStatus("Oops! There was a problem submitting your form. Please try again.");
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("Oops! There was a network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false); // Re-enable button regardless of outcome
    }
  };

  return (
    <section id="contact-section" className="contact-section">
      <div className="container text-center">
        <h2
          ref={titleRef}
          className={`section-title ${titleInView ? 'slide-in-left-visible' : 'slide-in-left-hidden'}`}
        >
          Let's Connect!
        </h2>
        <p
          ref={methodsRef} // Can animate intro text separately if desired
          className={`contact-intro ${methodsInView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          I'm actively looking for new opportunities and collaborations.
          Whether you have a question or just want to discuss tech, feel free to reach out!
        </p>
        <div
          ref={methodsRef} // Re-using ref for the group
          className={`contact-methods ${methodsInView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <a href="mailto:sitansusekhar124@gmail.com" className="contact-method-item">
            {/* <FiMail className="contact-icon"/> */}
            <span>sitansusekhar124@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/sitansu-sekhar-mohanty-/" target="_blank" rel="noopener noreferrer" className="contact-method-item">
            {/* <FiLinkedin className="contact-icon"/> */}
            <span>LinkedIn Profile</span>
          </a>
          <a href="https://github.com/sitansuss" target="_blank" rel="noopener noreferrer" className="contact-method-item">
            {/* <FiGithub className="contact-icon"/> */}
            <span>GitHub Profile</span>
          </a>
        </div>
        
        <form
          ref={formRef}
          className={`contact-form ${formInView ? 'scale-up-visible' : 'scale-up-hidden'}`}
          action="https://formspree.io/f/xldbzvqb" // <-- REPLACE THIS WITH YOUR FORMSPREE ENDPOINT ID
          method="POST"
          onSubmit={handleFormSubmit}
        >
            <h3>Send me a message</h3>
            <div className="form-group">
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required disabled={isSubmitting} />
            </div>
            <div className="form-group">
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input type="email" id="email" name="_replyto" placeholder="Your Email" required disabled={isSubmitting} />
            </div>
            <div className="form-group">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Your Message" required disabled={isSubmitting}></textarea>
            </div>
            {/* Optional: Honeypot for spam prevention (usually not needed with Formspree's built-in protection) */}
            {/* <input type="text" name="_gotcha" style={{display: 'none'}} /> */}

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus && !isSubmitting && ( // Display status only when not actively submitting
              <p className={`form-status ${submitStatus.toLowerCase().includes('oops') || submitStatus.toLowerCase().includes('problem') ? 'error' : 'success'}`}>
                {submitStatus}
              </p>
            )}
        </form>
      </div>
    </section>
  );
};
export default Contact;