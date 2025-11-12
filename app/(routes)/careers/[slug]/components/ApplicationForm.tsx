"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Label } from "@/app/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { toast } from "sonner";
import { Loader2, Upload, FileText, X, CheckCircle2 } from "lucide-react";
import { useSubmitApplication } from "@/app/api/career/careerHooks";
import { ApplicationSource } from "@/app/api/career/types";
import { assetsService } from "@/app/api/assets/assetsService";
import { AssetContext } from "@/app/api/assets/types";

interface ApplicationFormProps {
  careerSlug: string;
  careerTitle: string;
}

// Form validation schema
const applicationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
  coverLetter: z.string().optional(),
  howDidYouHear: z.nativeEnum(ApplicationSource),
  agreedToTerms: z
    .boolean()
    .refine((val) => val === true, "You must agree to the terms"),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

export function ApplicationForm({
  careerSlug,
  careerTitle,
}: ApplicationFormProps) {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);
  const [isUploadingResume, setIsUploadingResume] = useState(false);

  const submitApplicationMutation = useSubmitApplication();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      agreedToTerms: false,
    },
  });

  const agreedToTerms = watch("agreedToTerms");

  // Handle resume file upload
  const handleResumeUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!validTypes.includes(file.type)) {
      toast.error("Please upload a PDF or Word document");
      return;
    }

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error("File size must be less than 10MB");
      return;
    }

    setResumeFile(file);

    // Upload immediately with async toast
    const uploadPromise = assetsService
      .uploadDocument(file, AssetContext.RESUMES)
      .then((url) => {
        setResumeUrl(url);
        return url;
      })
      .catch((error) => {
        setResumeFile(null);
        throw error;
      });

    toast.promise(uploadPromise, {
      loading: "Uploading resume...",
      success: "Resume uploaded successfully!",
      error: "Failed to upload resume. Please try again.",
    });

    setIsUploadingResume(true);
    try {
      await uploadPromise;
    } finally {
      setIsUploadingResume(false);
    }
  };

  const removeResume = () => {
    setResumeFile(null);
    setResumeUrl(null);
  };

  const onSubmit = async (data: ApplicationFormData) => {
    if (!resumeFile || !resumeUrl) {
      toast.error("Please upload your resume");
      return;
    }

    const submitPromise = submitApplicationMutation
      .mutateAsync({
        slug: careerSlug,
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          resumeUrl,
          resumeFileName: resumeFile.name,
          resumeFileSize: resumeFile.size,
          coverLetter: data.coverLetter,
          howDidYouHear: data.howDidYouHear,
          agreedToTerms: data.agreedToTerms,
        },
      })
      .then((response) => {
        reset();
        setResumeFile(null);
        setResumeUrl(null);
        return response;
      });

    toast.promise(submitPromise, {
      loading: "Submitting your application...",
      success: (response) =>
        response.message ||
        "Application submitted successfully! We'll review your application and get back to you soon.",
      error: (error) =>
        error.message || "Failed to submit application. Please try again.",
    });
  };

  const isSubmitting = submitApplicationMutation.isPending;

  return (
    <section id="application-form" className="scroll-mt-8">
      <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Submit an application
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Please fill out the form below to apply for {careerTitle}.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">
                First name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                {...register("firstName")}
                placeholder="John"
                disabled={isSubmitting}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">
                Last name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastName"
                {...register("lastName")}
                placeholder="Doe"
                disabled={isSubmitting}
              />
              {errors.lastName && (
                <p className="text-sm text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Contact Fields */}
          <div className="space-y-2">
            <Label htmlFor="email">
              Email address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="john.doe@example.com"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">
              Phone <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              {...register("phone")}
              placeholder="+91 98765 43210"
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          {/* Resume Upload */}
          <div className="space-y-2">
            <Label htmlFor="resume">
              Resume/CV (Upload) <span className="text-red-500">*</span>
            </Label>
            {!resumeFile ? (
              <div className="mt-2">
                <label
                  htmlFor="resume"
                  className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-zinc-300 bg-white p-8 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
                >
                  <div className="text-center">
                    <Upload className="mx-auto h-10 w-10 text-zinc-400" />
                    <p className="mt-3 text-sm font-medium text-zinc-700">
                      Click to upload or drag and drop
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                      PDF or Word document (max 10MB)
                    </p>
                  </div>
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeUpload}
                    disabled={isSubmitting || isUploadingResume}
                    className="hidden"
                  />
                </label>
              </div>
            ) : (
              <div
                className={`mt-2 flex items-center justify-between rounded-lg border p-4 ${
                  resumeUrl
                    ? "border-green-200 bg-green-50"
                    : "border-zinc-200 bg-zinc-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  {resumeUrl ? (
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  ) : (
                    <FileText className="h-8 w-8 text-zinc-500" />
                  )}
                  <div>
                    <p
                      className={`font-medium ${
                        resumeUrl ? "text-green-900" : "text-zinc-900"
                      }`}
                    >
                      {resumeFile.name}
                    </p>
                    <p
                      className={`text-sm ${
                        resumeUrl ? "text-green-600" : "text-zinc-500"
                      }`}
                    >
                      {(resumeFile.size / 1024).toFixed(2)} KB
                      {resumeUrl && " • Uploaded"}
                    </p>
                  </div>
                </div>
                {!isUploadingResume && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={removeResume}
                    disabled={isSubmitting}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
                {isUploadingResume && (
                  <Loader2 className="h-5 w-5 animate-spin text-zinc-500" />
                )}
              </div>
            )}
          </div>

          {/* Cover Letter */}
          <div className="space-y-2">
            <Label htmlFor="cover-letter">Cover Letter (Optional)</Label>
            <Textarea
              id="cover-letter"
              {...register("coverLetter")}
              placeholder="Tell us why you're interested in this position..."
              rows={5}
              disabled={isSubmitting}
            />
          </div>

          {/* How Did You Hear */}
          <div className="space-y-2">
            <Label htmlFor="howDidYouHear">
              How did you hear about us? <span className="text-red-500">*</span>
            </Label>
            <Select
              onValueChange={(value) =>
                setValue("howDidYouHear", value as ApplicationSource)
              }
              disabled={isSubmitting}
            >
              <SelectTrigger id="howDidYouHear">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(ApplicationSource).map((source) => (
                  <SelectItem key={source} value={source}>
                    {source}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.howDidYouHear && (
              <p className="text-sm text-red-500">
                {errors.howDidYouHear.message}
              </p>
            )}
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) =>
                setValue("agreedToTerms", checked as boolean)
              }
              disabled={isSubmitting}
              className="mt-1"
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms"
                className="text-sm font-medium text-zinc-800"
              >
                I agree to the terms and conditions{" "}
                <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-zinc-600">
                You agree to our Privacy Policy and Terms of Use.
              </p>
            </div>
          </div>
          {errors.agreedToTerms && (
            <p className="text-sm text-red-500">
              {errors.agreedToTerms.message}
            </p>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting || isUploadingResume || !resumeUrl}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}
