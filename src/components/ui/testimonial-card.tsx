import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export interface TestimonialAuthor {
  name: string
  location: string
  avatar: string
  initials?: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  rating: number
  service?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  rating,
  service,
  className
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-xl border",
        "bg-white shadow-lg hover:shadow-xl",
        "p-6 text-start",
        "transition-all duration-300 hover:-translate-y-1",
        "max-w-[350px] sm:max-w-[380px]",
        "border-t-4 border-t-[#05299E]",
        className
      )}
    >
      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            )}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 italic">
        "{text}"
      </blockquote>

      {/* Service */}
      {service && (
        <div className="mb-4">
          <span className="inline-block bg-[#05299E]/10 text-[#05299E] text-xs font-semibold px-3 py-1 rounded-full">
            {service}
          </span>
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto">
        <Avatar className="h-12 w-12 border-2 border-[#05299E]/20">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback className="bg-[#05299E] text-white font-semibold">
            {author.initials || author.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-gray-900 leading-none">
            {author.name}
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            {author.location}
          </p>
        </div>
      </div>
    </div>
  )
}
