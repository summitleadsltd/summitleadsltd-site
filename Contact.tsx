import { Mail, Phone, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aurora-teal/10 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-aurora-violet/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-aurora-magenta/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Fill Your <span className="aurora-text">Diary?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Book a quick 10-minute call to discuss availability in your area 
            and see if a pilot makes sense for your business.
          </p>

          {/* CTA Card */}
          <div className="glass-card rounded-2xl p-8 md:p-12 aurora-border mb-12">
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full aurora-gradient flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold">+27 73 908 1412</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full aurora-gradient flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="font-semibold">info@summitleadsltd.com</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full aurora-gradient flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Response Time</p>
                  <p className="font-semibold">Within 24 Hours</p>
                </div>
              </div>
            </div>

            <Button variant="aurora" size="xl" className="mx-auto" asChild>
              <a href="https://wa.me/27739081412" target="_blank" rel="noopener noreferrer">
                Book Your Free 10-Minute Call
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* SMS Consent Disclosure */}
          <p className="text-xs text-muted-foreground/70 max-w-xl mx-auto leading-relaxed">
            By submitting this form, you agree to receive SMS messages from Summit Leads Ltd regarding appointment 
            scheduling and service updates. Message frequency varies. Message and data rates may apply. 
            Reply STOP to opt out or HELP for help.
          </p>

          {/* Trust Badge */}
          <p className="text-sm text-muted-foreground mt-4">
            This service provides appointment setting only and does not guarantee sales or project outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
