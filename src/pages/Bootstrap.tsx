import ProjectCard from "@/components/ProjectCard";
import TechBadge from "@/components/TechBadge";

const Bootstrap = () => {
  const concepts = [
    {
      title: "Bootstrap Grid System",
      description: "Mastering Bootstrap's responsive grid system for flexible layouts.",
      techs: [{ name: "Bootstrap", variant: "bootstrap" as const }],
      features: [
        "12-column grid system",
        "Responsive breakpoints (xs, sm, md, lg, xl)",
        "Offset and ordering classes",
        "Nested grids and auto-layout"
      ],
      example: "E-commerce product catalog with responsive cards that stack on mobile and display in rows on desktop."
    },
    {
      title: "Component Library Usage",
      description: "Implementing Bootstrap's pre-built components for rapid development.",
      techs: [{ name: "Bootstrap", variant: "bootstrap" as const }],
      features: [
        "Navigation bars and menus",
        "Cards and panels",
        "Modals and alerts",
        "Form controls and validation"
      ],
      example: "Admin dashboard with navigation sidebar, data tables, and modal forms for user management."
    },
    {
      title: "Bootstrap Utilities",
      description: "Leveraging Bootstrap's utility classes for quick styling and spacing.",
      techs: [{ name: "Bootstrap", variant: "bootstrap" as const }],
      features: [
        "Spacing utilities (margin/padding)",
        "Color and background utilities",
        "Text alignment and typography",
        "Display and positioning utilities"
      ],
      example: "Landing page with consistent spacing, typography, and color scheme using utility classes."
    },
    {
      title: "Custom Bootstrap Themes",
      description: "Customizing Bootstrap variables and creating branded design systems.",
      techs: [{ name: "Bootstrap", variant: "bootstrap" as const }],
      features: [
        "SCSS variable customization",
        "Custom color palettes",
        "Typography scale modification",
        "Component style overrides"
      ],
      example: "Corporate website with custom brand colors, fonts, and component styles while maintaining Bootstrap's responsive features."
    }
  ];

  const features = [
    "Responsive grid system",
    "Pre-built UI components",
    "Utility classes",
    "JavaScript plugins",
    "Theme customization",
    "Mobile-first approach"
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <TechBadge tech="Bootstrap" variant="bootstrap" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            Bootstrap Framework
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rapid UI development using Bootstrap's comprehensive framework. 
            Building responsive, professional websites with pre-designed components and utilities.
          </p>
        </div>

        {/* Features Overview */}
        <div className="bg-gradient-card border border-border rounded-lg p-8 mb-12 shadow-card">
          <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Bootstrap Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-tech-bootstrap rounded-full"></div>
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Bootstrap Projects & Implementation
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
          <h2 className="text-3xl font-bold mb-4 text-foreground">Bootstrap Proficiency</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Efficient development using Bootstrap's powerful framework
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-tech-bootstrap mb-2">Rapid</div>
              <div className="text-muted-foreground">Fast Development</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tech-bootstrap mb-2">Responsive</div>
              <div className="text-muted-foreground">Mobile-Ready</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tech-bootstrap mb-2">Customizable</div>
              <div className="text-muted-foreground">Branded Themes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bootstrap;