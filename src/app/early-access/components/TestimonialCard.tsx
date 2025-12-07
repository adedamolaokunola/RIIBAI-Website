import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  quote: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-lg p-6 border border-border hover:border-secondary/50 transition-all duration-300 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
          <AppImage
            src={testimonial.image}
            alt={testimonial.alt}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          <p className="text-xs text-muted-foreground">{testimonial.company}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, index) => (
          <Icon
            key={index}
            name="StarIcon"
            variant={index < testimonial.rating ? 'solid' : 'outline'}
            size={16}
            className={index < testimonial.rating ? 'text-accent' : 'text-muted-foreground'}
          />
        ))}
      </div>
      
      <p className="text-card-foreground text-sm leading-relaxed flex-1">
        "{testimonial.quote}"
      </p>
    </div>
  );
};

export default TestimonialCard;