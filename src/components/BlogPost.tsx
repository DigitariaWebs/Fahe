import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { colors } from '../config/colors'
import { images } from '../config/assets'
import { navigateToContact } from '../utils/navigation'

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useTranslation()
  const navigate = useNavigate()

  // Mock blog posts data - in a real app, this would come from an API or CMS
  const blogPosts = {
    'car-maintenance-tips': {
      title: t('blog.posts.post1.title'),
      date: '2024-06-01',
      author: 'François Beauchamp',
      readTime: '5 min read',
      category: 'Maintenance',
      summary: t('blog.posts.post1.summary'),
      image: images.image.mecano1,
      content: `
        <p>Regular car maintenance is crucial for keeping your vehicle running smoothly and avoiding costly repairs. Here are five essential tips every driver should follow:</p>
        
        <h2>1. Regular Oil Changes</h2>
        <p>Oil is the lifeblood of your engine. Change your oil every 3,000-5,000 miles or as recommended by your manufacturer. Fresh oil lubricates engine parts, reduces friction, and helps maintain optimal engine temperature.</p>
        
        <h2>2. Check Your Tires</h2>
        <p>Inspect your tires monthly for proper inflation, tread depth, and signs of wear. Properly inflated tires improve fuel efficiency and extend tire life. Don't forget to rotate your tires every 6,000-8,000 miles.</p>
        
        <h2>3. Monitor Fluid Levels</h2>
        <p>Regularly check and top off essential fluids including brake fluid, transmission fluid, coolant, and windshield washer fluid. Low fluid levels can lead to serious mechanical problems.</p>
        
        <h2>4. Replace Air Filters</h2>
        <p>A clean air filter ensures your engine gets the air it needs to run efficiently. Replace your air filter every 12,000-15,000 miles or when it appears dirty or clogged.</p>
        
        <h2>5. Schedule Regular Inspections</h2>
        <p>Professional inspections can catch problems before they become expensive repairs. Have your vehicle inspected at least once a year or as recommended by your mechanic.</p>
        
        <p>Following these simple maintenance tips will help ensure your vehicle serves you well for years to come. If you need professional maintenance service, don't hesitate to contact our expert team.</p>
      `
    },
    'transmission-service-signs': {
      title: t('blog.posts.post2.title'),
      date: '2024-05-20',
      author: 'Pierre Leblanc',
      readTime: '7 min read',
      category: 'Transmission',
      summary: t('blog.posts.post2.summary'),
      image: images.image.mecano3,
      content: `
        <p>Your transmission is one of the most important components of your vehicle, responsible for transferring power from the engine to the wheels. Recognizing the early warning signs of transmission problems can save you thousands in repair costs.</p>
        
        <h2>Warning Signs to Watch For</h2>
        
        <h3>1. Unusual Noises</h3>
        <p>Listen for grinding, whining, or humming sounds when shifting gears or while the car is in neutral. These noises often indicate worn transmission components that need attention.</p>
        
        <h3>2. Slipping Gears</h3>
        <p>If your transmission slips out of gear while driving, or if you experience a delay when shifting from park to drive, this is a clear sign of transmission trouble.</p>
        
        <h3>3. Fluid Leaks</h3>
        <p>Transmission fluid is typically red or pink in color. If you notice puddles of this fluid under your parked car, you likely have a transmission leak that needs immediate attention.</p>
        
        <h3>4. Burning Smell</h3>
        <p>A burning odor, especially when accompanied by dark or burnt-smelling transmission fluid, indicates overheating and potential serious damage.</p>
        
        <h3>5. Dashboard Warning Lights</h3>
        <p>Don't ignore transmission warning lights or check engine lights. These electronic systems can detect problems before they become apparent to the driver.</p>
        
        <h2>When to Seek Professional Help</h2>
        <p>If you notice any of these warning signs, it's crucial to have your transmission inspected by a qualified technician immediately. Early intervention can often prevent minor issues from becoming major, expensive repairs.</p>
        
        <p>At FAHE Garage, our transmission specialists have over 20 years of experience diagnosing and repairing all types of transmission problems. Contact us today for a professional assessment.</p>
      `
    }
  }

  const currentPost = slug ? blogPosts[slug as keyof typeof blogPosts] : null
  const otherPosts = Object.entries(blogPosts).filter(([key]) => key !== slug)

  if (!currentPost) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-semibold">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-white">{currentPost.title}</li>
              </ol>
            </nav>

            {/* Post Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full">
                {currentPost.category}
              </span>
              <span className="text-gray-300 text-sm">
                {new Date(currentPost.date).toLocaleDateString()}
              </span>
              <span className="text-gray-300 text-sm">By {currentPost.author}</span>
              <span className="text-gray-300 text-sm">{currentPost.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {currentPost.title}
            </h1>

            {/* Summary */}
            <p className="text-xl text-gray-300 leading-relaxed">
              {currentPost.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={currentPost.image}
              alt={currentPost.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Post Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
            style={{
              fontSize: '18px',
              lineHeight: '1.7',
              color: '#374151'
            }}
          >
            <div 
              dangerouslySetInnerHTML={{ __html: currentPost.content }}
              className="blog-content"
            />
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link
              to="/blog"
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Blog</span>
            </Link>

            <button
              onClick={() => navigateToContact(navigate, `/blog/${slug}`)}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Get Service
            </button>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Related Articles
              </h2>
              <p className="text-gray-600">
                Continue reading for more automotive tips and insights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherPosts.slice(0, 2).map(([postSlug, post], index) => (
                <motion.div
                  key={postSlug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={`/blog/${postSlug}`}
                    className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="h-48 bg-gray-200">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {post.summary}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Need Professional Automotive Service?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our expert technicians are ready to help with all your automotive needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: colors.primary[600] }}
                onClick={() => navigateToContact(navigate, `/blog/${slug}`)}
              >
                Schedule Service
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-lg font-semibold text-gray-900 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Call (438) 867-1822
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .blog-content h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 2rem 0 1rem 0;
          color: #1f2937;
        }
        .blog-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 1.5rem 0 0.75rem 0;
          color: #374151;
        }
        .blog-content p {
          margin: 1rem 0;
          line-height: 1.7;
        }
        .blog-content ul, .blog-content ol {
          margin: 1rem 0;
          padding-left: 2rem;
        }
        .blog-content li {
          margin: 0.5rem 0;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default BlogPost 