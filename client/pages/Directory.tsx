import { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Calendar,
  Building,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data - in a real app, this would come from Supabase
const mockSystems = [
  {
    id: 1,
    name: "Digital Archive Management System",
    vendor: "Greenstone",
    year: 2018,
    platform: "Linux/Apache",
    purpose: "Digital collection management",
    lastPatch: "2022-03-15",
    knownIssues: ["XSS vulnerability in search", "Outdated SSL certificates"],
    fixes: 3,
    status: "critical",
    institution: "Metropolitan Museum of Art",
  },
  {
    id: 2,
    name: "Collection Database",
    vendor: "Microsoft",
    year: 2015,
    platform: "SQL Server",
    purpose: "Artifact cataloging",
    lastPatch: "2023-11-20",
    knownIssues: ["Weak password policy"],
    fixes: 1,
    status: "moderate",
    institution: "Smithsonian Institution",
  },
  {
    id: 3,
    name: "Visitor Management Portal",
    vendor: "Custom Development",
    year: 2016,
    platform: "PHP/MySQL",
    purpose: "Online ticket booking",
    lastPatch: "2024-01-10",
    knownIssues: [],
    fixes: 0,
    status: "secure",
    institution: "Museum of Science",
  },
  {
    id: 4,
    name: "Digital Preservation System",
    vendor: "Fedora Commons",
    year: 2019,
    platform: "Java/Tomcat",
    purpose: "Long-term digital preservation",
    lastPatch: "2021-08-30",
    knownIssues: [
      "Remote code execution via file upload",
      "Information disclosure",
    ],
    fixes: 5,
    status: "critical",
    institution: "Library of Congress",
  },
  {
    id: 5,
    name: "Exhibition Planning Tool",
    vendor: "Gallery Systems",
    year: 2020,
    platform: "Cloud-based",
    purpose: "Exhibition management",
    lastPatch: "2024-02-15",
    knownIssues: ["CSRF vulnerability"],
    fixes: 2,
    status: "moderate",
    institution: "Art Institute of Chicago",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "critical":
      return "destructive";
    case "moderate":
      return "warning";
    case "secure":
      return "success";
    default:
      return "secondary";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "critical":
      return <AlertTriangle className="h-4 w-4" />;
    case "moderate":
      return <Clock className="h-4 w-4" />;
    case "secure":
      return <CheckCircle className="h-4 w-4" />;
    default:
      return null;
  }
};

export default function Directory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVendor, setSelectedVendor] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  const vendors = useMemo(() => {
    const vendorSet = new Set(mockSystems.map((system) => system.vendor));
    return Array.from(vendorSet).sort();
  }, []);

  const years = useMemo(() => {
    const yearSet = new Set(
      mockSystems.map((system) => system.year.toString()),
    );
    return Array.from(yearSet).sort((a, b) => parseInt(b) - parseInt(a));
  }, []);

  const filteredSystems = useMemo(() => {
    return mockSystems.filter((system) => {
      const matchesSearch =
        system.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        system.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        system.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
        system.purpose.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesVendor =
        selectedVendor === "all" || system.vendor === selectedVendor;

      const matchesStatus =
        selectedStatus === "all" || system.status === selectedStatus;

      const matchesYear =
        selectedYear === "all" || system.year.toString() === selectedYear;

      return matchesSearch && matchesVendor && matchesStatus && matchesYear;
    });
  }, [searchTerm, selectedVendor, selectedStatus, selectedYear]);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            System Directory
          </h1>
          <p className="mt-2 text-muted-foreground">
            Browse and search registered legacy systems from museums and
            archives worldwide.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search systems, vendors, institutions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Select value={selectedVendor} onValueChange={setSelectedVendor}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter by vendor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Vendors</SelectItem>
                {vendors.map((vendor) => (
                  <SelectItem key={vendor} value={vendor}>
                    {vendor}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="secure">Secure</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter by year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Showing {filteredSystems.length} of {mockSystems.length} systems
          </p>
        </div>

        {/* System Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSystems.map((system) => (
            <Card key={system.id} className="relative">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-6">
                      {system.name}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {system.institution}
                    </CardDescription>
                  </div>
                  <Badge
                    variant={getStatusColor(system.status) as any}
                    className="ml-2 flex items-center gap-1"
                  >
                    {getStatusIcon(system.status)}
                    {system.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Building className="h-3 w-3" />
                      Vendor
                    </div>
                    <div className="font-medium">{system.vendor}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      Year
                    </div>
                    <div className="font-medium">{system.year}</div>
                  </div>
                </div>

                <div className="text-sm">
                  <div className="text-muted-foreground">Platform</div>
                  <div className="font-medium">{system.platform}</div>
                </div>

                <div className="text-sm">
                  <div className="text-muted-foreground">Purpose</div>
                  <div className="font-medium">{system.purpose}</div>
                </div>

                <div className="text-sm">
                  <div className="text-muted-foreground">Last Patch</div>
                  <div className="font-medium">
                    {new Date(system.lastPatch).toLocaleDateString()}
                  </div>
                </div>

                {system.knownIssues.length > 0 && (
                  <div className="text-sm">
                    <div className="text-muted-foreground mb-2">
                      Known Issues ({system.knownIssues.length})
                    </div>
                    <div className="space-y-1">
                      {system.knownIssues.slice(0, 2).map((issue, index) => (
                        <div
                          key={index}
                          className="text-xs bg-warning-50 text-warning-700 px-2 py-1 rounded"
                        >
                          {issue}
                        </div>
                      ))}
                      {system.knownIssues.length > 2 && (
                        <div className="text-xs text-muted-foreground">
                          +{system.knownIssues.length - 2} more issues
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="text-sm">
                    <span className="font-medium text-primary">
                      {system.fixes}
                    </span>{" "}
                    <span className="text-muted-foreground">
                      {system.fixes === 1 ? "fix" : "fixes"} available
                    </span>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSystems.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto h-24 w-24 rounded-full bg-muted flex items-center justify-center mb-4">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No systems found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
