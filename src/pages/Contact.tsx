import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "arbin@trulyiconictech.com",
      link: "mailto:arbin@trulyiconictech.com",
      color: "text-primary"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+977-9845320324",
      link: "tel:+9779845320324",
      color: "text-tech-fullstack"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/arbin-giri",
      link: "https://linkedin.com/in/arbin-giri",
      color: "text-tech-css"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/arbin-bit",
      link: "https://github.com/arbin-bit",
      color: "text-foreground"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Gaindakot, Nepal",
      link: "https://maps.google.com/?q=Gaindakot,Nepal",
      color: "text-tech-html"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's connect and discuss 
            how we can bring your ideas to life with modern web technologies.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className={`${contact.color} mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {contact.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {contact.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 break-words">
                  {contact.value}
                </p>
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm"
                  className="w-full hover:bg-primary hover:text-primary-foreground"
                >
                  <a 
                    href={contact.link} 
                    target={contact.link.startsWith('http') ? "_blank" : "_self"}
                    rel={contact.link.startsWith('http') ? "noopener noreferrer" : undefined}
                  >
                    Contact
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Section */}
        <Card className="bg-gradient-card border-border shadow-card mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-foreground">
              About Arbin Giri
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              A passionate Full Stack Developer based in Kathmandu, Nepal, specializing in 
              modern web technologies. With expertise in HTML5, CSS3, JavaScript, Bootstrap, 
              and Node.js, I create responsive and user-friendly web applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Frontend Skills</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• HTML5 & Semantic Structure</li>
                  <li>• CSS3 & Responsive Design</li>
                  <li>• JavaScript & ES6+</li>
                  <li>• Bootstrap Framework</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Backend Skills</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Node.js Development</li>
                  <li>• RESTful API Design</li>
                  <li>• Database Integration</li>
                  <li>• Server-side Logic</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Whether you have a project in mind or just want to connect, 
            I'm always open to discussing new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-primary">
              <a href="mailto:arbin@trulyiconictech.com">
                Send Email
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://linkedin.com/in/arbin-giri" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;