import ProjectCard from "@/components/ProjectCard";
import TechBadge from "@/components/TechBadge";
import CodeExample from "@/components/CodeExample";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

        {/* Live HTML Examples */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            HTML5 Code Examples
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <CodeExample
              title="Semantic HTML Structure"
              description="Proper HTML5 semantic elements for better accessibility and SEO"
              language="html"
              features={["Semantic Elements", "Accessibility", "SEO Optimized"]}
              code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML Example</title>
    <meta name="description" content="Example of semantic HTML structure">
</head>
<body>
    <header>
        <nav aria-label="Main navigation">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="hero">
            <h1>Welcome to My Portfolio</h1>
            <p>Full Stack Developer specializing in modern web technologies</p>
        </section>

        <section id="projects">
            <h2>Featured Projects</h2>
            <article>
                <h3>E-commerce Website</h3>
                <p>Built with HTML5, CSS3, and JavaScript</p>
                <figure>
                    <img src="project.jpg" alt="E-commerce website screenshot">
                    <figcaption>Responsive design with mobile-first approach</figcaption>
                </figure>
            </article>
        </section>

        <aside>
            <h2>Latest News</h2>
            <p>Stay updated with web development trends</p>
        </aside>
    </main>

    <footer>
        <p>&copy; 2024 Arbin Giri. All rights reserved.</p>
        <address>
            <a href="mailto:arbin@example.com">arbin@example.com</a>
        </address>
    </footer>
</body>
</html>`}
            />

            <CodeExample
              title="Advanced Form with Validation"
              description="HTML5 form with various input types and built-in validation"
              language="html"
              features={["Form Validation", "Input Types", "Accessibility"]}
              code={`<form action="/contact" method="post" novalidate>
    <fieldset>
        <legend>Contact Information</legend>
        
        <div class="form-group">
            <label for="name">Full Name *</label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                aria-describedby="name-error"
                autocomplete="name"
            >
            <span id="name-error" class="error" aria-live="polite"></span>
        </div>

        <div class="form-group">
            <label for="email">Email Address *</label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                aria-describedby="email-help email-error"
                autocomplete="email"
            >
            <small id="email-help">We'll never share your email</small>
            <span id="email-error" class="error" aria-live="polite"></span>
        </div>

        <div class="form-group">
            <label for="phone">Phone Number</label>
            <input 
                type="tel" 
                id="phone" 
                name="phone" 
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="123-456-7890"
                autocomplete="tel"
            >
        </div>

        <div class="form-group">
            <label for="website">Website</label>
            <input 
                type="url" 
                id="website" 
                name="website" 
                placeholder="https://example.com"
                autocomplete="url"
            >
        </div>

        <div class="form-group">
            <label for="age">Age</label>
            <input 
                type="number" 
                id="age" 
                name="age" 
                min="18" 
                max="100"
            >
        </div>

        <div class="form-group">
            <label for="message">Message *</label>
            <textarea 
                id="message" 
                name="message" 
                required 
                rows="5"
                aria-describedby="message-error"
            ></textarea>
            <span id="message-error" class="error" aria-live="polite"></span>
        </div>

        <div class="form-group">
            <input type="checkbox" id="newsletter" name="newsletter">
            <label for="newsletter">Subscribe to newsletter</label>
        </div>
    </fieldset>

    <button type="submit">Send Message</button>
    <button type="reset">Clear Form</button>
</form>`}
            />
          </div>

          {/* HTML Best Practices */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-foreground">HTML5 Best Practices Demonstrated</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-tech-html">Technical Skills</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-html rounded-full"></div>
                      <span>Semantic HTML5 element usage</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-html rounded-full"></div>
                      <span>WCAG accessibility compliance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-html rounded-full"></div>
                      <span>Form validation and input types</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-html rounded-full"></div>
                      <span>SEO optimization techniques</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-html rounded-full"></div>
                      <span>Cross-browser compatibility</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-tech-html">Best Practices</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-html rounded-full"></div>
                      <span>Valid, well-structured markup</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-html rounded-full"></div>
                      <span>Progressive enhancement approach</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-html rounded-full"></div>
                      <span>Performance optimization</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-html rounded-full"></div>
                      <span>Mobile-first responsive design</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-html rounded-full"></div>
                      <span>Modern HTML5 API integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
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