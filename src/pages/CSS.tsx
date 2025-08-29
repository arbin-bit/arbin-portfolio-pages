import ProjectCard from "@/components/ProjectCard";
import TechBadge from "@/components/TechBadge";

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