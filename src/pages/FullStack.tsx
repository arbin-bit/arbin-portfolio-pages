import ProjectCard from "@/components/ProjectCard";
import TechBadge from "@/components/TechBadge";

const FullStack = () => {
  const concepts = [
    {
      title: "MVC Architecture",
      description: "Understanding of Model-View-Controller pattern for separating concerns and maintaining clean code structure.",
      techs: [
        { name: "Node.js", variant: "fullstack" as const },
        { name: "Express", variant: "fullstack" as const }
      ],
      example: "Implementing user authentication with separate models for data, views for UI, and controllers for business logic."
    },
    {
      title: "RESTful APIs",
      description: "Design and implementation of REST APIs following best practices for HTTP methods, status codes, and resource naming.",
      techs: [
        { name: "REST", variant: "fullstack" as const },
        { name: "JSON", variant: "fullstack" as const }
      ],
      example: "Creating CRUD operations for user management: GET /users, POST /users, PUT /users/:id, DELETE /users/:id"
    },
    {
      title: "Database Integration",
      description: "Connecting frontend applications with backend databases through APIs and implementing proper data flow.",
      techs: [
        { name: "MongoDB", variant: "fullstack" as const },
        { name: "SQL", variant: "fullstack" as const }
      ],
      example: "Building a user registration system that validates data on frontend, processes it on backend, and stores it in database."
    }
  ];

  const techStack = {
    frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    backend: ["Node.js", "Express", "REST APIs", "Authentication"],
    database: ["MongoDB", "SQL", "Database Design", "Queries"]
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            Full Stack Development
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete web development process from user interface design to server-side logic 
            and database management. Understanding how all layers work together to create 
            seamless web applications.
          </p>
        </div>

        {/* Tech Stack Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-card border border-border rounded-lg p-6 shadow-card">
            <h3 className="text-2xl font-semibold mb-4 text-tech-html">Frontend</h3>
            <p className="text-muted-foreground mb-4">User interface and experience layer</p>
            <div className="flex flex-wrap gap-2">
              {techStack.frontend.map((tech, index) => (
                <TechBadge 
                  key={index} 
                  tech={tech} 
                  variant={tech === "HTML5" ? "html" : tech === "CSS3" ? "css" : tech === "JavaScript" ? "js" : "bootstrap"} 
                />
              ))}
            </div>
          </div>

          <div className="bg-gradient-card border border-border rounded-lg p-6 shadow-card">
            <h3 className="text-2xl font-semibold mb-4 text-tech-fullstack">Backend</h3>
            <p className="text-muted-foreground mb-4">Server-side logic and API development</p>
            <div className="flex flex-wrap gap-2">
              {techStack.backend.map((tech, index) => (
                <TechBadge key={index} tech={tech} variant="fullstack" />
              ))}
            </div>
          </div>

          <div className="bg-gradient-card border border-border rounded-lg p-6 shadow-card">
            <h3 className="text-2xl font-semibold mb-4 text-tech-js">Database</h3>
            <p className="text-muted-foreground mb-4">Data storage and management systems</p>
            <div className="flex flex-wrap gap-2">
              {techStack.database.map((tech, index) => (
                <TechBadge key={index} tech={tech} variant="fullstack" />
              ))}
            </div>
          </div>
        </div>

        {/* Core Concepts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Core Full Stack Concepts
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {concepts.map((concept, index) => (
              <ProjectCard
                key={index}
                title={concept.title}
                description={concept.description}
                techs={concept.techs}
                example={concept.example}
              />
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="bg-gradient-card border border-border rounded-lg p-8 shadow-card text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Full Stack Skills</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Comprehensive understanding of end-to-end web development
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Frontend</div>
              <div className="text-muted-foreground">User Interface Development</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Backend</div>
              <div className="text-muted-foreground">Server & API Development</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Database</div>
              <div className="text-muted-foreground">Data Management</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullStack;