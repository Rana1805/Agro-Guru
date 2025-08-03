import React, { useState } from 'react';
import { ChevronUp, ChevronDown, MessageCircle, Share2, Bookmark, MoreHorizontal, Plus, Search, TrendingUp, Users, MapPin, Calendar } from 'lucide-react';

const FarmerForum = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Best time to sow wheat in Punjab - Need advice",
      content: "Fellow farmers, I'm planning to sow wheat this season in Ludhiana district. With changing weather patterns, what would be the ideal time? Last year I sowed in November but got mixed results.",
      author: "RamanSingh_Punjab",
      community: "Wheat Farming",
      votes: 45,
      comments: 23,
      timeAgo: "4 hours ago",
      location: "Punjab",
      hasVoted: null,
      flair: "Question"
    },
    {
      id: 2,
      title: "Organic pesticide recipe that saved my tomato crop 🍅",
      content: "After struggling with aphids for weeks, I tried this neem oil + garlic + soap solution. Recipe in comments. My tomatoes are thriving now! Cost less than ₹50 per liter.",
      author: "TomatoKing_Kerala",
      community: "Organic Farming",
      votes: 127,
      comments: 56,
      timeAgo: "8 hours ago",
      location: "Kerala",
      hasVoted: 1,
      flair: "Success Story"
    },
    {
      id: 3,
      title: "Government subsidy for drip irrigation - Documentation help needed",
      content: "I want to apply for the drip irrigation subsidy scheme but the paperwork is confusing. Has anyone recently applied? What documents are actually required?",
      author: "MangoFarmer_MP",
      community: "Farm Subsidies",
      votes: 89,
      comments: 34,
      timeAgo: "12 hours ago",
      location: "Madhya Pradesh",
      hasVoted: null,
      flair: "Help"
    },
    {
      id: 4,
      title: "Record yield this season - 45 quintal per hectare rice! 🌾",
      content: "Used SRI method with proper spacing and organic fertilizers. Happy to share my complete process with fellow farmers. Pic attached of the harvest.",
      author: "RiceMaster_AP",
      community: "Rice Farming",
      votes: 203,
      comments: 78,
      timeAgo: "1 day ago",
      location: "Andhra Pradesh",
      hasVoted: 1,
      flair: "Achievement"
    },
    {
      id: 5,
      title: "Monsoon delayed - what are your backup plans?",
      content: "Met department says monsoon might be delayed by 2 weeks in our region. What crops should we consider? Should we wait or plant something else?",
      author: "WeatherWorried_RJ",
      community: "Monsoon 2024",
      votes: 67,
      comments: 45,
      timeAgo: "2 days ago",
      location: "Rajasthan",
      hasVoted: null,
      flair: "Discussion"
    }
  ]);

  const [showCreatePost, setShowCreatePost] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Hot');
  const [newPost, setNewPost] = useState({ title: '', content: '',         community: 'General Farming', flair: 'Discussion' });

  const communities = [
    'General Farming', 'Wheat Farming', 'Rice Farming', 'Organic Farming', 
    'Farm Subsidies', 'Crop Diseases', 'Farm Machinery', 'Monsoon 2024'
  ];

  const flairs = ['Discussion', 'Question', 'Help', 'Success Story', 'Achievement', 'News', 'Advice'];

  const handleVote = (postId, voteType) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        let newVotes = post.votes;
        let newHasVoted = post.hasVoted;
        
        if (voteType === 1) { // Upvote
          if (post.hasVoted === 1) {
            newVotes -= 1;
            newHasVoted = null;
          } else if (post.hasVoted === -1) {
            newVotes += 2;
            newHasVoted = 1;
          } else {
            newVotes += 1;
            newHasVoted = 1;
          }
        } else { // Downvote
          if (post.hasVoted === -1) {
            newVotes += 1;
            newHasVoted = null;
          } else if (post.hasVoted === 1) {
            newVotes -= 2;
            newHasVoted = -1;
          } else {
            newVotes -= 1;
            newHasVoted = -1;
          }
        }
        
        return { ...post, votes: newVotes, hasVoted: newHasVoted };
      }
      return post;
    }));
  };

  const handleCreatePost = () => {
    if (newPost.title.trim() && newPost.content.trim()) {
      const post = {
        id: posts.length + 1,
        title: newPost.title,
        content: newPost.content,
        author: "NewFarmer_User",
        community: newPost.community,
        votes: 1,
        comments: 0,
        timeAgo: "just now",
        location: "India",
        hasVoted: 1,
        flair: newPost.flair
      };
      setPosts([post, ...posts]);
      setNewPost({ title: '', content: '', community: 'r/GeneralFarming', flair: 'Discussion' });
      setShowCreatePost(false);
    }
  };

  const getFlairColor = (flair) => {
    const colors = {
      'Question': 'bg-blue-100 text-blue-800',
      'Help': 'bg-red-100 text-red-800',
      'Success Story': 'bg-green-100 text-green-800',
      'Achievement': 'bg-purple-100 text-purple-800',
      'Discussion': 'bg-gray-100 text-gray-800',
      'News': 'bg-yellow-100 text-yellow-800',
      'Advice': 'bg-indigo-100 text-indigo-800'
    };
    return colors[flair] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-orange-600">🌾 KisanForum</h1>
              <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2">
                <Search className="w-4 h-4 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search farming topics..." 
                  className="bg-transparent border-none outline-none text-sm w-64"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowCreatePost(true)}
                className="flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Create Post</span>
              </button>
              <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                <span className="text-orange-800 font-semibold text-sm">K</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-80 space-y-4">
            {/* Popular Communities */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Popular Communities
              </h3>
              <div className="space-y-2">
                {communities.slice(0, 6).map((community, index) => (
                  <div key={community} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700 hover:text-orange-600 cursor-pointer">{community}</span>
                    <span className="text-gray-500">{Math.floor(Math.random() * 50000)}+ members</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Trending Topics
              </h3>
              <div className="space-y-2 text-sm">
                <div className="text-gray-700">#MonsoonPrep</div>
                <div className="text-gray-700">#OrganicFarming</div>
                <div className="text-gray-700">#MSPRates</div>
                <div className="text-gray-700">#SoilHealth</div>
                <div className="text-gray-700">#FarmSubsidies</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
              <div className="flex items-center space-x-4">
                {['Hot', 'New', 'Top', 'Rising'].map((sort) => (
                  <button
                    key={sort}
                    onClick={() => setSelectedSort(sort)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      selectedSort === sort 
                        ? 'bg-orange-100 text-orange-700' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {sort}
                  </button>
                ))}
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all">
                  <div className="p-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span className="font-medium text-orange-600 hover:underline cursor-pointer">
                          {post.community}
                        </span>
                        <span>•</span>
                        <span>Posted by u/{post.author}</span>
                        <span>•</span>
                        <span>{post.timeAgo}</span>
                        <span>•</span>
                        <span className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {post.location}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getFlairColor(post.flair)}`}>
                          {post.flair}
                        </span>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <h2 className="text-lg font-semibold text-gray-900 mb-2 hover:text-orange-600 cursor-pointer">
                      {post.title}
                    </h2>
                    <p className="text-gray-700 mb-4 line-clamp-3">{post.content}</p>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                      {/* Voting */}
                      <div className="flex items-center space-x-1 bg-gray-50 rounded-lg px-2 py-1">
                        <button 
                          onClick={() => handleVote(post.id, 1)}
                          className={`p-1 rounded transition-colors ${
                            post.hasVoted === 1 ? 'text-orange-600 bg-orange-50' : 'text-gray-500 hover:text-orange-600'
                          }`}
                        >
                          <ChevronUp className="w-4 h-4" />
                        </button>
                        <span className="font-medium text-sm min-w-[2rem] text-center">{post.votes}</span>
                        <button 
                          onClick={() => handleVote(post.id, -1)}
                          className={`p-1 rounded transition-colors ${
                            post.hasVoted === -1 ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-blue-600'
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Comments */}
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 px-2 py-1 rounded-lg hover:bg-gray-50">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{post.comments} Comments</span>
                      </button>

                      {/* Share */}
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 px-2 py-1 rounded-lg hover:bg-gray-50">
                        <Share2 className="w-4 h-4" />
                        <span className="text-sm">Share</span>
                      </button>

                      {/* Save */}
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 px-2 py-1 rounded-lg hover:bg-gray-50">
                        <Bookmark className="w-4 h-4" />
                        <span className="text-sm">Save</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Create Post Modal */}
      {showCreatePost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Create a new post</h2>
                <button 
                  onClick={() => setShowCreatePost(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex space-x-4">
                  <select 
                    value={newPost.community}
                    onChange={(e) => setNewPost({...newPost, community: e.target.value})}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
                  >
                    {communities.map(community => (
                      <option key={community} value={community}>{community}</option>
                    ))}
                  </select>
                  <select 
                    value={newPost.flair}
                    onChange={(e) => setNewPost({...newPost, flair: e.target.value})}
                    className="border border-gray-300 rounded-lg px-3 py-2"
                  >
                    {flairs.map(flair => (
                      <option key={flair} value={flair}>{flair}</option>
                    ))}
                  </select>
                </div>

                <input
                  type="text"
                  placeholder="Title"
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-lg"
                />

                <textarea
                  placeholder="What's on your mind? Share your farming experience, ask questions, or start a discussion..."
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none"
                />

                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowCreatePost(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCreatePost}
                    className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmerForum;