import React, { useState } from 'react';
import { Code2, ThumbsUp, MessageSquare, CheckCircle2, Plus, Tag, Search } from 'lucide-react';
import { mockCommunityPosts } from '../../data/mockData';
import { CommunityPost } from '../../types';
import defaultAvatarImg from '../../assets/images/user_avatar_1786437421524.jpg';

export const CommunityView: React.FC = () => {
  const [posts, setPosts] = useState<CommunityPost[]>(mockCommunityPosts);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [newPostOpen, setNewPostOpen] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newCategory, setNewCategory] = useState('Python');

  const filteredPosts = posts.filter(p => selectedCategory === 'all' || p.category === selectedCategory);

  const handleCreatePost = () => {
    if (!newTitle.trim() || !newContent.trim()) return;
    const post: CommunityPost = {
      id: `post-${Date.now()}`,
      author: {
        name: 'Prajapati Kumar Rishu',
        avatar: defaultAvatarImg,
        badge: 'Developer'
      },
      category: newCategory,
      title: newTitle,
      content: newContent,
      likes: 1,
      commentCount: 0,
      timestamp: 'Just now',
      tags: [newCategory, 'Discussion']
    };
    setPosts([post, ...posts]);
    setNewTitle('');
    setNewContent('');
    setNewPostOpen(false);
  };

  const handleLike = (id: string) => {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Code2 className="w-8 h-8 text-cyan-500" />
            <span>Student & Developer Community Forum</span>
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Ask questions, share project breakthroughs, and collaborate with peer developers and instructors.
          </p>
        </div>

        <button
          onClick={() => setNewPostOpen(true)}
          className="px-5 py-2.5 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition flex items-center gap-2 shadow-md shadow-cyan-500/20"
        >
          <Plus className="w-4 h-4" />
          <span>Ask Question / New Post</span>
        </button>
      </div>

      {/* New Post Modal */}
      {newPostOpen && (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xl">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">Create New Community Discussion</h3>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Question title or discussion summary..."
            className="w-full p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none"
          />
          <div className="flex gap-4">
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white"
            >
              <option value="Python">Python</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="AI">AI & ML</option>
              <option value="Projects">Projects</option>
            </select>
          </div>
          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            placeholder="Write detailed question, error trace, or code details..."
            className="w-full h-28 p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none resize-none"
          />
          <div className="flex justify-end gap-2">
            <button onClick={() => setNewPostOpen(false)} className="px-4 py-2 text-xs font-bold text-slate-500">Cancel</button>
            <button onClick={handleCreatePost} className="px-5 py-2 text-xs font-bold bg-cyan-500 text-slate-950 rounded-xl">Publish Post</button>
          </div>
        </div>
      )}

      {/* Posts List */}
      <div className="space-y-4">
        {filteredPosts.map((p) => (
          <div key={p.id} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <img src={p.author.avatar} alt={p.author.name} className="w-8 h-8 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{p.author.name}</h4>
                  <span className="text-[10px] text-slate-400">{p.timestamp} • {p.author.badge}</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-cyan-500/10 text-cyan-500 uppercase font-mono">
                {p.category}
              </span>
            </div>

            <h3 className="font-bold text-base text-slate-900 dark:text-white">{p.title}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">{p.content}</p>

            {/* Comments List */}
            {p.comments && p.comments.length > 0 && (
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                {p.comments.map(c => (
                  <div key={c.id} className="space-y-1">
                    <p className="font-bold text-cyan-500">{c.authorName}:</p>
                    <p className="text-slate-700 dark:text-slate-300">{c.content}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Footer Actions */}
            <div className="flex items-center gap-6 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
              <button onClick={() => handleLike(p.id)} className="flex items-center gap-1.5 hover:text-cyan-500 transition">
                <ThumbsUp className="w-4 h-4" />
                <span>{p.likes} Likes</span>
              </button>
              <div className="flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4" />
                <span>{p.commentCount} Comments</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
