import ProjectCard from "@/components/ProjectCard";
import TechBadge from "@/components/TechBadge";
import CodeExample from "@/components/CodeExample";
import { TaskManager, Counter } from "@/components/InteractiveExamples";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

        {/* Interactive JavaScript Examples */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Interactive JavaScript Demonstrations
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <TaskManager />
            <Counter />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <CodeExample
              title="DOM Manipulation & Event Handling"
              description="Interactive task manager with dynamic content creation and event handling"
              language="javascript"
              features={["DOM Selection", "Event Listeners", "Dynamic Content", "Local Storage"]}
              code={`// DOM Manipulation and Event Handling Examples

// 1. Element Selection and Modification
const header = document.querySelector('h1');
const buttons = document.querySelectorAll('.btn');
const form = document.getElementById('contactForm');

// 2. Dynamic Content Creation
function createTaskElement(taskText) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-item p-3 mb-2 bg-light rounded';
    taskDiv.innerHTML = \`
        <span class="task-text">\${taskText}</span>
        <button class="btn btn-sm btn-danger ms-2 delete-btn">Delete</button>
    \`;
    return taskDiv;
}

// 3. Event Handling
document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const tasksList = document.getElementById('tasksList');

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskElement = createTaskElement(taskText);
            tasksList.appendChild(taskElement);
            taskInput.value = '';

            // Add delete functionality
            const deleteBtn = taskElement.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', function() {
                taskElement.remove();
                updateTaskCount();
            });
        }
    });
});

// 4. Counter functionality with visual feedback
let count = 0;
const counterDisplay = document.getElementById('counterDisplay');
const incrementBtn = document.getElementById('incrementBtn');

incrementBtn.addEventListener('click', function() {
    count++;
    counterDisplay.textContent = count;
    
    // Add visual feedback
    counterDisplay.style.color = count > 0 ? 'green' : 'red';
    counterDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counterDisplay.style.transform = 'scale(1)';
    }, 200);
});`}
            />

            <CodeExample
              title="ES6+ Modern Features & API Integration"
              description="Modern JavaScript with async/await, destructuring, and fetch API"
              language="javascript"
              features={["ES6+", "Async/Await", "Fetch API", "Destructuring"]}
              code={`// ES6+ Modern JavaScript Features

// 1. Arrow Functions and Destructuring
const users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' }
];

const getUserEmails = () => users.map(({ email }) => email);

// 2. Template Literals and Spread Operator
const createUserCard = (user) => \`
    <div class="user-card">
        <h3>\${user.name}</h3>
        <p>\${user.email}</p>
    </div>
\`;

const mergeUserData = (user, additionalData) => ({
    ...user,
    ...additionalData,
    updatedAt: new Date()
});

// 3. Async/Await with Fetch API
async function fetchUserData(userId) {
    try {
        const response = await fetch(\`/api/users/\${userId}\`);
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}

// 4. Promise-based API calls with error handling
async function loadUserProfile(userId) {
    const loadingElement = document.getElementById('loading');
    const errorElement = document.getElementById('error');
    const profileElement = document.getElementById('profile');

    try {
        loadingElement.style.display = 'block';
        errorElement.style.display = 'none';
        
        const user = await fetchUserData(userId);
        
        profileElement.innerHTML = createUserCard(user);
        profileElement.style.display = 'block';
        
    } catch (error) {
        errorElement.textContent = 'Failed to load user profile';
        errorElement.style.display = 'block';
    } finally {
        loadingElement.style.display = 'none';
    }
}

// 5. Modern Array Methods and Functional Programming
const processUserData = (users) => {
    return users
        .filter(user => user.active)
        .map(user => ({
            ...user,
            displayName: \`\${user.firstName} \${user.lastName}\`
        }))
        .sort((a, b) => a.displayName.localeCompare(b.displayName));
};

// 6. Class-based Component Pattern
class UserManager {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.users = [];
        this.init();
    }

    async init() {
        await this.loadUsers();
        this.render();
        this.attachEventListeners();
    }

    async loadUsers() {
        this.users = await fetchUserData();
    }

    render() {
        this.container.innerHTML = this.users
            .map(user => createUserCard(user))
            .join('');
    }

    attachEventListeners() {
        this.container.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                const userId = e.target.dataset.userId;
                this.deleteUser(userId);
            }
        });
    }
}`}
            />
          </div>

          {/* JavaScript Best Practices */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-foreground">Core JavaScript Skills Demonstrated</CardTitle>
              <p className="text-muted-foreground">Comprehensive understanding of JavaScript fundamentals through advanced concepts</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-tech-js">Technical Proficiencies</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-js rounded-full"></div>
                      <span>ES6+ syntax and modern JavaScript features</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-js rounded-full"></div>
                      <span>DOM manipulation and event handling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-js rounded-full"></div>
                      <span>Asynchronous programming with Promises</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-js rounded-full"></div>
                      <span>Object-oriented programming with classes</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-tech-js">Implementation Highlights</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-js rounded-full"></div>
                      <span>Interactive user interfaces</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-js rounded-full"></div>
                      <span>RESTful API integration and data handling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-js rounded-full"></div>
                      <span>Error handling and debugging techniques</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-tech-js rounded-full"></div>
                      <span>Performance optimization techniques</span>
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