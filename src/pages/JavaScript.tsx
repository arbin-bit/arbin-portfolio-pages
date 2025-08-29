import ProjectCard from "@/components/ProjectCard";
import TechBadge from "@/components/TechBadge";

const JavaScript = () => {
  const concepts = [
    {
      title: "DOM Manipulation & Events",
      description: "Dynamic interaction with web pages through JavaScript DOM methods and event handling.",
      techs: [{ name: "JavaScript", variant: "js" as const }],
      features: [
        "Element selection and modification",
        "Event listeners and handling",
        "Dynamic content creation",
        "Form validation and submission"
      ],
      example: "Interactive to-do list with add, edit, delete functionality and local storage persistence."
    },
    {
      title: "Asynchronous JavaScript",
      description: "Handling asynchronous operations with promises, async/await, and fetch API.",
      techs: [{ name: "JavaScript", variant: "js" as const }],
      features: [
        "Promises and promise chaining",
        "Async/await syntax",
        "Fetch API for HTTP requests",
        "Error handling with try/catch"
      ],
      example: "Weather app that fetches data from external API and displays real-time weather information."
    },
    {
      title: "ES6+ Modern Features",
      description: "Utilizing modern JavaScript features for cleaner and more efficient code.",
      techs: [{ name: "JavaScript", variant: "js" as const }],
      features: [
        "Arrow functions and destructuring",
        "Template literals and modules",
        "Spread operator and rest parameters",
        "Map, Set, and Array methods"
      ],
      example: "Data dashboard using ES6 modules, arrow functions, and modern array methods for data processing."
    },
    {
      title: "Object-Oriented Programming",
      description: "Implementing OOP concepts in JavaScript for scalable application architecture.",
      techs: [{ name: "JavaScript", variant: "js" as const }],
      features: [
        "Classes and constructors",
        "Inheritance and polymorphism",
        "Encapsulation with private fields",
        "Static methods and properties"
      ],
      example: "Game development with player, enemy, and weapon classes demonstrating inheritance and polymorphism."
    }
  ];

  const features = [
    "ES6+ modern syntax",
    "DOM manipulation",
    "Asynchronous programming",
    "Object-oriented programming",
    "API integration",
    "Event-driven programming"
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <TechBadge tech="JavaScript" variant="js" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            JavaScript Programming
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dynamic and interactive web development using modern JavaScript. 
            From DOM manipulation to advanced programming concepts and API integration.
          </p>
        </div>

        {/* Features Overview */}
        <div className="bg-gradient-card border border-border rounded-lg p-8 mb-12 shadow-card">
          <h2 className="text-2xl font-bold mb-6 text-center text-foreground">JavaScript Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-tech-js rounded-full"></div>
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            JavaScript Projects & Concepts
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
          <h2 className="text-3xl font-bold mb-4 text-foreground">JavaScript Mastery</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Comprehensive JavaScript development skills for modern web applications
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-tech-js mb-2">Interactive</div>
              <div className="text-muted-foreground">Dynamic User Interfaces</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tech-js mb-2">Modern</div>
              <div className="text-muted-foreground">ES6+ Features</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-tech-js mb-2">Scalable</div>
              <div className="text-muted-foreground">OOP Architecture</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaScript;