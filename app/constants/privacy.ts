export interface PrivacySubsection {
  subtitle: string;
  content?: string;
  bullets?: string[];
}

export interface PrivacySection {
  id: string;
  title: string;
  content?: string;
  bullets?: string[];
  subsections?: PrivacySubsection[];
  note?: string;
}

export const PRIVACY_DATA = {
  title: "Privacy Policy",
  lastUpdated: "7/21/2026",
  company: "Farmhealth Pvt Ltd.",
  serviceName: "Farm2i - Precision Farming",
  contactEmail: "hello@farm2i.com",
  intro:
    'Farmhealth Pvt Ltd. ("us", "we", or "our") operates the Farm2i - Precision Farming mobile application and website (collectively, the "Service"). This Privacy Policy explains how we collect, use, protect, and share your personal information when you use our Service.',
  sections: [
    {
      id: "information-we-collect",
      title: "Information We Collect",
      subsections: [
        {
          subtitle: "Personal Information",
          content:
            "When you use our Service, we may collect the following personal information:",
          bullets: [
            "Name and phone number for account creation and communication",
            "Farm location, size, and boundary information for service optimization",
            "Crop types, farming practices, and agricultural data for analysis and recommendations",
            "Payment information when you subscribe to premium features",
            "Profile pictures and user preferences",
          ],
        },
        {
          subtitle: "Automatically Collected Information",
          content:
            "We automatically collect certain information when you use our Service:",
          bullets: [
            "Device information (type, model, operating system)",
            "IP address and location data",
            "Usage patterns and interaction with features",
            "Performance data and error logs",
            "Browser type and settings",
          ],
        },
      ],
    },
    {
      id: "how-we-use-your-information",
      title: "How We Use Your Information",
      content:
        "We use the collected information for the following purposes:",
      bullets: [
        "Provide and maintain our Service, including personalized recommendations and alerts",
        "Analyze crop patterns and provide agricultural insights",
        "Process payments and send transaction notifications",
        "Communicate updates, newsletters, and support responses",
        "Improve our Service through usage analysis",
        "Detect and prevent fraudulent activities",
      ],
    },
    {
      id: "data-sharing",
      title: "Data Sharing",
      content: "We may share your information with:",
      bullets: [
        "Service providers who assist in operating our platform",
        "Agricultural partners for improved recommendations (with your consent)",
        "Legal authorities when required by law",
        "Business partners for joint features (with your consent)",
      ],
      note: "We do not sell your personal information to third parties.",
    },
    {
      id: "data-security",
      title: "Data Security",
      content: "We implement robust security measures to protect your data:",
      bullets: [
        "End-to-end encryption for sensitive data transmission",
        "Regular security audits and penetration testing",
        "Multi-factor authentication options",
        "Secure cloud infrastructure with regular backups",
        "Employee access controls and security training",
      ],
    },
    {
      id: "your-rights-and-choices",
      title: "Your Rights and Choices",
      content:
        "You have the following rights regarding your personal information:",
      bullets: [
        "Access and download your data",
        "Correct inaccurate information",
        "Delete your account and associated data",
        "Opt-out of marketing communications",
        "Control location tracking and data sharing preferences",
      ],
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      content:
        "Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.",
    },
    {
      id: "contact-us",
      title: "Contact Us",
      content:
        "If you have questions about this Privacy Policy or our practices, please contact us at:",
      bullets: ["hello@farm2i.com"],
    },
  ],
  footerNote:
    "We reserve the right to update this Privacy Policy at any time. We will notify you of any material changes through the Service or via email before the changes become effective. Your continued use of the Service after such modifications constitutes your acknowledgment of the modified Privacy Policy.",
};
