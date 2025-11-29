"use client"
import React, { useState } from 'react';
import { Review } from '@/config/types';
import SectionHeader from '@/components/SectionHeader';
import { Star, X } from 'lucide-react';

interface ProductReviewsProps {
  reviews: Review[];
}

export default function ProductReviews({ reviews: initialReviews }: ProductReviewsProps) {
  const [reviews, setReviews] = useState(initialReviews);
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    title: '',
    content: '',
    author: ''
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    const review: Review = {
      id: `r${Date.now()}`,
      author: newReview.author || 'Anonymous',
      rating: newReview.rating,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      title: newReview.title,
      content: newReview.content
    };

    setReviews([review, ...reviews]);
    setIsWritingReview(false);
    setNewReview({
      rating: 5,
      title: '',
      content: '',
      author: ''
    });
  };

  return (
    <div className="mt-24 pt-16 border-t border-oraleo-200">
      <SectionHeader title="Customer Reviews" subtitle="What People Say" alignment="center" />
      
      <div className="max-w-4xl mx-auto mt-12">
        
        {/* Add Review Section */}
        <div className="mb-12 text-center">
          {!isWritingReview ? (
            <button 
              onClick={() => setIsWritingReview(true)}
              className="px-8 py-3 bg-nature-dark text-white hover:bg-nature-green transition-all tracking-widest text-sm font-bold uppercase"
            >
              Write a Review
            </button>
          ) : (
            <div className="bg-oraleo-50 p-8 rounded-sm border border-oraleo-200 text-left max-w-2xl mx-auto relative">
              <button 
                onClick={() => setIsWritingReview(false)}
                className="absolute top-4 right-4 text-nature-dark/40 hover:text-nature-dark"
              >
                <X size={20} />
              </button>
              
              <h3 className="font-serif text-2xl text-nature-dark mb-6">Write a Review</h3>
              
              <form onSubmit={handleSubmitReview} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-nature-dark mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className="focus:outline-none"
                      >
                        <Star 
                          size={24} 
                          className={star <= newReview.rating ? "fill-nature-dark text-nature-dark" : "text-oraleo-300"} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-nature-dark mb-2">Title</label>
                  <input 
                    type="text" 
                    required
                    value={newReview.title}
                    onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                    className="w-full p-3 border border-oraleo-300 focus:border-nature-dark outline-none bg-white"
                    placeholder="Summarize your experience"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-nature-dark mb-2">Review</label>
                  <textarea 
                    required
                    rows={4}
                    value={newReview.content}
                    onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                    className="w-full p-3 border border-oraleo-300 focus:border-nature-dark outline-none bg-white"
                    placeholder="Share details of your own experience at this place"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-nature-dark mb-2">Name</label>
                  <input 
                    type="text" 
                    required
                    value={newReview.author}
                    onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                    className="w-full p-3 border border-oraleo-300 focus:border-nature-dark outline-none bg-white"
                    placeholder="Your name"
                  />
                </div>

                <div className="flex gap-4 pt-2">
                  <button 
                    type="submit"
                    className="flex-1 bg-nature-dark text-white py-3 font-bold uppercase tracking-widest hover:bg-nature-green transition-all"
                  >
                    Submit Review
                  </button>
                  <button 
                    type="button"
                    onClick={() => setIsWritingReview(false)}
                    className="px-8 py-3 border border-nature-dark text-nature-dark hover:bg-oraleo-100 transition-all font-bold uppercase tracking-widest"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        <div className="grid gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 border border-oraleo-100 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={i < review.rating ? "fill-nature-dark text-nature-dark" : "text-oraleo-300"} 
                      />
                    ))}
                  </div>
                  <h4 className="font-bold text-nature-dark">{review.title}</h4>
                </div>
                <span className="text-sm text-nature-dark/40">{review.date}</span>
              </div>
              <p className="text-nature-dark/80 mb-4 leading-relaxed">{review.content}</p>
              <span className="text-xs font-bold uppercase tracking-widest text-nature-dark/60">- {review.author}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-nature-dark text-nature-dark hover:bg-nature-dark hover:text-white transition-all tracking-widest text-sm font-bold uppercase">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
}
