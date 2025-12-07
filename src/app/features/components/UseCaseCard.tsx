import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface UseCaseCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  benefits: string[];
  icon: string;
}

const UseCaseCard = ({ title, description, image, alt, benefits, icon }: UseCaseCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
            <Icon name={icon as any} size={24} className="text-accent-foreground" />
          </div>
          <h4 className="text-xl font-headline font-bold text-white">
            {title}
          </h4>
        </div>
      </div>

      <div className="p-6">
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        <div className="space-y-2">
          <div className="text-sm font-semibold text-foreground mb-2">Key Benefits:</div>
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <Icon name="CheckCircleIcon" size={16} className="text-accent mt-0.5 flex-shrink-0" variant="solid" />
              <span className="text-sm text-muted-foreground">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCaseCard;