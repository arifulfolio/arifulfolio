import React from "react";
import { useParams, Link } from "react-router-dom";
import { Section } from "../components/Section";
import {
  ArrowLeft,
  PenTool,
  Layout,
  Smartphone,
  Monitor,
  CheckCircle,
  ArrowRight,
  Zap,
  DollarSign,
  Layers,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

const ServiceDetails = () => {
  const { id } = useParams();

  // Mock data mapping (In real app, fetch by ID)
  const serviceData = {
    title: "Brand Identity Design",
    description:
      "We craft unique and memorable brand identities that help your business stand out in a crowded market. From logos to comprehensive brand guidelines, we ensure consistency across all touchpoints.",
    icon: <PenTool size={40} />,
    features: [
      "Logo Design & Variations",
      "Color Palette Selection",
      "Typography Systems",
      "Brand Guidelines Book",
      "Social Media Kits",
      "Stationery Design",
    ],
    images: [
      `https://picsum.photos/seed/s${id}1/800/600`,
      `https://picsum.photos/seed/s${id}2/800/600`,
    ],
    pricing: [
      {
        name: "Starter",
        price: "$999",
        features: ["Logo Design", "Color Palette", "Typography", "2 Revisions"],
      },
      {
        name: "Professional",
        price: "$2499",
        features: [
          "Full Brand Identity",
          "Social Media Kit",
          "Stationery",
          "Brand Guidelines",
          "5 Revisions",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "$4999",
        features: [
          "Everything in Pro",
          "Marketing Collateral",
          "Website UI Design",
          "Unlimited Revisions",
          "Priority Support",
        ],
      },
    ],
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 group"
        >
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
            <ArrowLeft size={16} />
          </div>
          Back to Services
        </Link>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-8 border border-primary/30 shadow-lg shadow-primary/10">
              {serviceData.icon}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight">
              {serviceData.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              {serviceData.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {serviceData.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-dark-800/50 p-4 rounded-xl border border-white/5"
                >
                  <CheckCircle
                    className="text-primary flex-shrink-0"
                    size={20}
                  />
                  <span className="font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <Link
                to="/contact"
                className="bg-primary text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-white hover:text-black transition-all shadow-xl hover:shadow-2xl"
              >
                Start a Project <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          <div className="space-y-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[100px] -z-10"></div>
            {serviceData.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.2 }}
                className={`rounded-3xl overflow-hidden border border-white/10 shadow-2xl ${
                  i === 1 ? "ml-12 -mt-12" : ""
                }`}
              >
                <img
                  src={img}
                  alt="Service Detail"
                  className="w-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-dark-900 rounded-[3rem] p-12 md:p-16 border border-white/5 relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="text-center mb-16 relative z-10">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-primary/30 pb-2 mb-4 inline-block">
              Workflow
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              How We <span className="text-primary">Work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understanding your goals & needs",
                icon: <Zap size={20} />,
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Planning the perfect roadmap",
                icon: <Layers size={20} />,
              },
              {
                step: "03",
                title: "Creation",
                desc: "Designing with pixel perfection",
                icon: <Layout size={20} />,
              },
              {
                step: "04",
                title: "Launch",
                desc: "Delivery and final polish",
                icon: <Rocket size={20} />,
              },
            ].map((item, i) => (
              <div key={i} className="text-center relative group">
                <div className="w-16 h-16 mx-auto bg-dark-800 rounded-full border border-white/10 flex items-center justify-center relative z-10 mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing for Service */}
        <div className="mb-20">
          <h2 className="text-4xl font-display font-bold text-center mb-16">
            Simple <span className="text-primary">Pricing</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceData.pricing.map((plan, i) => (
              <div
                key={i}
                className={`bg-dark-800 p-8 rounded-3xl border transition-all ${
                  plan.popular
                    ? "border-primary shadow-[0_0_30px_rgba(56,39,200,0.15)] scale-105 z-10"
                    : "border-white/5 hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="text-primary text-xs font-bold uppercase tracking-wider mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-display font-bold text-white mb-8">
                  {plan.price}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-300 text-sm"
                    >
                      <CheckCircle
                        size={16}
                        className="text-primary shrink-0"
                      />{" "}
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-white hover:text-black"
                      : "bg-white/5 text-white hover:bg-white hover:text-black"
                  }`}
                >
                  Choose Plan <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary/10 rounded-3xl p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-bold mb-6">
            Not sure which plan is right for you?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us for a custom quote tailored to your specific project
            requirements.
          </p>
          <Link
            to="/contact"
            className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors"
          >
            Get Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
