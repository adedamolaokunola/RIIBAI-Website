import Icon from '@/components/ui/AppIcon';

interface PreviewContent {
  id: number;
  title: string;
  description: string;
  type: string;
  icon: string;
  duration?: string;
}

interface PreviewContentCardProps {
  content: PreviewContent;
  onView: (contentId: number) => void;
}

const PreviewContentCard = ({ content, onView }: PreviewContentCardProps) => {
  return (
    <div className="bg-card rounded-lg p-6 border border-border hover:border-secondary/50 transition-all duration-300 group cursor-pointer"
         onClick={() => onView(content.id)}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors duration-300">
          <Icon name={content.icon as any} size={24} className="text-secondary" />
        </div>
        <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
          {content.type}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-secondary transition-colors duration-300">
        {content.title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-4">
        {content.description}
      </p>
      
      <div className="flex items-center justify-between">
        {content.duration && (
          <span className="text-xs text-muted-foreground flex items-center">
            <Icon name="ClockIcon" size={14} className="mr-1" />
            {content.duration}
          </span>
        )}
        <span className="text-sm text-secondary font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
          View Preview
          <Icon name="ArrowRightIcon" size={16} className="ml-1" />
        </span>
      </div>
    </div>
  );
};

export default PreviewContentCard;