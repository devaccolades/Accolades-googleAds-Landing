"use client"
import React, { useState, useEffect, useRef } from 'react';
import FormModal from './Form';


const WhyChooseUs = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    customers: 0,
    team: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Intersection Observer to trigger animations when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation effect
  useEffect(() => {
    if (!isVisible) return;

    const targets = {
      projects: 1000,
      experience: 10,
      customers: 500,
      team: 50
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const animateCounter = (key, target) => {
      let current = 0;
      const increment = target / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounters(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, stepDuration);
    };

    // Start all counters with slight delays
    setTimeout(() => animateCounter('projects', targets.projects), 200);
    setTimeout(() => animateCounter('experience', targets.experience), 400);
    setTimeout(() => animateCounter('customers', targets.customers), 600);
    setTimeout(() => animateCounter('team', targets.team), 800);
  }, [isVisible]);

  const StatCard = ({ number, suffix, label, delay }) => (
    // <div 
    //   className={`bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ${
    //     isVisible ? 'animate-fade-in-up' : 'opacity-0'
    //   }`}
    //   style={{ animationDelay: `${delay}ms` }}
    // >
    <div 
  className={`bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ${
    isVisible ? 'animate-fade-in-up' : 'opacity-0'
  } min-h-[150px] flex flex-col justify-center`}
  style={{ animationDelay: `${delay}ms` }}
>
      <div className="text-center">
        <div className="text-2xl lg:text-5xl font-bold text-teal-500 mb-4 font-mono">
          {number.toLocaleString()}{suffix}
        </div>
        <div className="text-gray-700 text-[16px] lg:text-lg font-semibold">
          {label}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-400 rounded-full opacity-20"></div>
      <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-teal-300 rounded-full opacity-30"></div>
    </div>
  );

  return (
    <div className=" bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-white opacity-5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-white opacity-5 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-white opacity-5 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-10 right-10 w-6 h-6 border-2 border-white opacity-20 transform rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-32 left-16 w-8 h-8 border-2 border-white opacity-20 animate-bounce"></div>
      
      <div ref={sectionRef} className="containers relative z-10 container mx-auto px-6 py-20">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-8 mb-16">
          <div className="relative">
            <StatCard 
              number={counters.projects} 
              suffix="+" 
              label="Projects Done" 
              delay={0}
            />
          </div>
          <div className="relative">
            <StatCard 
              number={counters.experience} 
              suffix="+" 
              label="Years of Expertise" 
              delay={200}
            />
          </div>
          <div className="relative">
            <StatCard 
              number={counters.customers} 
              suffix="+" 
              label="Happy Customers" 
              delay={400}
            />
          </div>
          <div className="relative">
            <StatCard 
              number={counters.team} 
              suffix="+" 
              label="Team Members" 
              delay={600}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-5xl font-bold mb-2 md:mb-4 lg:mb-8 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{animationDelay: '800ms'}}>
            Why Choose Us.
          </h2>
          
          <div className={`text-sm md:text-xl leading-relaxed font-light ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{animationDelay: '1000ms'}}>
            <p className="mb-6">
              We strictly believe in maximizing your sales, captivate appropriate traffic to your 
              official website, and turn visitors into your potential customers. 
            </p>
            <p>
              Regardless of the business's size, Internet marketing gives access to the mass market at result-oriented pricing, and it inculcates a personal style of successful marketing.
            </p>
          </div>

          {/* Call to Action */}
          <div className={`mt-12 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{animationDelay: '1200ms'}}>
            <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-teal-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <style jsx>{`   
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        /* Custom scrollbar for better aesthetics */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #14b8a6;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #0d9488;
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;