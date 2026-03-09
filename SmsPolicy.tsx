import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const SmsPolicy = () => {
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
          SMS Policy
        </h1>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
          <p className="text-lg">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Overview</h2>
            <p>
              Summit Leads LTD ("we", "our", or "us") uses SMS messaging as part of our appointment setting and lead 
              generation services. This SMS Policy explains how we use text messaging to communicate with you and your rights 
              regarding SMS communications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Consent</h2>
            <p>
              By providing your phone number and submitting a form on our website, or by verbally agreeing to receive SMS 
              messages, you consent to receive text messages from Summit Leads LTD. Your consent is not a condition of 
              purchasing any goods or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Types of Messages</h2>
            <p>We may send you SMS messages related to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Appointment confirmations and reminders</li>
              <li>Scheduling updates and changes</li>
              <li>Service-related notifications</li>
              <li>Follow-up communications regarding your enquiry</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Message Frequency</h2>
            <p>
              Message frequency varies based on your interaction with our services. You may receive multiple messages 
              during active appointment scheduling. We will not send more messages than reasonably necessary to provide 
              our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Costs</h2>
            <p>
              Message and data rates may apply depending on your mobile carrier and plan. Summit Leads LTD is not 
              responsible for any charges incurred from receiving SMS messages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Opting Out</h2>
            <p>
              You can opt out of receiving SMS messages at any time by:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Replying <strong>STOP</strong> to any SMS message you receive from us</li>
              <li>Contacting us at info@summitleadsltd.com</li>
              <li>Calling us at +27 73 908 1412</li>
            </ul>
            <p className="mt-4">
              After opting out, you will receive one final confirmation message. You will no longer receive SMS messages 
              from us unless you re-subscribe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Getting Help</h2>
            <p>
              For help or questions about our SMS programme:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Reply <strong>HELP</strong> to any SMS message you receive from us</li>
              <li>Email us at info@summitleadsltd.com</li>
              <li>Call us at +27 73 908 1412</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Data Protection</h2>
            <p>
              Your phone number and SMS data are handled in accordance with our{" "}
              <Link to="/privacy-policy" className="text-aurora-teal hover:underline">Privacy Policy</Link>. 
              We do not sell, rent, or share your phone number with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Supported Carriers</h2>
            <p>
              Our SMS services are compatible with most major mobile carriers. If you experience issues receiving messages, 
              please contact us directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this SMS Policy from time to time. Changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
            <p>
              For any questions about this SMS Policy, please contact:
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

export default SmsPolicy;
