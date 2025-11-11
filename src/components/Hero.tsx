import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  const scrollToGenerator = () => {
    document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
            Создавайте потрясающие изображения с помощью ИИ
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Превратите ваши идеи в уникальные визуальные произведения с помощью передовых алгоритмов искусственного интеллекта
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 hover:scale-105 transition-transform"
              onClick={scrollToGenerator}
            >
              <Icon name="Sparkles" className="mr-2" size={20} />
              Начать бесплатно
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 hover:scale-105 transition-transform"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Узнать больше
            </Button>
          </div>
        </div>
        
        <div className="relative max-w-5xl mx-auto animate-scale-in">
          <div className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-2xl aspect-video">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <Icon name="Image" size={64} className="mx-auto text-primary/40" />
                <p className="text-muted-foreground text-lg">Пример сгенерированного изображения</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-3xl -z-10 opacity-50" />
        </div>
      </div>
    </section>
  );
}
