'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CheckCircle, Mic, FileText, AlertTriangle, BarChart3, Users, Shield, ArrowRight, Menu, X } from "lucide-react";
import "../app/globals.css";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [email, setEmail] = useState("");

  const quotes = [
    {
      text: "Ziora has transformed how I approach session documentation. I can focus entirely on my patients.",
      author: "Dr. Sarah Chen, Licensed Clinical Psychologist"
    },
    {
      text: "The transcription accuracy is remarkable. It captures nuances I might have missed in my notes.",
      author: "Dr. Michael Rodriguez, LMFT"
    },
    {
      text: "Finally, a tool that understands the clinical workflow. My documentation time has been cut in half.",
      author: "Dr. Jennifer Park, LCSW"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F2EA] text-[#2D3A33]">
      {/* Sticky Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#F5F2EA]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image
            className={'navbarlogo'}
            src="/zioralogo4.png"
            alt="Next.js logo"
            width={500}
            height={250}
            priority
          />
          <div className="text-2xl font-bold font-['Poppins'] text-[#507060]">Ziora</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('features')} className="hover:text-[#507060] transition-colors">Features</button>
            <button onClick={() => scrollToSection('how-it-works')} className="hover:text-[#507060] transition-colors">How It Works</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-[#507060] transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('team')} className="hover:text-[#507060] transition-colors">Team</button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop CTA */}
          <Button 
            className="hidden md:flex bg-[#507060] hover:bg-[#608070] text-white rounded-xl transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('beta-signup')}
          >
            Request Demo
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#F5F2EA] border-t border-[#CFEADE] px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('features')} className="text-left hover:text-[#507060] transition-colors">Features</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-left hover:text-[#507060] transition-colors">How It Works</button>
              <button onClick={() => scrollToSection('pricing')} className="text-left hover:text-[#507060] transition-colors">Pricing</button>
              <button onClick={() => scrollToSection('team')} className="text-left hover:text-[#507060] transition-colors">Team</button>
              <Button 
                className="bg-[#507060] hover:bg-[#608070] text-white rounded-xl w-full mt-4"
                onClick={() => scrollToSection('beta-signup')}
              >
                Request Demo
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Sticky Demo CTA */}
      {isScrolled && (
        <div className="fixed bottom-6 right-6 z-40">
          <Button 
            className="bg-[#507060] hover:bg-[#608070] text-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('beta-signup')}
          >
            Request Demo
          </Button>
        </div>
      )}

      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 hero-section">
        
        {/* <div className={'whiteWall'}></div> */}
        <div className="container mx-auto text-center max-w-4xl hero-section">
          <h1 className="text-5xl md:text-7xl font-bold font-['Poppins'] mb-6 leading-tight">
            Less paperwork,<br />more healing.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#608070] max-w-2xl mx-auto leading-relaxed">
            AI-powered clinical documentation that lets therapists focus on what matters most: their patients.
          </p>
          <Button 
            className="bg-[#507060] hover:bg-[#608070] text-white text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={() => scrollToSection('beta-signup')}
          >
            Join Early-Access Beta
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>

      {/* Pain → Solution Split */}
      <section className="py-16 bg-gradient-to-br from-[#F5F2EA] to-[#CFEADE]/20 hero-section">
      <video autoPlay loop muted playsInline className={'mainVideo'}>
          <source src="media/homevideo.mp4" type="video/mp4" /></video>
        <div className="container mx-auto px-4 hero-section">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Pain Points */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-['Poppins'] text-[#507060] mb-8">The Current Crisis</h2>
              
              <div className="space-y-6">
                <div className="bg-white/95 p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Patient Impact</h3>
                  <ul className="space-y-2 text-[#608070]">
                    <li>• 25.3% early therapy dropout rates</li>
                    <li>• 48-67 day average wait times</li>
                    <li>• $1T annual economic loss from untreated mental health</li>
                  </ul>
                </div>

                <div className="bg-white/95 p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Therapist Burnout</h3>
                  <ul className="space-y-2 text-[#608070]">
                    <li>• Up to 103 minutes/day on documentation</li>
                    <li>• 74% say paperwork steals patient time</li>
                    <li>• 77% finish notes after hours</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-8 bg-white/95 rounded-xl p-6">
              <h2 className="text-3xl font-bold font-['Poppins'] text-[#507060] mb-8">How Ziora Helps</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-[#507060] flex-shrink-0" size={24} />
                  <span>Reduce documentation time by up to 80%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-[#507060] flex-shrink-0" size={24} />
                  <span>Increase session focus with real-time transcription</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-[#507060] flex-shrink-0" size={24} />
                  <span>Automated SOAP/DAP note generation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-[#507060] flex-shrink-0" size={24} />
                  <span>Risk-aware clinical insights and flags</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-[#507060] flex-shrink-0" size={24} />
                  <span>HIPAA-compliant with enterprise security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-[#507060] flex-shrink-0" size={24} />
                  <span>Seamless EHR integration and sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold font-['Poppins'] text-center mb-12 text-[#507060]">
            Powerful Features for Modern Mental Healthcare
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/70 border-[#CFEADE] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Mic className="text-[#507060] mb-2" size={32} />
                <CardTitle className="font-['Poppins']">Live Transcription</CardTitle>
                <CardDescription>Real-time speech-to-text for telehealth and in-person sessions</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/70 border-[#CFEADE] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <FileText className="text-[#507060] mb-2" size={32} />
                <CardTitle className="font-['Poppins']">One-Click Notes</CardTitle>
                <CardDescription>Automated SOAP/DAP note drafts from session transcripts</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/70 border-[#CFEADE] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <AlertTriangle className="text-[#507060] mb-2" size={32} />
                <CardTitle className="font-['Poppins']">Clinical Risk Flags</CardTitle>
                <CardDescription>AI-powered risk assessment and clinical story analysis</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/70 border-[#CFEADE] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <BarChart3 className="text-[#507060] mb-2" size={32} />
                <CardTitle className="font-['Poppins']">Progress Dashboard</CardTitle>
                <CardDescription>Smart analytics with HIPAA-secure EHR synchronization</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/70 border-[#CFEADE] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Users className="text-[#507060] mb-2" size={32} />
                <CardTitle className="font-['Poppins']">Patient Copilot</CardTitle>
                <CardDescription>Daily follow-ups and engagement tracking for patients</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/70 border-[#CFEADE] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Shield className="text-[#507060] mb-2" size={32} />
                <CardTitle className="font-['Poppins']">Secure Architecture</CardTitle>
                <CardDescription>Multi-layer data protection with enterprise-grade security</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section id="how-it-works" className="py-16 bg-gradient-to-br from-[#CFEADE]/20 to-[#F5F2EA]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold font-['Poppins'] text-center mb-12 text-[#507060]">
            How Ziora Works
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="bg-[#507060] text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Capture</h3>
              <p className="text-sm text-[#608070]">Record therapy sessions with consent</p>
            </div>
            
            <ArrowRight className="text-[#507060] hidden md:block" size={24} />
            
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="bg-[#507060] text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Speech-to-Text</h3>
              <p className="text-sm text-[#608070]">Real-time transcription with clinical accuracy</p>
            </div>
            
            <ArrowRight className="text-[#507060] hidden md:block" size={24} />
            
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="bg-[#507060] text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">AI Analysis</h3>
              <p className="text-sm text-[#608070]">LLM processing with sentiment analysis</p>
            </div>
            
            <ArrowRight className="text-[#507060] hidden md:block" size={24} />
            
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="bg-[#507060] text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Structured Output</h3>
              <p className="text-sm text-[#608070]">JSON format for EHR integration</p>
            </div>
            
            <ArrowRight className="text-[#507060] hidden md:block" size={24} />
            
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="bg-[#507060] text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-xl font-bold">5</div>
              <h3 className="font-semibold mb-2">Dashboard</h3>
              <p className="text-sm text-[#608070]">Clinical notes and insights delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-12 bg-[#507060] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="transition-all duration-500 ease-in-out">
              <blockquote className="text-xl md:text-2xl italic mb-4 leading-relaxed">
                "{quotes[currentQuote].text}"
              </blockquote>
              <cite className="text-[#CFEADE] text-lg">
                — {quotes[currentQuote].author}
              </cite>
            </div>
            <div className="flex justify-center space-x-2 mt-6">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentQuote ? 'bg-[#CFEADE]' : 'bg-[#608070]'
                  }`}
                  onClick={() => setCurrentQuote(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section id="pricing" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold font-['Poppins'] mb-8 text-[#507060]">
            Simple, Transparent Pricing
          </h2>
          
          <Card className="bg-white/70 border-[#CFEADE] rounded-xl shadow-lg p-8 max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-['Poppins'] text-[#507060]">Professional Plan</CardTitle>
              <CardDescription className="text-lg">Perfect for individual practitioners</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-[#507060] mb-4">
                $59
                <span className="text-lg font-normal text-[#608070]">/clinician/month</span>
              </div>
              <div className="text-sm text-[#608070] mb-6">
                + $0.03/minute transcription after quota
              </div>
              <div className="text-center">
                <p className="text-sm text-[#608070] mb-4">Enterprise EHR licenses available</p>
                <Button 
                  className="bg-[#507060] hover:bg-[#608070] text-white rounded-xl"
                  onClick={() => scrollToSection('beta-signup')}
                >
                  Get Early Access
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Roadmap Mini-Timeline */}
      <section className="py-16 bg-gradient-to-br from-[#F5F2EA] to-[#CFEADE]/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold font-['Poppins'] text-center mb-12 text-[#507060]">
            Product Roadmap
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Badge className="bg-[#507060] text-white mb-4">Q3 2025</Badge>
              <h3 className="font-semibold mb-2">Alpha Release</h3>
              <p className="text-sm text-[#608070]">Core transcription features</p>
            </div>
            
            <div className="text-center">
              <Badge className="bg-[#608070] text-white mb-4">Q4 2025</Badge>
              <h3 className="font-semibold mb-2">Beta Launch</h3>
              <p className="text-sm text-[#608070]">Full feature set rollout</p>
            </div>
            
            <div className="text-center">
              <Badge className="bg-[#CFEADE] text-[#2D3A33] mb-4">Q2 2026</Badge>
              <h3 className="font-semibold mb-2">FDA Pathway</h3>
              <p className="text-sm text-[#608070]">Medical device certification</p>
            </div>
            
            <div className="text-center">
              <Badge className="bg-[#CFEADE] text-[#2D3A33] mb-4">Q4 2026</Badge>
              <h3 className="font-semibold mb-2">Series A</h3>
              <p className="text-sm text-[#608070]">Scaling and growth phase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section id="team" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold font-['Poppins'] text-center mb-12 text-[#507060]">
            Meet the Team
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/70 border-[#CFEADE] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-[#507060] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  CM
                </div>
                <CardTitle className="font-['Poppins']">Christopher Martinez</CardTitle>
                <CardDescription>Co-Founder & Data Engineer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#608070]">
                  Expert in machine learning and healthcare data systems with 8+ years experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 border-[#CFEADE] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-[#507060] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  MS
                </div>
                <CardTitle className="font-['Poppins']">Miguel Segovia</CardTitle>
                <CardDescription>Co-Founder & Full-Stack Engineer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#608070]">
                  Full-stack developer specializing in scalable healthcare applications and security.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 border-[#CFEADE] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-[#CFEADE] rounded-full mx-auto mb-4 flex items-center justify-center text-[#507060] text-2xl font-bold">
                  ?
                </div>
                <CardTitle className="font-['Poppins']">Clinical Advisor</CardTitle>
                <CardDescription>Seeking Licensed Clinical Psychologist</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#608070]">
                  Join our team to guide clinical best practices and product development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Email Capture Footer */}
      <footer id="beta-signup" className="py-16 bg-[#507060] text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold font-['Poppins'] mb-6">
            Join the Early Access Beta
          </h2>
          <p className="text-xl mb-8 text-[#CFEADE] leading-relaxed">
            Be among the first to experience the future of clinical documentation.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-xl border-[#CFEADE] bg-white/10 text-white placeholder-[#CFEADE]"
            />
            <Button className="bg-[#CFEADE] text-[#507060] hover:bg-white rounded-xl px-8">
              Join Beta
            </Button>
          </div>
          
          <div className="text-sm text-[#CFEADE] space-y-2 mb-8">
            <p>✓ HIPAA-compliant and secure</p>
            <p>✓ No credit card required</p>
            <p>✓ Cancel anytime</p>
          </div>
          
          <div className="border-t border-[#608070] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-6 text-sm">
                <a href="#" className="hover:text-[#CFEADE] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#CFEADE] transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-[#CFEADE] transition-colors">HIPAA Notice</a>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#CFEADE] transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-[#CFEADE] transition-colors">Twitter</a>
                <a href="#" className="hover:text-[#CFEADE] transition-colors">Contact</a>
              </div>
            </div>
            <div className="mt-4 text-sm text-[#CFEADE]">
              © 2025 Ziora. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
