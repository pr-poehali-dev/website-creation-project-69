import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  const scrollToGenerator = () => {
    document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="animate-fade-in space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            <Icon name="Sparkles" size={16} />
            <span>Powered by AI Technology</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Создавайте искусство
            </span>
            <br />
            <span className="text-foreground/80">с помощью ИИ</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Превратите текст в потрясающие изображения за секунды. Никаких навыков дизайна не требуется.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 rounded-xl hover:scale-105 transition-all shadow-lg shadow-primary/25"
              onClick={scrollToGenerator}
            >
              <Icon name="Wand2" className="mr-2" size={20} />
              Начать создавать
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-7 rounded-xl hover:scale-105 transition-all border-2"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть демо
            </Button>
          </div>
        </div>
        
        <div className="relative max-w-6xl mx-auto animate-scale-in">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-card to-accent border-2 border-border shadow-2xl">
            <div className="aspect-[16/9] flex items-center justify-center p-12">
              <div className="grid grid-cols-2 gap-4 w-full">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent border border-border/50 flex items-center justify-center backdrop-blur-sm">
                    <Icon name="Image" size={48} className="text-primary/40" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-3xl blur-3xl -z-10 opacity-60 animate-pulse" />
        </div>
      </div>
    </section>
  );
}