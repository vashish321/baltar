import Link from 'next/link';
import styles from './LegalPage.module.css';

export default function TermsOfServicePage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <span className={styles.eyebrow}>Legal</span>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.updated}>Last updated: May 2025</p>
      </div>

      <div className={styles.container}>
        <div className={styles.section}>
          <p>
            These Terms of Service ("Terms") govern your use of the websites operated by Baltar Inc. ("we", "us", or "our"), including baltar.ca and all associated properties. By accessing or using our website or services, you agree to be bound by these Terms.
          </p>
          <p>
            If you do not agree to these Terms, please discontinue use of our website immediately.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>Use of the Website</h2>
          <p>You agree to use this website only for lawful purposes and in a manner consistent with applicable laws and regulations. You must not:</p>
          <ul>
            <li>Use this site in any way that violates Canadian federal or provincial law.</li>
            <li>Transmit unsolicited commercial communications (spam).</li>
            <li>Attempt to gain unauthorised access to any part of this website or its infrastructure.</li>
            <li>Reproduce, redistribute, or commercially exploit any content from this site without our express written consent.</li>
          </ul>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, images, and code — is the property of Baltar Inc. or its licensors and is protected under applicable intellectual property laws. Nothing on this site transfers any ownership rights to you.
          </p>
          <p>
            You may view and print pages from this site for your personal, non-commercial use only, provided that all copyright and proprietary notices are retained.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>Services and Engagements</h2>
          <p>
            Information on this website describes the services offered by Baltar Inc. and its operating divisions (including but not limited to Toronto Media Inc., Frontend Media Inc., Transac, Savour &amp; Sip, VR, Baltar Consulting, and Baltar International). Descriptions are for informational purposes only and do not constitute a contractual offer.
          </p>
          <p>
            All service engagements are governed by separate written agreements entered into between Baltar Inc. (or the relevant division) and the client. In the event of any conflict, those agreements take precedence over these Terms.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>Disclaimer of Warranties</h2>
          <p>
            This website is provided "as is" without warranties of any kind, either express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components. We make no representations about the accuracy, completeness, or suitability of information on this site for any particular purpose.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Baltar Inc. and its affiliates, directors, employees, and agents shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of this website or our services, even if we have been advised of the possibility of such damages.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over, and assume no responsibility for, the content or practices of any third-party sites. Linking does not imply endorsement.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any dispute arising from these Terms or your use of this website shall be subject to the exclusive jurisdiction of the courts of Ontario.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>Changes to These Terms</h2>
          <p>
            We reserve the right to update these Terms at any time. Changes will be posted on this page with a revised effective date. Continued use of our website following any changes constitutes your acceptance of the updated Terms.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>Contact Us</h2>
          <p>Questions about these Terms? Reach us at:</p>
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
