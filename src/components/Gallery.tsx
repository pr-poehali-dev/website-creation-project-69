import Icon from '@/components/ui/icon';

const placeholderImages = [
  { id: 1, prompt: 'Космический пейзаж' },
  { id: 2, prompt: 'Футуристический город' },
  { id: 3, prompt: 'Абстрактное искусство' },
  { id: 4, prompt: 'Портрет в стиле аниме' },
  { id: 5, prompt: 'Фэнтези существо' },
  { id: 6, prompt: '3D-архитектура' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Галерея созданных изображений</h2>
          <p className="text-muted-foreground text-lg">Примеры работ, созданных нашим ИИ</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderImages.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl aspect-square animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
              
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                <Icon name="ImageIcon" size={48} className="text-primary/40 mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-muted-foreground font-medium">{item.prompt}</p>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="flex gap-2 w-full">
                  <button className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    <Icon name="Download" size={16} className="inline mr-1" />
                    Скачать
                  </button>
                  <button className="flex-1 bg-secondary text-secondary-foreground py-2 rounded-lg font-medium hover:bg-secondary/90 transition-colors">
                    <Icon name="Share2" size={16} className="inline mr-1" />
                    Поделиться
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
