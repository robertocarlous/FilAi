'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, ChevronUp, ArrowLeft, 
  HelpCircle, Database, Shield, Zap,
  DollarSign, Lock, FileText, Users
} from 'lucide-react';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  icon: React.ComponentType<{ className?: string }>;
}

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const faqItems: FAQItem[] = [
    // General Questions
    {
      id: 'what-is-filescope',
      category: 'general',
      question: 'What is FileScope AI?',
      answer: 'FileScope AI is a decentralized platform that combines AI-powered data analysis with blockchain storage. It helps you analyze datasets for quality, anomalies, and bias, then stores the results permanently on Filecoin with cryptographic verification.',
      icon: Database
    },
    {
      id: 'how-does-it-work',
      category: 'general',
      question: 'How does FileScope AI work?',
      answer: 'You upload a dataset (CSV, JSON, Excel, etc.), our AI analyzes it for quality issues, anomalies, and bias. The analysis results are stored on IPFS for free datasets, or on Filecoin Onchain Cloud (FOC) for paid datasets. Everything is verifiable on the blockchain.',
      icon: HelpCircle
    },
    {
      id: 'what-file-formats',
      category: 'general',
      question: 'What file formats are supported?',
      answer: 'We support CSV, JSON, Excel (.xlsx, .xls), Parquet, TSV, TXT, and Word documents (.doc, .docx). Files up to 100MB are supported.',
      icon: FileText
    },
    
    // Filecoin Onchain Cloud
    {
      id: 'what-is-foc',
      category: 'foc',
      question: 'What is Filecoin Onchain Cloud (FOC)?',
      answer: 'Filecoin Onchain Cloud is a decentralized storage, retrieval, and settlement layer built on Filecoin. It provides warm storage (fast, persistent access), verifiable proofs of data possession, and programmable payment rails for automated billing.',
      icon: Shield
    },
    {
      id: 'foc-vs-ipfs',
      category: 'foc',
      question: 'What\'s the difference between FOC and IPFS?',
      answer: 'IPFS is used for free datasets and provides decentralized storage. FOC (Filecoin Onchain Cloud) is used for paid/monetized datasets and offers additional features like warm storage (fast retrieval), automated payment processing, and verifiable proofs with ongoing storage guarantees.',
      icon: Database
    },
    {
      id: 'warm-storage',
      category: 'foc',
      question: 'What is warm storage?',
      answer: 'Warm storage provides fast, persistent access to your data with CDN-like performance. Unlike cold storage, your data is always readily available. FOC uses warm storage to ensure paid datasets can be downloaded quickly by purchasers.',
      icon: Zap
    },
    {
      id: 'proof-of-possession',
      category: 'foc',
      question: 'What is Proof of Data Possession (PDP)?',
      answer: 'PDP is a cryptographic proof that verifies your data is actually stored correctly on the Filecoin network. These proofs can be verified at any time, ensuring data integrity and availability without needing to download the entire dataset.',
      icon: Shield
    },
    
    // Monetization
    {
      id: 'how-to-monetize',
      category: 'monetization',
      question: 'How do I monetize my dataset?',
      answer: 'When uploading a dataset, enable the "Monetize Dataset" toggle and set a price in USDFC tokens. Your dataset will be stored on Filecoin Onchain Cloud, and buyers can purchase access. Payments are processed automatically through smart contracts.',
      icon: DollarSign
    },
    {
      id: 'how-much-earn',
      category: 'monetization',
      question: 'How much can I earn?',
      answer: 'You set your own price in USDFC tokens. There\'s no platform fee—you receive 100% of the purchase price. Popular, high-quality datasets with valuable insights tend to generate more revenue.',
      icon: DollarSign
    },
    {
      id: 'payment-processing',
      category: 'monetization',
      question: 'How are payments processed?',
      answer: 'Payments are handled automatically through smart contracts on the Filecoin Calibration testnet. When someone purchases your dataset, the USDFC tokens are transferred directly to you. No intermediaries, no delays.',
      icon: Zap
    },
    {
      id: 'free-vs-paid',
      category: 'monetization',
      question: 'Should I make my dataset free or paid?',
      answer: 'Free datasets are great for open data, research sharing, or building reputation. Paid datasets work well for proprietary data, premium insights, or datasets that required significant effort to create. You can always change this later.',
      icon: DollarSign
    },
    
    // Technical
    {
      id: 'data-privacy',
      category: 'technical',
      question: 'Is my data private and secure?',
      answer: 'Yes. Public datasets are stored on decentralized networks (IPFS/FOC) and are accessible to anyone. Private datasets are encrypted and only accessible to you. All data is stored with cryptographic guarantees on the Filecoin network.',
      icon: Lock
    },
    {
      id: 'blockchain-network',
      category: 'technical',
      question: 'Which blockchain network is used?',
      answer: 'We use the Filecoin Calibration testnet for development and testing. The smart contracts handle dataset registration, purchases, and ownership verification. All storage is on the Filecoin network.',
      icon: Database
    },
    {
      id: 'analysis-accuracy',
      category: 'technical',
      question: 'How accurate is the AI analysis?',
      answer: 'Our AI uses advanced algorithms for anomaly detection, bias analysis, and quality scoring. While highly accurate, the analysis should be used as a tool to help you understand your data better, not as the sole source of truth.',
      icon: HelpCircle
    },
    {
      id: 'storage-costs',
      category: 'technical',
      question: 'Are there storage costs?',
      answer: 'Free datasets stored on IPFS have no ongoing costs. Paid datasets on Filecoin Onchain Cloud use automated payment rails—you deposit USDFC tokens that are used to pay for storage automatically. The costs are minimal and transparent.',
      icon: DollarSign
    },
    
    // Usage
    {
      id: 'who-can-use',
      category: 'usage',
      question: 'Who can use FileScope AI?',
      answer: 'Anyone! Researchers, journalists, data scientists, organizations, and individuals can upload, analyze, and share datasets. You just need a Web3 wallet to interact with the platform.',
      icon: Users
    },
    {
      id: 'wallet-required',
      category: 'usage',
      question: 'Do I need a wallet?',
      answer: 'Yes, you need a Web3 wallet (like MetaMask) connected to the Filecoin Calibration testnet. The wallet is used to sign transactions for uploading datasets, making purchases, and receiving payments.',
      icon: Lock
    },
    {
      id: 'download-purchased',
      category: 'usage',
      question: 'How do I download a purchased dataset?',
      answer: 'After purchasing a dataset, you\'ll see download options in the explorer. You can download the original dataset, the analysis report, or a complete package. Downloads are available immediately after purchase confirmation.',
      icon: FileText
    },
    {
      id: 'refund-policy',
      category: 'usage',
      question: 'Can I get a refund?',
      answer: 'Due to the decentralized nature of blockchain transactions, purchases are final. However, you can preview analysis results before purchasing paid datasets to ensure they meet your needs.',
      icon: DollarSign
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'general', label: 'General', icon: Database },
    { id: 'foc', label: 'Filecoin Onchain Cloud', icon: Shield },
    { id: 'monetization', label: 'Monetization', icon: DollarSign },
    { id: 'technical', label: 'Technical', icon: Zap },
    { id: 'usage', label: 'Usage', icon: Users }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Everything you need to know</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Got Questions?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about FileScope AI, Filecoin Onchain Cloud, and monetization.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            const isOpen = openItems.has(item.id);
            return (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {item.question}
                      </h3>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-5 pl-16">
                    <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-blue-100 mb-6">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our support team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link
              href="/upload"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Try FileScope AI
            </Link>
            <Link
              href="/explorer"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Datasets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;

