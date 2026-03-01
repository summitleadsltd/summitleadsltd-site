import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-aurora-teal to-aurora-purple bg-clip-text text-transparent">
          Privacy Policy
        </h1>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
          <p className="text-lg">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p>
              Summit Leads LTD ("we", "our", or "us") is committed to protecting your personal data and respecting your privacy. 
              This Privacy Policy explains how we collect, use, store, and protect your personal information in accordance with 
              the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
            <p className="mt-4">
              <strong>Company Details:</strong><br />
              Summit Leads LTD<br />
              Registered in England & Wales<br />
              Email: info@summitleadsltd.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Data Controller</h2>
            <p>
              Summit Leads LTD is the data controller responsible for your personal data. If you have any questions about 
              this Privacy Policy or our data practices, please contact us at info@summitleadsltd.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information We Collect</h2>
            <p>We may collect and process the following types of personal data:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Identity Data:</strong> Name, job title, company name</li>
              <li><strong>Contact Data:</strong> Email address, telephone number, business address</li>
              <li><strong>Technical Data:</strong> IP address, browser type, time zone settings, operating system</li>
              <li><strong>Usage Data:</strong> Information about how you use our website and services</li>
              <li><strong>Marketing Data:</strong> Your preferences for receiving marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. How We Collect Your Data</h2>
            <p>We collect personal data through:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Direct interactions when you enquire about our services or contact us</li>
              <li>Our website through contact forms and booking requests</li>
              <li>Third-party sources such as publicly available business directories</li>
              <li>Automated technologies including cookies and analytics tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Legal Basis for Processing</h2>
            <p>We process your personal data based on the following lawful grounds:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Consent:</strong> Where you have given explicit consent for specific purposes</li>
              <li><strong>Contract:</strong> Where processing is necessary for the performance of a contract with you</li>
              <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate business interests, 
                provided these do not override your rights and freedoms</li>
              <li><strong>Legal Obligation:</strong> Where we need to comply with a legal requirement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. How We Use Your Data</h2>
            <p>We use your personal data to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Provide our appointment setting and lead generation services</li>
              <li>Schedule and manage appointments between you and potential clients</li>
              <li>Communicate with you about our services</li>
              <li>Send marketing communications (where you have opted in)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Sharing</h2>
            <p>
              We may share your personal data with:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Service Providers:</strong> Third-party providers who assist in delivering our services (e.g., CRM systems, email platforms)</li>
              <li><strong>Business Partners:</strong> When facilitating appointments between builders and homeowners</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our legal rights</li>
            </ul>
            <p className="mt-4">
              We require all third parties to respect the security of your personal data and to treat it in accordance with the law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfil the purposes we collected it for, 
              including satisfying any legal, accounting, or reporting requirements. Typically, we retain client data 
              for 6 years after the end of our business relationship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Your Rights Under GDPR</h2>
            <p>Under the UK GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Right of Access:</strong> Request a copy of your personal data</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
              <li><strong>Right to Restrict Processing:</strong> Request limitation of how we use your data</li>
              <li><strong>Right to Data Portability:</strong> Request transfer of your data to another organisation</li>
              <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or direct marketing</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at info@summitleadsltd.com. We will respond to your request within one month.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Data Security</h2>
            <p>
              We have implemented appropriate technical and organisational measures to protect your personal data against 
              unauthorised or unlawful processing, accidental loss, destruction, or damage. These include:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure access controls and authentication</li>
              <li>Regular security assessments and updates</li>
              <li>Staff training on data protection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. International Transfers</h2>
            <p>
              Where we transfer your personal data outside the UK, we ensure adequate protection is in place through:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Transfers to countries with adequate data protection laws</li>
              <li>Standard Contractual Clauses approved by the ICO</li>
              <li>Other legally recognised transfer mechanisms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Cookies</h2>
            <p>
              Our website uses cookies to improve your browsing experience and analyse website traffic. 
              You can control cookie preferences through your browser settings. For more information, 
              please see our Cookie Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">13. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page 
              with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">14. Complaints</h2>
            <p>
              If you have concerns about how we handle your personal data, please contact us first at info@summitleadsltd.com. 
              You also have the right to lodge a complaint with the Information Commissioner's Office (ICO):
            </p>
            <p className="mt-4">
              Information Commissioner's Office<br />
              Wycliffe House, Water Lane<br />
              Wilmslow, Cheshire, SK9 5AF<br />
              Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-aurora-teal hover:underline">ico.org.uk</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">15. Contact Us</h2>
            <p>
              For any questions about this Privacy Policy or to exercise your data protection rights, please contact:
            </p>
            <p className="mt-4">
              Summit Leads LTD<br />
              Email: info@summitleadsltd.com
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/">
            <Button variant="aurora">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
