import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import TechBadge from "@/components/TechBadge";
import profileImage from "@/assets/profile.jpeg";

const Index = () => {
  const skills = [
    { name: "HTML5", variant: "html" as const },
    { name: "CSS3", variant: "css" as const },
    { name: "JavaScript", variant: "js" as const },
    { name: "Bootstrap", variant: "bootstrap" as const },
    { name: "Node.js", variant: "fullstack" as const },
  ];

  const stats = [
    { number: "4", label: "Core Technologies" },
    { number: "15+", label: "Working Examples" },
    { number: "100%", label: "Practical Focus" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src={profileImage} 
              alt="Arbin Giri - Full Stack Developer" 
              className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-primary shadow-glow"
            />
          </div>
          
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-primary">Arbin Giri</span>
            <br />
            <span className="text-foreground">Full Stack Developer</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Demonstrating comprehensive understanding of modern web development 
            technologies through practical examples and thorough explanations.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {skills.map((skill, index) => (
              <TechBadge key={index} tech={skill.name} variant={skill.variant} />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild variant="default" size="lg" className="bg-gradient-primary">
              <Link to="/fullstack">Explore Portfolio</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">What is Full Stack Development?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Full stack development encompasses the complete web development process, 
            from user interface design to server-side logic and database management. 
            It requires understanding how all layers work together to create seamless web applications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Frontend</h3>
                <p className="text-muted-foreground mb-4">User interface and experience layer</p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge tech="HTML5" variant="html" />
                  <TechBadge tech="CSS3" variant="css" />
                  <TechBadge tech="JavaScript" variant="js" />
                  <TechBadge tech="Bootstrap" variant="bootstrap" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Backend</h3>
                <p className="text-muted-foreground mb-4">Server-side logic and API development</p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge tech="Node.js" variant="fullstack" />
                  <TechBadge tech="Express" variant="fullstack" />
                  <TechBadge tech="REST APIs" variant="fullstack" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Database</h3>
                <p className="text-muted-foreground mb-4">Data storage and management systems</p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge tech="MongoDB" variant="fullstack" />
                  <TechBadge tech="SQL" variant="fullstack" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
