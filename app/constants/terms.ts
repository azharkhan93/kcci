export interface LegalSection {
  id: string;
  title: string;
  content?: string;
  bullets?: string[];
  subsections?: {
    subtitle: string;
    content?: string;
    bullets?: string[];
  }[];
}

export const TERMS_DATA = {
  title: "Terms and Conditions",
  lastUpdated: "7/21/2026",
  company: "Farmhealth Pvt Ltd",
  serviceName: "Farm2i - Precision Farming",
  contactEmail: "hello@farm2i.com",
  intro:
    "Please read these Terms and Conditions carefully before using the Farm2i - Precision Farming mobile application and website operated by Farmhealth Pvt Ltd.",
  sections: [
    {
      id: "acceptance-of-terms",
      title: "Acceptance of Terms",
      content:
        "By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.",
    },
    {
      id: "user-accounts",
      title: "User Accounts",
      content:
        "When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.",
      bullets: [
        "You are responsible for maintaining the confidentiality of your account",
        "You agree to accept responsibility for all activities under your account",
        "You must notify us immediately of any security breaches",
      ],
    },
    {
      id: "service-usage",
      title: "Service Usage",
      content:
        "Our Service provides agricultural insights and recommendations based on the data you provide. While we strive for accuracy, you acknowledge that:",
      bullets: [
        "Recommendations are advisory in nature and not guaranteed",
        "Results may vary based on multiple factors beyond our control",
        "You are responsible for validating recommendations before implementation",
        "The Service may be subject to temporary unavailability for maintenance",
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      content:
        "The Service and its original content, features, and functionality are owned by Farmhealth Pvt Ltd and are protected by international copyright, trademark, and other laws.",
    },
    {
      id: "subscription-and-payments",
      title: "Subscription and Payments",
      content: "Some features of the Service require a paid subscription:",
      bullets: [
        "Subscriptions are billed according to your chosen plan",
        "Payments are non-refundable except as required by law",
        "We reserve the right to modify pricing with notice",
        "Subscription cancellation terms are outlined in our Refund Policy",
      ],
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      content:
        "Farmhealth Pvt Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Service.",
    },
    {
      id: "contact-us",
      title: "Contact Us",
      content:
        "If you have questions about these Terms, please contact us at:",
      bullets: ["hello@farm2i.com"],
    },
  ],
  footerNote:
    "We reserve the right to modify these Terms at any time. We will notify you of any material changes through the Service or via email. Your continued use of the Service constitutes acceptance of the modified Terms.",
};
