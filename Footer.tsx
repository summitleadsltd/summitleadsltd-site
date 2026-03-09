import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo />
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span className="text-muted-foreground/50">|</span>
            <Link to="/terms-and-conditions" className="hover:text-foreground transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-muted-foreground/50">|</span>
            <Link to="/sms-policy" className="hover:text-foreground transition-colors">
              SMS Policy
            </Link>
            <span className="text-muted-foreground/50">|</span>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Summit Leads LTD. All rights reserved. 
            Registered in England & Wales.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
