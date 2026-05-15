import Link from 'next/link';
import styles from './LegalPage.module.css';

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <span className={styles.eyebrow}>Legal</span>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: May 2025</p>
      </div>

      <div className={styles.container}>
        <div className={styles.section}>
          <p>
            Baltar Inc. ("we", "us", or "our") operates the website located at baltar.ca and its associated subdomain properties. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our site or engage with our services.
          </p>
          <p>
            By using our website, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Contact information</strong> — name, email address, and any message content submitted through our contact forms.</li>
            <li><strong>Usage data</strong> — pages visited, time spent, browser type, device type, and referring URLs, collected automatically via analytics tools.</li>
            <li><strong>Cookies</strong> — small data files placed on your device to improve functionality and measure site performance. See our Cookie Policy for details.</li>
          </ul>
          <p>We do not collect payment information directly. Any transactions are handled by third-party payment processors (such as Transac or Stripe) under their own privacy terms.</p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to enquiries and service requests submitted via our contact forms.</li>
            <li>Improve the content, structure, and performance of our website.</li>
            <li>Understand how visitors use our site through aggregate, anonymised analytics.</li>
            <li>Comply with applicable legal and regulatory obligations.</li>
          </ul>
          <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>Data Retention</h2>
          <p>
            We retain personal information only as long as necessary to fulfill the purpose for which it was collected, or as required by applicable law. Contact form submissions are retained for up to 24 months from the date of receipt and may be deleted upon request.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>Third-Party Services</h2>
          <p>
            Our website may use third-party services including analytics providers (such as Google Analytics or Vercel Analytics), hosting infrastructure, and email delivery services. These providers operate under their own privacy policies and are contractually prohibited from using your data for their own purposes.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>Your Rights</h2>
          <p>
            If you are a resident of Canada, you have rights under the Personal Information Protection and Electronic Documents Act (PIPEDA), including the right to:
          </p>
          <ul>
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Withdraw consent for certain uses of your information.</li>
            <li>Request deletion of your information, subject to legal retention requirements.</li>
          </ul>
          <p>To exercise any of these rights, contact us at the address below.</p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>Cookies</h2>
          <p>
            Our website uses cookies to improve your experience. You may disable cookies through your browser settings; however, this may affect site functionality. For a full description of how we use cookies, see our <Link href="/cookies" style={{ color: '#0d0d0d', fontWeight: 600 }}>Cookie Policy</Link>.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date. Continued use of our website following any changes constitutes your acceptance of the updated policy.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>Contact Us</h2>
          <p>If you have questions about this policy or how we handle your data:</p>
          <div className={styles.contact}>
            <p>
              <strong>Baltar Inc.</strong><br />
              Toronto, ON, Canada<br />
              <a href="mailto:admin@baltar.ca">admin@baltar.ca</a>
            </p>
          </div>
        </div>

        <Link href="/" className={styles.back}>← Back to Baltar Inc.</Link>
      </div>
    </div>
  );
}
