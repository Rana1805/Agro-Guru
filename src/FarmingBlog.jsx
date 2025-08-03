import React, { useState } from 'react';
import { Search, Eye, MessageCircle, ChevronRight } from 'lucide-react';

const FarmingBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to Organic Pest Control",
      excerpt: "Learn effective organic methods to protect your crops from pests without harmful chemicals. Includes DIY recipes and natural solutions.",
      category: "HOW-TO GUIDE",
      views: "2.3K",
      comments: 24,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=720&h=400&fit=crop"
    },
    {
      id: 2,
      title: "PM-KISAN Scheme 2024: New Guidelines",
      excerpt: "Latest updates on PM-KISAN direct benefit transfer scheme. Step-by-step guide to apply and check payment status online.",
      category: "POLICY UPDATE",
      views: "4.1K",
      comments: 56,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=720&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Drip Irrigation Setup Made Simple",
      excerpt: "Comprehensive guide on setting up drip irrigation system for small farms. Cost analysis and water-saving benefits included.",
      category: "HOW-TO GUIDE",
      views: "1.8K",
      comments: 31,
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=720&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Understanding Your Soil Health Card",
      excerpt: "Learn how to interpret soil test results and make informed decisions about fertilizers and soil amendments for better yields.",
      category: "LEARNING",
      views: "3.2K",
      comments: 18,
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=720&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Climate-Smart Agriculture Techniques",
      excerpt: "Strategies to make your farming resilient against climate change. Includes crop selection and water management tips.",
      category: "LEARNING",
      views: "2.7K",
      comments: 42,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=720&h=400&fit=crop"
    },
    {
      id: 6,
      title: "PMFBY Crop Insurance Explained",
      excerpt: "Everything about Pradhan Mantri Fasal Bima Yojana. How to enroll, claim process, and maximizing your coverage benefits.",
      category: "POLICY UPDATE",
      views: "5.5K",
      comments: 73,
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=720&h=400&fit=crop"
    }
  ];

  const categories = ['All', 'HOW-TO GUIDE', 'POLICY UPDATE', 'LEARNING'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-orange-600">🌾 KisanForum</h1>
              <span className="text-gray-500">|</span>
              <h2 className="text-lg font-semibold text-gray-700">Expert Blog</h2>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-orange-600">Home</a>
              <a href="#" className="text-orange-600 font-medium">Blog</a>
              <a href="#" className="text-gray-600 hover:text-orange-600">Forum</a>
              <a href="#" className="text-gray-600 hover:text-orange-600">Experts</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Learn from Agricultural Experts
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Stay updated with the latest farming techniques, government policies, and expert advice to improve your agricultural knowledge and yields.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section - Using your exact layout */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {filteredPosts.map((post) => (
              <div key={post.id} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:border-orange-300 transition-colors">
                  <img 
                    className="lg:h-48 md:h-36 w-full object-cover object-center" 
                    src={post.image} 
                    alt={post.title}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-orange-400 mb-1">
                      {post.category}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:text-orange-600 cursor-pointer">
                      {post.title}
                    </h1>
                    <p className="leading-relaxed mb-3 text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer hover:text-orange-600">
                        Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        {post.views}
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Expert Insights</h2>
          <p className="text-xl mb-8">
            Get the latest farming tips, policy updates, and expert advice delivered weekly.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-none outline-none"
            />
            <button className="bg-orange-800 hover:bg-orange-900 px-6 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center mb-4">
            <span className="text-2xl font-bold text-orange-400">🌾 KisanForum</span>
          </div>
          <p className="text-gray-400 mb-4">
            Empowering Indian farmers with knowledge, community, and expert guidance.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FarmingBlog;