import logoImage from "@/assets/summit-leads-logo.png";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src={logoImage} 
        alt="Summit Leads Logo" 
        className="h-16 w-auto object-contain"
      />
      <span className="font-display text-xl font-bold text-foreground">
        Summit Leads LTD
      </span>
    </div>
  );
};

export default Logo;
