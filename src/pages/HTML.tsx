import ProjectCard from "@/components/ProjectCard";
import TechBadge from "@/components/TechBadge";

const HTML = () => {
  const concepts = [
    {
      title: "Semantic HTML Structure",
      description: "Proper use of HTML5 semantic elements for better accessibility and SEO.",
      techs: [{ name: "HTML5", variant: "html" as const }],
      features: [
        "Header, nav, main, section, article elements",
        "Proper heading hierarchy (h1-h6)",
        "Meaningful alt attributes for images",
        "Form labels and fieldsets"
      ],
      example: "Using <article> for blog posts, <nav> for navigation, and <aside> for sidebar content."
    },
    {
      title: "Form Validation & Input Types",
      description: "Creating user-friendly forms with proper validation and input types.",
      techs: [{ name: "HTML5", variant: "html" as const }],
      features: [
        "Email, tel, url, number input types",
        "Required attribute validation",
        "Pattern attribute for custom validation",
        "Placeholder and autocomplete attributes"
      ],
      example: "Contact form with email validation, phone number formatting, and required field indicators."
    },
    {
      title: "Multimedia Integration",
      description: "Embedding and optimizing multimedia content for web delivery.",
      techs: [{ name: "HTML5", variant: "html" as const }],
      features: [
        "Video and audio elements with controls",
        "Responsive image techniques",
        "Picture element for different screen sizes",
        "Loading attributes for performance"
      ],
      example: "Responsive image gallery with lazy loading and multiple format support."
    },
    {
      title: "Accessibility Best Practices",
      description: "Creating inclusive web content that works for all users.",
      techs: [{ name: "HTML5", variant: "html" as const }],
      features: [
        "ARIA labels and roles",
        "Keyboard navigation support",
        "Screen reader compatibility",
        "Color contrast considerations"
      ],
      example: "Navigation menu that works with keyboard navigation and screen readers."
    }
  ];

  const features = [
    "Semantic HTML5 elements",
    "Form validation and input types",
    "Accessibility standards (ARIA)",
    "SEO optimization techniques",
    "Multimedia integration",
    "Document structure best practices"
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <TechBadge tech="HTML5" variant="html" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            HTML5 Development
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The foundation of web development. Creating structured, semantic, and accessible 
            web content using modern HTML5 standards and best practices.
          </p>
        </div>

        {/* Features Overview */}
        <div className="bg-gradient-card border border-border rounded-lg p-8 mb-12 shadow-card">
          <h2 className="text-2xl font-bold mb-6 text-center text-foreground">HTML5 Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-tech-html rounded-full"></div>
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            HTML5 Projects & Concepts
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
          <h2 className="text-3xl font-bold mb-4 text-foreground">HTML5 Proficiency</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Strong foundation in modern HTML5 development practices
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-tech-html mb-2">Semantic</div>
              <div className="text-muted-foreground">Meaningful Structure</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tech-html mb-2">Accessible</div>
              <div className="text-muted-foreground">Inclusive Design</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tech-html mb-2">Modern</div>
              <div className="text-muted-foreground">HTML5 Standards</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTML;