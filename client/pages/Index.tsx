import { Link } from "react-router-dom";
import {
  Shield,
  Database,
  FileText,
  Search,
  Plus,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-security-50 to-background py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary shadow-lg">
                <Shield className="h-10 w-10 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Securing Cultural Heritage
              <span className="block text-primary">Through Community</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              PatchTracker is a crowdsourced platform helping museums and
              archives identify and fix security vulnerabilities in their legacy
              systems. Join our mission to protect cultural heritage through
              collaborative security.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 w-full sm:w-auto">
                <Link to="/directory">
                  <Search className="mr-2 h-5 w-5" />
                  Browse Systems
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-8 w-full sm:w-auto"
              >
                <Link to="/register">
                  <Plus className="mr-2 h-5 w-5" />
                  Register System
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-security-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How PatchTracker Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A simple three-step process to crowdsource security solutions for
              legacy systems
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-security-100">
                  <Database className="h-8 w-8 text-security-600" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  Register Systems
                </h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  Museums and archives register their legacy systems with
                  details about vendor, version, and known security issues.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-warning-100">
                  <FileText className="h-8 w-8 text-warning-600" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  Submit Fixes
                </h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  Security experts and community members contribute patches and
                  workarounds for identified vulnerabilities.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-success-100">
                  <CheckCircle className="h-8 w-8 text-success-600" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  Community Review
                </h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  Submissions are reviewed and approved by moderators before
                  being made available to the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/50 py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">150+</div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">
                  Systems Registered
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">89</div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">
                  Security Fixes
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">24</div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">
                  Contributing Institutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Contribute?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Help us build a safer future for cultural heritage systems.
              Whether you manage systems or have security expertise, your
              contribution matters.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/register">
                  <Plus className="mr-2 h-5 w-5" />
                  Register Your System
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link to="/submit-fix">
                  <FileText className="mr-2 h-5 w-5" />
                  Submit a Security Fix
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="border-t bg-warning-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-warning-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">
                  Security Notice
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  All submissions are reviewed before publication. This platform
                  is for educational and collaborative purposes. Always test
                  patches in non-production environments and follow your
                  institution's security protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
