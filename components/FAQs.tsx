import { CTAButton } from "./CTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

function FAQ({
  title,
  content,
  val,
}: { title: string; content: string; val: string }) {
  return (
    <AccordionItem value={val}>
      <AccordionTrigger className="text-left text-lg font-semibold">
        {title}
      </AccordionTrigger>
      <AccordionContent className="text-base font-medium leading-relaxed text-primary">
        {content}
      </AccordionContent>
    </AccordionItem>
  );
}

const QnA = [
  {
    question: "What services do you offer?",
    answer:
      "We offer AI automation (content, workflows, smart assistants), data analytics & visualization, API/system integration, secure backend systems, cloud deployment with DevOps, email and communication setup, end-to-end web & mobile development, and custom ML solutions.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most responsive websites take a few weeks, while feature-rich applications may take a few months depending on complexity.",
  },
  {
    question: "Can you help with mobile app development?",
    answer:
      "Yes — we build native (iOS/Android) and cross-platform mobile apps, including real‑time features like push notifications and offline support.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Pricing is customized to your needs: we offer both fixed-price quotes and flexible hourly or retainer options, depending on the project.",
  },
  {
    question: "Do you provide ongoing support after the project is complete?",
    answer:
      "Absolutely. We offer maintenance, monitoring, and support plans to keep your platform secure, responsive, and up-to-date long-term.",
  },
  {
    question: "Can you handle domain and DNS management?",
    answer:
      "Yes — we take care of domain registration, DNS configuration, email setup, and SSL certificates to ensure smooth operation.",
  },
  {
    question: "What if I need changes after the project is done?",
    answer:
      "Changes and updates are no problem. We offer support packages or hourly options so you can evolve your product over time.",
  },
  {
    question: "How do we get started?",
    answer:
      "Reach out to us to discuss your goals. We'll do a quick assessment, share a proposal, and get the project underway with clear milestones.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "We're committed to delivering quality. If something's not right, we'll work with you to fix it. We don't offer refunds, but we do offer revisions.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We specialize in modern stacks like React, Next.js, Node.js, Python, React Native, and also work with cloud platforms and AI services such as ChatGPT, Gemini and more.",
  },
];

export default function FAQs() {
  return (
    <section className="w-full py-16 px-6" id="faq">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Questions? We've got{" "}
        <span className="italic font-serif text-primary">answers</span>.
      </h2>
      
      <Accordion
        type={"multiple"}
        className="border-1.5 border rounded-lg p-6"
      >
        {QnA.map((item, index) => (
          <FAQ
            title={item.question}
            content={item.answer}
            val={"q_item-" + (index + 1)}
            key={index + "_question"}
          />
        ))}
      </Accordion>
      
      <p className="text-lg text-center mt-8 font-medium">
        Still have questions? Now it's definitely the time to{" "}
        <CTAButton
          variant={"link"}
          className="text-primary p-0 text-lg font-semibold"
          message="reach out to us"
        />
        .
      </p>
    </section>
  );
}