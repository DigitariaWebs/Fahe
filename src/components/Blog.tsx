import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Blog: React.FC = () => {
  const { t } = useTranslation()

  const blogPosts = [
    {
      title: t('blog.posts.post1.title'),
      date: '2024-06-01',
      summary: t('blog.posts.post1.summary'),
      slug: 'car-maintenance-tips',
      category: 'Maintenance',
      readTime: '5 min read'
    },
    {
      title: t('blog.posts.post2.title'),
      date: '2024-05-20',
      summary: t('blog.posts.post2.summary'),
      slug: 'transmission-service-signs',
      category: 'Transmission',
      readTime: '7 min read'
    }
  ]

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            {t('blog.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {t('blog.subtitle')}
          </motion.p>
        </div>
        <div className="space-y-8">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                {/* Post Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {post.readTime}
                  </span>
                </div>

                {/* Post Title */}
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors duration-200">
                    {post.title}
                  </h3>
                </Link>

                {/* Post Summary */}
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {post.summary}
                </p>

                {/* Read More Link */}
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center space-x-2 text-primary-700 hover:text-primary-800 font-semibold group-hover:underline transition-all duration-200"
                >
                  <span>{t('blog.readMore')}</span>
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog 