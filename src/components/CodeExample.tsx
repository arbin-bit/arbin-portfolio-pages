import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CodeExampleProps {
  title: string;
  description: string;
  code: string;
  language: string;
  features: string[];
}

const CodeExample = ({ title, description, code, language, features }: CodeExampleProps) => {
  return (
    <Card className="bg-gradient-card border-border shadow-card">
      <CardHeader>
        <CardTitle className="text-foreground">{title}</CardTitle>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {features.map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm">
            <code className={`language-${language} text-muted-foreground`}>
              {code}
            </code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeExample;