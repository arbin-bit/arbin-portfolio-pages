import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/fullstack", label: "Full Stack" },
    { path: "/html", label: "HTML" },
    { path: "/css", label: "CSS" },
    { path: "/bootstrap", label: "Bootstrap" },
    { path: "/javascript", label: "JavaScript" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-card border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">
              Portfolio
            </Link>
            
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  asChild
                  className={location.pathname === item.path ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}
                >
                  <Link to={item.path}>{item.label}</Link>
                </Button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden mt-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={location.pathname === item.path ? "default" : "ghost"}
                asChild
                className={`w-full justify-start ${location.pathname === item.path ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <Link to={item.path}>{item.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {children}
      </main>
    </div>
  );
};

export default Layout;