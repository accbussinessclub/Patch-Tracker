import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Shield,
  Search,
  Plus,
  FileText,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/95 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-xl text-foreground">
                PatchTracker
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/directory"
                className={cn(
                  "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary",
                  isActive("/directory")
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                <Search className="h-4 w-4" />
                <span>Directory</span>
              </Link>
              <Link
                to="/register"
                className={cn(
                  "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary",
                  isActive("/register")
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                <Plus className="h-4 w-4" />
                <span>Register System</span>
              </Link>
              <Link
                to="/submit-fix"
                className={cn(
                  "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary",
                  isActive("/submit-fix")
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                <FileText className="h-4 w-4" />
                <span>Submit Fix</span>
              </Link>
              <Link
                to="/admin"
                className={cn(
                  "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary",
                  isActive("/admin") ? "text-primary" : "text-muted-foreground",
                )}
              >
                <Settings className="h-4 w-4" />
                <span>Admin</span>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
                  <Shield className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-semibold text-foreground">
                  PatchTracker
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Crowdsourcing security patches for legacy systems in museums and
                archives.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/directory" className="hover:text-foreground">
                    System Directory
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-foreground">
                    Register System
                  </Link>
                </li>
                <li>
                  <Link to="/submit-fix" className="hover:text-foreground">
                    Submit Fix
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Community</h3>
              <p className="text-sm text-muted-foreground">
                Join our mission to secure cultural heritage through
                collaborative security patching.
              </p>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 PatchTracker. Open source initiative for cultural heritage
              security.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
