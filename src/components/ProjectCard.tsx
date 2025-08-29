import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
  title: string;
  description: string;
  techs: Array<{ name: string; variant: "html" | "css" | "js" | "bootstrap" | "fullstack" }>;
  features?: string[];
  example?: string;
}

const ProjectCard = ({ title, description, techs, features, example }: ProjectCardProps) => {
  return (
    <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-2">
          {techs.map((tech, index) => (
            <TechBadge key={index} tech={tech.name} variant={tech.variant} />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        {features && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        {example && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2 text-foreground">Example:</h4>
            <p className="text-muted-foreground italic">{example}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;