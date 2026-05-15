'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './ContactUs.module.css';

const DIVISIONS = [
  { value: '', label: 'Select a division (optional)' },
  { value: 'Toronto Media Inc. — Web Design & Development', label: 'Toronto Media Inc. — Web Design' },
  { value: 'Frontend Media Inc. — Development', label: 'Frontend Media Inc. — Development' },
  { value: 'Transac — Payments', label: 'Transac — Payments' },
  { value: 'Savour & Sip — Hospitality & Events', label: 'Savour & Sip — Events & Catering' },
  { value: 'VR — Eyewear & Fashion Tech', label: 'VR — Eyewear & Fashion' },
  { value: 'Baltar Consulting — Engineering', label: 'Baltar Consulting — Structural Engineering' },
  { value: 'Baltar International — Advisory', label: 'Baltar International — Global Advisory' },
  { value: 'General Enquiry', label: 'General Enquiry' },
];

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    division: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, division, message } = formData;
    const subject = division
      ? `Enquiry — ${division} [via baltar.ca]`
      : `Enquiry from ${name} [via baltar.ca]`;
    const body = `Name: ${name}\nEmail: ${email}\nDivision: ${division || 'Not specified'}\n\n${message}`;
    window.location.href = `mailto:admin@baltar.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.header}>
          <span className={styles.eyebrow}>Baltar Inc. — Toronto, ON</span>
          <h1 className={styles.title}>Let's Talk</h1>
          <p className={styles.subtitle}>
            Tell us what you're working on. We'll figure out the best way to help.
          </p>
        </div>

        <div className={styles.formContainer}>
          {sent ? (
            <motion.div
              className={styles.successMessage}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <h3>Message prepared.</h3>
              <p>Your email client should have opened with the message pre-filled. If it didn't, email us directly at <a href="mailto:admin@baltar.ca">admin@baltar.ca</a>.</p>
            </motion.div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="division" className={styles.label}>Division</label>
                <select
                  id="division"
                  name="division"
                  value={formData.division}
                  onChange={handleChange}
                  className={styles.select}
                >
                  {DIVISIONS.map((d) => (
                    <option key={d.value} value={d.value}>{d.label}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows="6"
                  placeholder="Tell us what you need..."
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className={styles.directContact}>
          <span>Prefer direct email?</span>
          <a href="mailto:admin@baltar.ca" className={styles.directEmail}>admin@baltar.ca</a>
        </div>

        <div className={styles.backLink}>
          <Link href="/" className={styles.backButton}>← Back to Home</Link>
        </div>
      </motion.div>
    </div>
  );
}
