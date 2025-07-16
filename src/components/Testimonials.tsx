import { useTranslation } from 'react-i18next'
import { cn } from "@/lib/utils"
import { TestimonialCard, type TestimonialAuthor } from "@/components/ui/testimonial-card"
import { useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { navigateToContact } from '../utils/navigation'

interface TestimonialsSectionProps {
  className?: string
}

interface TestimonialData {
  author: TestimonialAuthor
  text: string
  rating: number
  service: string
}

export function TestimonialsSection({ className }: TestimonialsSectionProps) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const marqueeRef = useRef<HTMLDivElement>(null)

  // Add marquee animation styles
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-100%); }
      }
      .animate-marquee {
        animation: marquee var(--duration) linear infinite;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const testimonials: TestimonialData[] = [
    {
      author: {
        name: "Marie Dubois",
        location: "Joliette, QC",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
        initials: "MD"
      },
      text: "Service exceptionnel ! Mon problème de transmission a été résolu rapidement et professionnellement. Je recommande vivement FAHE Garage.",
      rating: 5,
      service: "Réparation Transmission"
    },
    {
      author: {
        name: "Jean-Pierre Laval",
        location: "Berthierville, QC",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        initials: "JP"
      },
      text: "Plus de 20 ans que je fais affaire avec eux. Toujours un travail impeccable et des prix honnêtes. Une équipe de confiance !",
      rating: 5,
      service: "Entretien Régulier"
    },
    {
      author: {
        name: "Sophie Martin",
        location: "Repentigny, QC",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        initials: "SM"
      },
      text: "Reconstruction complète de mon moteur. Le travail était parfait et la garantie m'a donné une totale tranquillité d'esprit.",
      rating: 5,
      service: "Reconstruction Moteur"
    },
    {
      author: {
        name: "Michel Tremblay",
        location: "L'Assomption, QC",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        initials: "MT"
      },
      text: "Diagnostic précis et réparation efficace. L'équipe prend le temps d'expliquer les problèmes et les solutions. Très professionnel.",
      rating: 5,
      service: "Diagnostic Auto"
    },
    {
      author: {
        name: "Isabelle Roy",
        location: "Joliette, QC",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        initials: "IR"
      },
      text: "Service clientèle exemplaire et travail de qualité. Mon véhicule fonctionne comme neuf après leur intervention. Merci !",
      rating: 5,
      service: "Entretien Complet"
    },
    {
      author: {
        name: "Robert Gagnon",
        location: "Saint-Gabriel, QC",
        avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
        initials: "RG"
      },
      text: "Spécialistes en transmission reconnus dans la région. Ils ont sauvé ma voiture quand les autres garages avaient abandonné.",
      rating: 5,
      service: "Spécialiste Transmission"
    }
  ]

  return (
    <section className={cn(
      "bg-gray-50 text-gray-900",
      "py-16 sm:py-20 md:py-24",
      className
    )}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 sm:gap-12 px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
          <h2 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg max-w-3xl font-medium text-gray-600 sm:text-xl">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Marquee */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1.5rem] [gap:var(--gap)] flex-row [--duration:30s]">
            <div 
              ref={marqueeRef}
              className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]"
            >
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-gray-50 to-transparent" />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 mb-4">
            {t('testimonials.cta_text')}
          </p>
          <button 
            onClick={() => navigateToContact(navigate, location.pathname)}
            className="inline-flex items-center justify-center bg-[#05299E] hover:bg-[#041f7d] text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            {t('testimonials.cta_button')}
          </button>
        </div>
      </div>
    </section>
  )
}
