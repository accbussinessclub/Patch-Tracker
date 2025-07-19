import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Building,
  Calendar,
  Cpu,
  FileText,
  AlertTriangle,
  CheckCircle,
  Send,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

const systemRegistrationSchema = z.object({
  systemName: z
    .string()
    .min(2, "System name must be at least 2 characters")
    .max(100, "System name must be less than 100 characters"),
  institutionName: z
    .string()
    .min(2, "Institution name must be at least 2 characters")
    .max(100, "Institution name must be less than 100 characters"),
  vendor: z
    .string()
    .min(1, "Vendor is required")
    .max(50, "Vendor name must be less than 50 characters"),
  year: z
    .number()
    .min(1990, "Year must be 1990 or later")
    .max(new Date().getFullYear(), "Year cannot be in the future"),
  platform: z
    .string()
    .min(1, "Platform is required")
    .max(100, "Platform description must be less than 100 characters"),
  purpose: z
    .string()
    .min(10, "Purpose must be at least 10 characters")
    .max(500, "Purpose must be less than 500 characters"),
  knownIssues: z
    .string()
    .max(2000, "Known issues must be less than 2000 characters")
    .optional(),
  justification: z
    .string()
    .min(20, "Justification must be at least 20 characters")
    .max(1000, "Justification must be less than 1000 characters"),
  contactEmail: z.string().email("Please enter a valid email address"),
  urgencyLevel: z.enum(["low", "medium", "high", "critical"]),
  hasPublicExposure: z.boolean(),
  hasPersonalData: z.boolean(),
});

type SystemRegistrationData = z.infer<typeof systemRegistrationSchema>;

const commonVendors = [
  "Microsoft",
  "Oracle",
  "IBM",
  "Adobe",
  "Apple",
  "Google",
  "Amazon",
  "Salesforce",
  "SAP",
  "VMware",
  "Greenstone",
  "Fedora Commons",
  "DSpace",
  "Omeka",
  "Gallery Systems",
  "Vernon Systems",
  "Axiell",
  "Custom Development",
  "Open Source",
  "Other",
];

const platforms = [
  "Windows Server",
  "Linux",
  "macOS",
  "Unix",
  "Cloud-based (AWS)",
  "Cloud-based (Azure)",
  "Cloud-based (Google Cloud)",
  "Web-based",
  "Database (MySQL)",
  "Database (PostgreSQL)",
  "Database (SQL Server)",
  "Database (Oracle)",
  "PHP/Apache",
  "Node.js",
  "Python/Django",
  "Java/Tomcat",
  "Other",
];

export default function RegisterSystem() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm<SystemRegistrationData>({
    resolver: zodResolver(systemRegistrationSchema),
    defaultValues: {
      urgencyLevel: "medium",
      hasPublicExposure: false,
      hasPersonalData: false,
    },
  });

  const onSubmit = async (data: SystemRegistrationData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call - in real app, this would send to Supabase
      console.log("Submitting system registration:", data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Error submitting registration:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <Card className="text-center">
              <CardContent className="pt-8 pb-8">
                <div className="mx-auto h-16 w-16 rounded-full bg-success-100 flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-success-600" />
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-4">
                  Registration Submitted Successfully!
                </h1>
                <p className="text-muted-foreground mb-6">
                  Your system registration has been submitted for review. Our
                  moderation team will evaluate your submission and you'll be
                  notified once it's approved and visible in the directory.
                </p>
                <div className="space-y-4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      <strong>What happens next?</strong>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>
                          • Your submission will be reviewed within 48 hours
                        </li>
                        <li>
                          • You'll receive an email confirmation once approved
                        </li>
                        <li>
                          • The system will appear in the public directory
                        </li>
                        <li>
                          • Community members can start submitting security
                          fixes
                        </li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                  <div className="flex gap-4 justify-center">
                    <Button
                      onClick={() => {
                        setSubmitSuccess(false);
                        form.reset();
                      }}
                    >
                      Register Another System
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/directory">Browse Directory</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">
              Register Legacy System
            </h1>
            <p className="mt-2 text-muted-foreground">
              Help us build a comprehensive database of legacy systems in
              museums and archives by registering your system details.
            </p>
          </div>

          {/* Important Notice */}
          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Important:</strong> Only register systems that you have
              authorization to submit. All submissions are reviewed before
              publication. Do not include sensitive credentials or internal
              network details.
            </AlertDescription>
          </Alert>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Basic Information
                  </CardTitle>
                  <CardDescription>
                    General information about your system and institution
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="systemName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>System Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Digital Archive Management System"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          The common name or title of your system
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="institutionName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Institution Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Metropolitan Museum of Art"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          The name of your museum, archive, or cultural
                          institution
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contactEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Email *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="contact@institution.org"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Email for moderation team to contact you if needed
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Technical Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="h-5 w-5" />
                    Technical Details
                  </CardTitle>
                  <CardDescription>
                    Information about the system's vendor, platform, and
                    specifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="vendor"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vendor *</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select vendor" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {commonVendors.map((vendor) => (
                                <SelectItem key={vendor} value={vendor}>
                                  {vendor}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="year"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Installation Year *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min={1990}
                              max={new Date().getFullYear()}
                              placeholder="2018"
                              {...field}
                              onChange={(e) =>
                                field.onChange(parseInt(e.target.value))
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="platform"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Platform/Technology *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select platform" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {platforms.map((platform) => (
                              <SelectItem key={platform} value={platform}>
                                {platform}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          The primary technology platform or stack
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Purpose and Issues */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Purpose and Issues
                  </CardTitle>
                  <CardDescription>
                    Describe what the system does and any known security
                    concerns
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="purpose"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>System Purpose *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., Digital collection management system for cataloging and providing public access to historical artifacts and documents..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Describe what this system is used for in your
                          institution
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="knownIssues"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Known Security Issues</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., Outdated SSL certificates, weak password policy, unpatched vulnerabilities..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          List any known security vulnerabilities,
                          misconfigurations, or concerns (optional but helpful)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="justification"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Justification for Registration *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., This system handles sensitive historical data and hasn't been updated in several years. We need community help to identify and fix security issues..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Explain why you're registering this system and what
                          help you're seeking
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Risk Assessment */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Risk Assessment
                  </CardTitle>
                  <CardDescription>
                    Help us understand the security context and urgency
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="urgencyLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Urgency Level *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="low">
                              <div className="flex items-center gap-2">
                                <Badge variant="success" className="text-xs">
                                  Low
                                </Badge>
                                <span>No immediate concerns</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="medium">
                              <div className="flex items-center gap-2">
                                <Badge variant="warning" className="text-xs">
                                  Medium
                                </Badge>
                                <span>Some security concerns</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="high">
                              <div className="flex items-center gap-2">
                                <Badge
                                  variant="destructive"
                                  className="text-xs"
                                >
                                  High
                                </Badge>
                                <span>Known vulnerabilities</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="critical">
                              <div className="flex items-center gap-2">
                                <Badge
                                  variant="destructive"
                                  className="text-xs"
                                >
                                  Critical
                                </Badge>
                                <span>Active security threats</span>
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          How urgent is the need for security fixes?
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="hasPublicExposure"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Public Internet Exposure</FormLabel>
                            <FormDescription>
                              System is accessible from the internet
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="hasPersonalData"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Contains Personal Data</FormLabel>
                            <FormDescription>
                              System processes visitor or staff data
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4">
                <Button type="submit" disabled={isSubmitting} size="lg">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Registration
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
