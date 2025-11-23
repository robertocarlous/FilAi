'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAccount } from 'wagmi';
import { 
  Database, Upload, Shield, CheckCircle, 
  Users, FileText, Zap, Brain, Eye,
  ArrowRight, Play, Building
} from 'lucide-react';
import toast from 'react-hot-toast';

const FileScope = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const { isConnected } = useAccount();
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleUploadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isConnected) {
      toast.error('Please connect your wallet first to upload datasets', {
        duration: 4000,
        icon: 'Locked',
        style: {
          background: '#e11d48',
          color: '#fff',
        },
      });
      return;
    }
    router.push('/upload');
  };

  const handleExplorerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isConnected) {
      toast.error('Please connect your wallet first to explore datasets', {
        duration: 4000,
        icon: 'Locked',
        style: {
          background: '#e11d48',
          color: '#fff',
        },
      });
      return;
    }
    router.push('/explorer');
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms detect anomalies, bias, and quality issues automatically",
      demo: "Analyzing 15,420 rows... Found 23 anomalies, Quality Score: 87%"
    },
    {
      icon: Shield,
      title: "Blockchain Verified",
      description: "Every analysis is permanently stored on Filecoin with cryptographic proof",
      demo: "Dataset verified Stored on IPFS: Qm...abc123 Block: #2,341,567"
    },
    {
      icon: Eye,
      title: "Public Transparency",
      description: "Browse and verify any dataset analysis with full transparency",
      demo: "2,847 datasets analyzed • 156 researchers contributed • 100% verifiable"
    }
  ];

  const useCases = [
    { icon: FileText, title: "Journalists", description: "Verify data sources and detect manipulation in public datasets", example: "Election polling data integrity verification" },
    { icon: Users, title: "Researchers", description: "Access clean, bias-checked datasets with confidence", example: "Climate data validation for academic studies" },
    { icon: Building, title: "Organizations", description: "Publish transparent, auditable datasets with quality guarantees", example: "Government transparency reports" }
  ];

  const stats = [
    { number: "10K+", label: "Datasets Analyzed" },
    { number: "99.2%", label: "Accuracy Rate" },
    { number: "500+", label: "Active Users" },
    { number: "24/7", label: "Uptime" }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 relative overflow-hidden bg-gradient-to-b from-purple-900/20 via-gray-950 to-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.15),transparent_70%)] -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-purple-500/40">
              <Zap className="w-4 h-4" />
              <span>Powered by Filecoin & Advanced AI</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Turn Any Dataset Into
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500">
                Trusted Intelligence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Upload datasets, get instant AI analysis with anomaly detection, bias assessment, and quality scoring. 
              Everything stored permanently on Filecoin for complete transparency.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-y-0 sm:space-x-6 mb-16">
              <button 
                onClick={handleUploadClick}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-2xl shadow-purple-500/30 transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <Upload className="w-5 h-5" />
                <span>Analyze Your Dataset</span>
              </button>
              
              <button 
                onClick={handleUploadClick}
                className="border-2 border-purple-500/50 text-purple-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all flex items-center space-x-2 backdrop-blur"
              >
                <Play className="w-5 h-5" />
                <span>Launch App</span>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Demo */}
      <section className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI That Actually <span className="text-purple-400">Understands</span> Your Data
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our advanced AI doesn&apos;t just store your data—it analyzes, validates, and provides insights 
              that help you make better decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all backdrop-bluff ${
                    activeFeature === index 
                      ? 'border-purple-500 bg-purple-500/10 shadow-xl shadow-purple-500/20' 
                      : 'border-gray-800 bg-gray-900/50 hover:border-purple-500/50'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${activeFeature === index ? 'bg-purple-600' : 'bg-gray-800'}`}>
                      <feature.icon className={`w-6 h-6 ${activeFeature === index ? 'text-white' : 'text-purple-400'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-1 md:order-2">
              <div className="bg-gray-900/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-purple-500/30">
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm border border-purple-500/30">
                    <div className="mb-2">$ filescope analyze dataset.csv</div>
                    <div className="text-purple-300">{features[activeFeature].demo}</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-purple-500/20">
                    <span className="font-medium">Quality Score</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{width: '87%'}}></div>
                      </div>
                      <span className="font-bold text-purple-400">87%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-purple-500/20">
                    <span className="font-medium">Anomalies Detected</span>
                    <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-sm font-medium">23 Found</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-purple-500/20">
                    <span className="font-medium">Blockchain Status</span>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-medium">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple Process, <span className="text-purple-400">Powerful Results</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From upload to insights in minutes. No complex setup required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Upload, title: "Upload Dataset", color: "from-purple-500 to-purple-600" },
              { icon: Brain, title: "AI Analysis", color: "from-pink-500 to-purple-600" },
              { icon: Shield, title: "Permanent Storage", color: "from-purple-600 to-pink-600" }
            ].map((step, i) => (
              <div key={i} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/30`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{i + 1}. {step.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {i === 0 && "Drag and drop your CSV, JSON, or Excel file. We support up to 100MB."}
                  {i === 1 && "Our AI analyzes for anomalies, bias, completeness, and quality issues."}
                  {i === 2 && "Results are stored on Filecoin with blockchain verification forever."}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button onClick={handleUploadClick} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-2xl shadow-purple-500/40">
              Try It Now - It&apos;s Free
            </button>
          </div>
        </div>
      </section>

      {/* Filecoin Onchain Cloud & Monetization */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powered by <span className="text-purple-400">Filecoin Onchain Cloud</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enterprise-grade storage, verifiable proofs, and programmable payments—all on-chain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 p-8 rounded-2xl border border-purple-500/40 backdrop-blur">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Warm Storage</h3>
              </div>
              <p className="text-gray-300 mb-6">Fast, persistent, and verifiable data storage with Proof of Data Possession.</p>
              <ul className="space-y-3 text-gray-400">
                {["Instant retrieval with CDN-like performance", "Cryptographic proofs verify integrity", "Automated payment rails"].map((t, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/20 p-8 rounded-2xl border border-pink-500/40 backdrop-blur">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/50">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Monetize Your Data</h3>
              </div>
              <p className="text-gray-300 mb-6">Set your price, earn USDFC tokens, and let the blockchain handle payments.</p>
              <ul className="space-y-3 text-gray-400">
                {["Set custom prices in USDFC tokens", "Automatic payment processing", "Track earnings and analytics"].map((t, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-pink-400 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-purple-600  rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8">
              {["Decentralized Storage", "Verifiable Proofs", "Programmable Payments"].map((title, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mx-auto mb-4">
                    {i === 0 && <Database className="w-8 h-8" />}
                    {i === 1 && <Shield className="w-8 h-8" />}
                    {i === 2 && <Zap className="w-8 h-8" />}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{title}</h4>
                  <p className="text-purple-100 text-sm">
                    {i === 0 && "No single point of failure. Distributed across Filecoin."}
                    {i === 1 && "Cryptographic proofs ensure data is stored correctly."}
                    {i === 2 && "Automated streams handle costs and revenue seamlessly."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for <span className="text-purple-400">Real-World Impact</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Whether you&apos;re a journalist, researcher, or organization — trust your data.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-900/70 backdrop-blur border border-purple-500/20 p-8 rounded-2xl hover:border-purple-500/60 transition-all shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                <p className="text-gray-400 mb-6">{useCase.description}</p>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-purple-500/20">
                  <div className="text-sm text-gray-500 mb-1">Example:</div>
                  <div className="font-medium text-purple-300">{useCase.example}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-purple-600 via-pink-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Trust Your Data?
          </h2>
          <p className="text-xl text-purple-100 mb-12">
            Join hundreds of researchers, journalists, and organizations using FilAI.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button onClick={handleUploadClick} className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl flex items-center space-x-2">
              <Upload className="w-5 h-5" />
              <span>Start Analyzing Now</span>
            </button>
            <button onClick={handleExplorerClick} className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all flex items-center space-x-2">
              <span>Explore Datasets</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-xl border-t border-purple-500/20 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">FilAI</span>
              </div>
              <p className="text-gray-500 leading-relaxed max-w-md">
                The decentralized intelligence layer for public datasets. 
                Turning Filecoin storage into a trusted, queryable data lake.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-purple-400">Product</h4>
              <div className="space-y-2 text-gray-500">
                {["Features", "How it Works", "Use Cases", "FAQ"].map((item) => (
                  <a key={item} href={`#${item.toLowerCase().replace(/\s/g,'-')}`} className="block hover:text-purple-400 transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-purple-400">Company</h4>
              <div className="space-y-2 text-gray-500">
                {["About", "Blog", "Careers", "Contact"].map((item) => (
                  <div key={item} className="hover:text-purple-400 transition-colors cursor-pointer">{item}</div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-500/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <div>© 2025 FilAI. Built for Filecoin.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <div className="hover:text-purple-400 cursor-pointer">Privacy</div>
              <div className="hover:text-purple-400 cursor-pointer">Terms</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FileScope;