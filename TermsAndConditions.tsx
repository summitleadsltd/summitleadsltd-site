import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsAndConditions = () => {
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
          Terms & Conditions
        </h1>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
          <p className="text-lg">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions ("Terms") govern your use of the services provided by Summit Leads LTD ("we", "our", or "us"), 
              a company registered in England & Wales. By using our services, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services</h2>
            <p>
              Summit Leads LTD provides appointment setting and lead generation services for renovation and construction businesses. 
              Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Outbound prospecting and lead qualification</li>
              <li>Appointment booking and scheduling</li>
              <li>Lead follow-up and reactivation</li>
              <li>CRM management and updates</li>
              <li>SMS and phone-based communication on behalf of clients</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Service Disclaimer</h2>
            <p>
              Our services provide appointment setting only. We do not guarantee sales, project outcomes, or revenue generation. 
              Results may vary depending on factors outside our control, including market conditions, service quality, and client responsiveness.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Payment Terms</h2>
            <p>Payment terms are as follows:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Pilot programmes require upfront payment before commencement</li>
              <li>Monthly retainer fees are due at the beginning of each billing period</li>
              <li>All prices are quoted in GBP (£) unless otherwise stated</li>
              <li>Late payments may result in suspension of services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Client Obligations</h2>
            <p>As a client, you agree to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Provide accurate and up-to-date business information</li>
              <li>Respond to booked appointments in a timely manner</li>
              <li>Maintain professional conduct with leads we generate</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
            <p>
              All content, branding, and materials created by Summit Leads LTD remain our intellectual property unless 
              otherwise agreed in writing. Clients may not reproduce, distribute, or use our materials without prior consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Summit Leads LTD shall not be liable for any indirect, incidental, 
              special, or consequential damages arising from the use of our services. Our total liability shall not exceed 
              the fees paid by you in the three months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Termination</h2>
            <p>
              Either party may terminate the service agreement with 30 days' written notice. We reserve the right to 
              terminate services immediately if you breach these Terms. Upon termination, any outstanding fees remain payable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of England and Wales. 
              Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated 
              revision date. Continued use of our services constitutes acceptance of any modifications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
            <p>
              For any questions about these Terms & Conditions, please contact:
            </p>
            <p className="mt-4">
              Summit Leads LTD<br />
              Email: info@summitleadsltd.com<br />
              Phone: +27 73 908 1412
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

export default TermsAndConditions;
