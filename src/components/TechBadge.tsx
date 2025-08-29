import { Badge } from "@/components/ui/badge";

interface TechBadgeProps {
  tech: string;
  variant?: "html" | "css" | "js" | "bootstrap" | "fullstack" | "default";
}

const TechBadge = ({ tech, variant = "default" }: TechBadgeProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "html":
        return "bg-tech-html text-primary-foreground hover:bg-tech-html/80";
      case "css":
        return "bg-tech-css text-primary-foreground hover:bg-tech-css/80";
      case "js":
        return "bg-tech-js text-primary-foreground hover:bg-tech-js/80";
      case "bootstrap":
        return "bg-tech-bootstrap text-primary-foreground hover:bg-tech-bootstrap/80";
      case "fullstack":
        return "bg-tech-fullstack text-primary-foreground hover:bg-tech-fullstack/80";
      default:
        return "bg-primary text-primary-foreground hover:bg-primary/80";
    }
  };

  return (
    <Badge 
      className={`tech-glow transition-all duration-300 ${getVariantClasses()}`}
    >
      {tech}
    </Badge>
  );
};

export default TechBadge;