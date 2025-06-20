import { Separator } from "./ui/separator";

const services = [
  {
    title: "AI Automation & Smart Tools",
    description: "Use AI to streamline business processes, automate content creation, build smart assistants that reduce manual work and many more.",
    features: [
      "AI-driven content and response generation",
      "Process automation using custom models",
      "Business assistant and chatbot integration",
      "Real-time insight generation"
    ],
    svgPath: "/svgs/ai.svg",
  },
  {
    title: "Data Analytics & Visualization",
    description: "Make data useful with clean pipelines, dashboards, and predictive analytics that support better decisions.",
    features: [
      "Data collection and transformation",
      "Interactive dashboards and reports",
      "Trend forecasting and anomaly alerts",
      "Simplified access to business insights"
    ],
    svgPath: "/svgs/analytics.svg",
  },
  {
    title: "System Integration & API Services",
    description: "Connect your tools and platforms with custom APIs and integrations for smooth and scalable operations.",
    features: [
      "Custom API design and implementation",
      "Third-party service integration",
      "Secure and scalable data flow",
    ],
    svgPath: "/svgs/api.svg",
  },
  {
    title: "Backend Systems Development",
    description: "Build the core of your applications with secure, fast, and scalable backend systems tailored to your business logic.",
    features: [
      "Modular and scalable architecture",
      "Database planning and optimization",
      "User and permission management",
      "Performance and uptime monitoring"
    ],
    svgPath: "/svgs/backend.svg",
  },
  {
    title: "Cloud Deployment & DevOps",
    description: "Set up cloud environments, automate deployments, and keep systems reliable with smart infrastructure practices.",
    features: [
      "Cloud environment setup and scaling",
      "Deployment automation (CI/CD)",
      "System monitoring and logging",
      "Cost-efficient resource management"
    ],
    svgPath: "/svgs/cloud.svg",
  },
  {
    title: "Email & Communication Systems",
    description: "Set up email platforms and automate communication flows to improve outreach, support, and internal messaging.",
    features: [
      "Professional email and domain setup",
      "Automated email workflows",
      "Email marketing system integration",
      "Team chat and collaboration tools"
    ],
    svgPath: "/svgs/email.svg",
  },
  {
    title: "Full Stack Development",
    description: "Design and build full applications from user interface to backend — optimized for performance, usability, and deployment.",
    features: [
      "Frontend and backend development",
      "Data and user management",
      "Responsive design implementation",
      "End-to-end deployment and testing"
    ],
    svgPath: "/svgs/fullstack.svg",
  },
  {
    title: "Machine Learning & AI Models",
    description: "Develop machine learning systems for personalization, predictions, language tasks, or visual recognition.",
    features: [
      "Custom ML model creation and tuning",
      "Text and language processing",
      "Image and document analysis",
      "Recommendation and scoring systems"
    ],
    svgPath: "/svgs/ml.svg",
  },
  {
    title: "Mobile App Development",
    description: "Build mobile apps that run smoothly across devices, with features that users expect and designs that stand out.",
    features: [
      "Native and cross-platform development",
      "Push notifications and real-time updates",
      "Mobile-friendly interface design",
      "Store listing and performance tuning"
    ],
    svgPath: "/svgs/mobile.svg",
  },
  {
    title: "User Interface & Experience Design",
    description: "Design clean, functional user interfaces that improve usability, brand consistency, and conversion rates.",
    features: [
      "User flow and journey mapping",
      "Wireframing and prototyping",
      "Modern, responsive visual design",
      "Feedback-driven design improvement"
    ],
    svgPath: "/svgs/uiux.svg",
  },
  {
    title: "Web Development & Optimization",
    description: "Develop high-performance websites that are fast, mobile-friendly, and optimized for both users and search engines.",
    features: [
      "Responsive and accessible design",
      "SEO-friendly development",
      "Page speed and performance tuning",
      "Maintenance and uptime support"
    ],
    svgPath: "/svgs/web.svg",
  },
];

export default async function Services() {
  return (
    <section className="py-16 px-6" id="services">
      <div>
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            At BuildSleek, we offer a comprehensive range of services designed to meet your
            digital needs and exceed your expectations with cutting-edge technology solutions.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={service.title} className="rounded-lg">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 rounded-lg border-1.5 border backdrop-blur-sm bg-glassmorphic 
                ${index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'}`}>
                
                {/* Illustration Section */}
                <div className={`p-8 lg:p-12 flex items-center justify-center order-1 lg:bg-transparent ${
                  index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <div className="relative">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl transform rotate-3"></div>
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-xl transform -rotate-3"></div>
                    
                    {/* Main container */}
                    <div className="relative backdrop-blur-md rounded-xl p-8 shadow-lg">
                      {/* Grid pattern background */}
                      <div 
                        className="absolute inset-0 opacity-10 rounded-xl"
                        style={{
                          backgroundImage: `
                            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
                          `,
                          backgroundSize: '24px 24px'
                        }}
                      />
                      
                      {/* Icon container */}
                      <div className="relative z-10 w-48 h-48 lg:w-56 lg:h-56 bg-gradient-to-br rounded-lg flex items-center justify-center">
                        <img
                          src={service.svgPath}
                          alt={service.title}
                          loading="lazy"
                          className="w-40 h-40 lg:w-48 lg:h-48 object-contain"
                        />
                      </div>
                      
                      {/* Floating elements */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-80"></div>
                      <div className="absolute bottom-4 left-4 w-2 h-2 bg-primary rounded-full opacity-80"></div>
                      <div className="absolute top-1/2 left-4 w-1 h-1 bg-blue-300 rounded-full opacity-80"></div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center order-2 ${
                  index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <div className="space-y-4 mb-6">
                    <h3 className="text-2xl lg:text-3xl text-primary font-bold leading-tight">{service.title}</h3>
                    <Separator/>
                    <p className="text-base leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <span className="text-base font-medium">-&gt; {feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
