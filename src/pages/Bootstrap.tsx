import ProjectCard from "@/components/ProjectCard";
import TechBadge from "@/components/TechBadge";
import CodeExample from "@/components/CodeExample";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

        {/* Bootstrap Live Examples */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Bootstrap Implementation Examples
          </h2>
          
          {/* Bootstrap Grid Demo */}
          <Card className="bg-gradient-card border-border shadow-card mb-8">
            <CardHeader>
              <CardTitle className="text-foreground">Bootstrap Grid System</CardTitle>
              <p className="text-muted-foreground">Responsive 12-column grid system with flexible layouts and breakpoints</p>
            </CardHeader>
            <CardContent>
              {/* Navigation Demo */}
              <div className="mb-6 p-4 bg-muted rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-lg font-semibold text-primary">Portfolio</div>
                  <div className="hidden md:flex space-x-4">
                    <Button variant="ghost" size="sm">Home</Button>
                    <Button variant="ghost" size="sm">About</Button>
                    <Button variant="ghost" size="sm">Contact</Button>
                  </div>
                  <Button variant="ghost" size="sm" className="md:hidden">☰</Button>
                </div>
              </div>

              {/* Grid Layout Demo */}
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 lg:col-span-8 p-4 bg-blue-100 dark:bg-blue-900/20 rounded border-2 border-dashed border-blue-300 dark:border-blue-700">
                    <h4 className="font-semibold text-foreground mb-2">Main Content (col-lg-8)</h4>
                    <p className="text-muted-foreground text-sm">Takes 2/3 width on large screens, full width on mobile</p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 p-4 bg-green-100 dark:bg-green-900/20 rounded border-2 border-dashed border-green-300 dark:border-green-700">
                    <h4 className="font-semibold text-foreground mb-2">Sidebar (col-lg-4)</h4>
                    <p className="text-muted-foreground text-sm">Takes 1/3 width on large screens</p>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 p-4 bg-purple-100 dark:bg-purple-900/20 rounded border-2 border-dashed border-purple-300 dark:border-purple-700">
                    <h4 className="font-semibold text-foreground mb-2">Full Width (col-12)</h4>
                    <p className="text-muted-foreground text-sm">Always takes full width across all breakpoints</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-tech-bootstrap/10 rounded">
                  <div className="text-tech-bootstrap font-semibold">12-Column System</div>
                  <div className="text-muted-foreground text-sm">Flexible grid layout</div>
                </div>
                <div className="p-3 bg-tech-bootstrap/10 rounded">
                  <div className="text-tech-bootstrap font-semibold">5 Breakpoints</div>
                  <div className="text-muted-foreground text-sm">xs, sm, md, lg, xl</div>
                </div>
                <div className="p-3 bg-tech-bootstrap/10 rounded">
                  <div className="text-tech-bootstrap font-semibold">Flexbox Based</div>
                  <div className="text-muted-foreground text-sm">Modern CSS layout</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <CodeExample
              title="Bootstrap Grid System"
              description="Complete HTML structure for responsive Bootstrap grid layout"
              language="html"
              features={["Grid System", "Responsive", "Navigation", "Cards"]}
              code={`<!-- Bootstrap Grid System Example -->
<div class="container-fluid">
  <!-- Responsive Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Portfolio</a>
      <button class="navbar-toggler" type="button" 
              data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hero Section with Grid -->
  <div class="container mt-5">
    <div class="row align-items-center min-vh-100">
      <div class="col-lg-6 col-md-8 mx-auto text-center">
        <h1 class="display-4 fw-bold mb-4">
          Full Stack Developer
        </h1>
        <p class="lead mb-4">
          Building modern web applications with Bootstrap
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
          <button class="btn btn-primary btn-lg me-md-2">
            View Projects
          </button>
          <button class="btn btn-outline-secondary btn-lg">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Features Grid -->
  <div class="container my-5">
    <div class="row g-4">
      <div class="col-lg-4 col-md-6">
        <div class="card h-100 shadow">
          <div class="card-body">
            <h5 class="card-title">Responsive Design</h5>
            <p class="card-text">
              Mobile-first approach using Bootstrap's grid system
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="card h-100 shadow">
          <div class="card-body">
            <h5 class="card-title">Component Library</h5>
            <p class="card-text">
              Utilizing Bootstrap's extensive component collection
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12">
        <div class="card h-100 shadow">
          <div class="card-body">
            <h5 class="card-title">Utility Classes</h5>
            <p class="card-text">
              Rapid prototyping with utility-first CSS classes
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}
            />

            <CodeExample
              title="Bootstrap Components & Utilities"
              description="Practical examples of Bootstrap components and utility classes"
              language="html"
              features={["Components", "Utilities", "Forms", "Buttons"]}
              code={`<!-- Bootstrap Components Example -->

<!-- Alert Component -->
<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Success!</strong> Your form has been submitted.
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>

<!-- Form with Bootstrap Classes -->
<form class="needs-validation" novalidate>
  <div class="row g-3">
    <div class="col-md-6">
      <label for="firstName" class="form-label">First Name</label>
      <input type="text" class="form-control" id="firstName" required>
      <div class="invalid-feedback">Please provide a valid first name.</div>
    </div>
    <div class="col-md-6">
      <label for="lastName" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="lastName" required>
      <div class="invalid-feedback">Please provide a valid last name.</div>
    </div>
  </div>
  
  <div class="col-12 mt-3">
    <button class="btn btn-primary" type="submit">Submit Form</button>
  </div>
</form>

<!-- Modal Component -->
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch Modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <p>This is a Bootstrap modal example with proper structure.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save Changes</button>
      </div>
    </div>
  </div>
</div>

<!-- Card with Utilities -->
<div class="card shadow-sm border-0 mb-4">
  <div class="card-body p-4">
    <h5 class="card-title text-primary fw-bold">Project Title</h5>
    <p class="card-text text-muted mb-3">
      Project description with Bootstrap utility classes
    </p>
    <div class="d-flex justify-content-between align-items-center">
      <small class="text-muted">Last updated 3 mins ago</small>
      <div>
        <button class="btn btn-sm btn-outline-primary me-2">Preview</button>
        <button class="btn btn-sm btn-primary">View Code</button>
      </div>
    </div>
  </div>
</div>

<!-- Utility Classes Examples -->
<div class="container">
  <!-- Spacing utilities -->
  <div class="p-4 mb-3 bg-light rounded">Padding and margin utilities</div>
  
  <!-- Text utilities -->
  <p class="text-center text-primary fw-bold fs-4">Centered primary text</p>
  
  <!-- Display utilities -->
  <div class="d-flex justify-content-between align-items-center">
    <span>Flexbox utilities</span>
    <span class="badge bg-success">Success</span>
  </div>
</div>`}
            />
          </div>

          {/* Bootstrap Benefits */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-foreground">Development Benefits</CardTitle>
              <p className="text-muted-foreground">Bootstrap accelerates development with comprehensive components and utilities</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-tech-bootstrap">Key Advantages</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-bootstrap rounded-full"></div>
                      <span>Rapid prototyping and development</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-bootstrap rounded-full"></div>
                      <span>Consistent cross-browser compatibility</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-bootstrap rounded-full"></div>
                      <span>Mobile-first responsive approach</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-bootstrap rounded-full"></div>
                      <span>Extensive documentation and community</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-tech-bootstrap">Implementation Highlights</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-bootstrap rounded-full"></div>
                      <span>Component-based architecture</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-bootstrap rounded-full"></div>
                      <span>Utility-first styling approach</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-bootstrap rounded-full"></div>
                      <span>Responsive grid implementation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-bootstrap rounded-full"></div>
                      <span>Accessible component design</span>
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