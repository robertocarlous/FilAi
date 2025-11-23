'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/navigation';
import { Sun, Moon, Menu, X, Database, HelpCircle } from 'lucide-react';
import { ConnectWallet } from '../../components/ConnectWallet';
import toast from 'react-hot-toast';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { isConnected } = useAccount();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleProtectedNavigation = (path: string, actionName: string) => {
    if (!isConnected) {
      toast.error(`Please connect your wallet first to ${actionName}`, {
        duration: 4000,
        icon: 'Locked',
        style: {
          background: '#e11d48', // rose-600
          color: '#fff',
        },
      });
      return;
    }
    router.push(path);
  };

  return (
    <nav className="bg-gray-900/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-purple-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Database className="w-6 h-6 text-white drop-shadow" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              FilAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleProtectedNavigation('/upload', 'upload datasets')}
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
            >
              Upload Dataset
            </button>
            <button 
              onClick={() => handleProtectedNavigation('/explorer', 'explore datasets')}
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
            >
              Explore Datasets
            </button>
            <Link 
              href="/sdk"
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
            >
              SDK
            </Link>
            <Link 
              href="/faq"
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium flex items-center space-x-1"
            >
              <HelpCircle className="w-4 h-4" />
              <span>FAQ</span>
            </Link>
          </div>

          {/* Right side - Theme toggle and Connect Wallet */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all"
            >
              {mounted && theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Connect Wallet */}
            <ConnectWallet />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => {
                  handleProtectedNavigation('/upload', 'upload datasets');
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all px-4 py-3 rounded-lg font-medium"
              >
                Upload Dataset
              </button>
              <button 
                onClick={() => {
                  handleProtectedNavigation('/explorer', 'explore datasets');
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all px-4 py-3 rounded-lg font-medium"
              >
                Explore Datasets
              </button>
              <Link 
                href="/sdk"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all px-4 py-3 rounded-lg font-medium"
              >
                SDK
              </Link>
              <Link 
                href="/faq"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all px-4 py-3 rounded-lg flex items-center space-x-2 font-medium"
              >
                <HelpCircle className="w-4 h-4" />
                <span>FAQ</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;