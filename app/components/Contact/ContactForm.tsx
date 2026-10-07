"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  User,
  Mail,
  Phone,
  Building,
  MessageSquare,
  FileText,
  RefreshCw,
} from "lucide-react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  inquiryType: string;
  subject: string;
  message: string;
}

const INITIAL_FORM_STATE: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  inquiryType: "nitrofix-product",
  subject: "",
  message: "",
};

const INQUIRY_OPTIONS = [
  { value: "nitrofix-product", label: "NitroFIX™ Product & Bulk Distribution" },
  { value: "crop-inputs", label: "Agricultural Inputs & Fertilizers" },
  { value: "orchard-trials", label: "Orchard Trials & Biomass Upcycling" },
  { value: "commercial-partnership", label: "Commercial Distribution & Retail" },
  { value: "technical-support", label: "Technical Agronomy Support" },
  { value: "general", label: "General Inquiry" },
];

export interface ContactFormProps {
  className?: string;
  onSuccess?: (data: ContactFormData) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  className = "",
  onSuccess,
}) => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submissionId, setSubmissionId] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }));
    if (errors.inquiryType) {
      setErrors((prev) => ({ ...prev, inquiryType: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject for your inquiry.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide more details (at least 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate dispatch
    await new Promise((resolve) => setTimeout(resolve, 600));

    const generatedId = `FHI-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionId(generatedId);
    setIsSubmitting(false);
    setIsSubmitted(true);

    if (onSuccess) {
      onSuccess(formData);
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setErrors({});
    setIsSubmitted(false);
    setSubmissionId("");
  };

  return (
    <div
      className={`bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 md:p-9 shadow-sm flex flex-col justify-between ${className}`}
    >
      {/* ── Header ── */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.25em] text-[#2d6a4f] mb-2 font-mono">
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
          <span>Direct Inquiry Form</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-space">
          Send Us a Message
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed font-work-sans">
          Fill in the details below. Our agricultural inputs and precision technology specialists will reply promptly.
        </p>
      </div>

      {isSubmitted ? (
        /* ── Success Confirmation Screen ── */
        <div className="py-8 sm:py-12 flex flex-col items-center text-center animate-fadeIn flex-1 justify-center">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6 shadow-sm border border-emerald-200/60">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 block mb-2">
            Inquiry Dispatched
          </span>

          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2 font-space">
            Thank You, {formData.fullName}!
          </h3>

          <p className="text-sm text-slate-600 max-w-md mb-6 leading-relaxed font-work-sans">
            Your message has been received by the Farm Health Innovations team. We will get back to you shortly.
          </p>

          {/* Reference Card */}
          <div className="w-full max-w-md bg-slate-50 border border-slate-200/80 rounded-2xl p-5 mb-8 text-left space-y-2.5">
            <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-200">
              <span className="text-slate-500 font-medium font-work-sans">Tracking Reference:</span>
              <span className="font-mono font-bold text-slate-900">{submissionId}</span>
            </div>
            <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-200">
              <span className="text-slate-500 font-medium font-work-sans">Sender Email:</span>
              <span className="font-medium text-slate-900 truncate max-w-[200px] font-mono">{formData.email}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500 font-medium font-work-sans">Service Area:</span>
              <span className="font-semibold text-emerald-800 font-space">
                {INQUIRY_OPTIONS.find((o) => o.value === formData.inquiryType)?.label || formData.inquiryType}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              type="button"
              variant="primary"
              onClick={handleReset}
              icon={<RefreshCw className="w-4 h-4" />}
            >
              Send Another Message
            </Button>
          </div>
        </div>
      ) : (
        /* ── Form Inputs ── */
        <form onSubmit={handleSubmit} noValidate className="space-y-5 flex-1 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <Input
                label="Full Name *"
                id="fullName"
                name="fullName"
                type="text"
                icon={<User className="w-4 h-4" />}
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Aamir Khan"
                error={errors.fullName}
              />

              <Input
                label="Email Address *"
                id="email"
                name="email"
                type="email"
                icon={<Mail className="w-4 h-4" />}
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. aamir@farmhealth.in"
                error={errors.email}
              />
            </div>

            {/* Row 2: Phone Number & Farm / Organization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <Input
                label="Phone Number"
                id="phone"
                name="phone"
                type="tel"
                icon={<Phone className="w-4 h-4" />}
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 94038 90112"
              />

              <Input
                label="Farm / Enterprise Name"
                id="organization"
                name="organization"
                type="text"
                icon={<Building className="w-4 h-4" />}
                value={formData.organization}
                onChange={handleChange}
                placeholder="e.g. Kashmir Valley Orchards / Agri Distributor"
              />
            </div>

            {/* Row 3: Service Interest dropdown & Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <Select
                label="Inquiry Topic"
                options={INQUIRY_OPTIONS}
                value={formData.inquiryType}
                onChange={handleSelectChange}
                placeholder="Select inquiry topic..."
              />

              <Input
                label="Subject *"
                id="subject"
                name="subject"
                type="text"
                icon={<FileText className="w-4 h-4" />}
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. NitroFIX Bulk Order & Orchard Trials"
                error={errors.subject}
              />
            </div>

            {/* Row 4: Message / Farm Details Textarea */}
            <div className="space-y-1">
              <label
                htmlFor="message"
                className="block text-xs font-semibold text-slate-700 tracking-tight font-space"
              >
                Message &amp; Crop Requirements *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your crops, orchard acreage, location, or specific product inquiries..."
                className={`w-full px-3.5 py-2.5 bg-slate-50/80 border ${
                  errors.message
                    ? "border-red-400 focus:ring-red-200 focus:border-red-500"
                    : "border-slate-300 focus:ring-emerald-600/20 focus:border-emerald-600"
                } rounded-xl text-sm text-slate-900 placeholder-slate-400 transition-all focus:bg-white focus:outline-none focus:ring-2 resize-y font-work-sans`}
              />
              {errors.message && (
                <p className="text-xs text-red-500 font-medium pt-0.5">{errors.message}</p>
              )}
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-2 flex justify-end">
            <Button
              type="submit"
              variant="primary"
              loading={isSubmitting}
              icon={<Send className="w-4 h-4" />}
            >
              Submit Message
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
