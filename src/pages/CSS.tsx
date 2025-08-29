import ProjectCard from "@/components/ProjectCard";
import TechBadge from "@/components/TechBadge";
import CodeExample from "@/components/CodeExample";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CSS = () => {
  const concepts = [
    {
      title: "Responsive Web Design",
      description: "Creating layouts that work seamlessly across all device sizes and orientations.",
      techs: [{ name: "CSS3", variant: "css" as const }],
      features: [
        "Mobile-first design approach",
        "Flexible grid systems",
        "Media queries for breakpoints",
        "Viewport meta tag optimization"
      ],
      example: "Portfolio website that adapts from mobile phones to desktop displays with fluid layouts."
    },
    {
      title: "Flexbox & Grid Layouts",
      description: "Modern CSS layout techniques for complex and responsive designs.",
      techs: [{ name: "CSS3", variant: "css" as const }],
      features: [
        "Flexbox for one-dimensional layouts",
        "CSS Grid for two-dimensional layouts",
        "Alignment and spacing control",
        "Responsive layout patterns"
      ],
      example: "Dashboard layout with sidebar navigation, header, and dynamic content areas."
    },
    {
      title: "CSS Animations & Transitions",
      description: "Adding smooth interactions and visual feedback to enhance user experience.",
      techs: [{ name: "CSS3", variant: "css" as const }],
      features: [
        "Keyframe animations",
        "Transition effects",
        "Transform properties",
        "Performance-optimized animations"
      ],
      example: "Button hover effects, loading spinners, and smooth page transitions."
    },
    {
      title: "Custom Properties & Variables",
      description: "Using CSS custom properties for maintainable and themeable stylesheets.",
      techs: [{ name: "CSS3", variant: "css" as const }],
      features: [
        "CSS custom properties (variables)",
        "Dynamic theming systems",
        "Color palette management",
        "Consistent spacing scales"
      ],
      example: "Dark/light theme toggle using CSS custom properties for seamless theme switching."
    }
  ];

  const features = [
    "Responsive design principles",
    "Flexbox and CSS Grid",
    "CSS animations and transitions",
    "Custom properties and variables",
    "Modern CSS methodologies",
    "Cross-browser compatibility"
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <TechBadge tech="CSS3" variant="css" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            CSS3 Styling
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced CSS3 techniques for creating beautiful, responsive, and interactive 
            user interfaces. From layout fundamentals to complex animations.
          </p>
        </div>

        {/* Features Overview */}
        <div className="bg-gradient-card border border-border rounded-lg p-8 mb-12 shadow-card">
          <h2 className="text-2xl font-bold mb-6 text-center text-foreground">CSS3 Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-tech-css rounded-full"></div>
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live CSS Examples */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            CSS3 Interactive Demonstrations
          </h2>
          
          {/* Flexbox Demo */}
          <Card className="bg-gradient-card border-border shadow-card mb-8">
            <CardHeader>
              <CardTitle className="text-foreground">Flexbox Layout System</CardTitle>
              <p className="text-muted-foreground">Live example of flexible layout with responsive design</p>
            </CardHeader>
            <CardContent>
              <div className="mb-6 p-6 rounded-lg border border-border bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                  <div className="flex-1 p-4 bg-white/10 rounded backdrop-blur-sm border border-white/20 text-center transition-transform duration-300 hover:transform hover:-translate-y-1 hover:scale-105">
                    <h4 className="font-semibold text-foreground mb-2">Flex Item 1</h4>
                    <p className="text-muted-foreground text-sm">This item grows</p>
                  </div>
                  <div className="flex-1 p-4 bg-white/10 rounded backdrop-blur-sm border border-white/20 text-center transition-transform duration-300 hover:transform hover:-translate-y-1 hover:scale-105">
                    <h4 className="font-semibold text-foreground mb-2">Flex Item 2</h4>
                    <p className="text-muted-foreground text-sm">Equal flexibility</p>
                  </div>
                  <div className="flex-1 p-4 bg-white/10 rounded backdrop-blur-sm border border-white/20 text-center transition-transform duration-300 hover:transform hover:-translate-y-1 hover:scale-105">
                    <h4 className="font-semibold text-foreground mb-2">Flex Item 3</h4>
                    <p className="text-muted-foreground text-sm">Responsive design</p>
                  </div>
                </div>
              </div>

              <CodeExample
                title="Flexbox CSS Implementation"
                description="Complete CSS code for the flexbox layout above"
                language="css"
                features={["Flexbox", "Responsive", "Hover Effects"]}
                code={`.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
  border-radius: 8px;
  border: 1px solid var(--border);
}

.flex-item {
  flex: 1;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.flex-item:hover {
  transform: translateY(-4px) scale(1.05);
}

@media (max-width: 768px) {
  .flex-container {
    flex-direction: column;
  }
}`}
              />
            </CardContent>
          </Card>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            CSS3 Projects & Techniques
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {concepts.map((concept, index) => (
              <ProjectCard
                key={index}
                title={concept.title}
                description={concept.description}
                techs={concept.techs}
                features={concept.features}
                example={concept.example}
              />
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="bg-gradient-card border border-border rounded-lg p-8 shadow-card text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">CSS3 Mastery</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Expert-level CSS3 development for modern web applications
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-tech-css mb-2">Responsive</div>
              <div className="text-muted-foreground">Mobile-First Design</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tech-css mb-2">Interactive</div>
              <div className="text-muted-foreground">Animations & Effects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tech-css mb-2">Modern</div>
              <div className="text-muted-foreground">Latest CSS3 Features</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSS;