import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-3 font-bold text-xl hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="Sparkles" size={20} className="text-primary-foreground" />
            </div>
            <span className="hidden sm:block">ImageGen</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('generator')}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Генератор
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Галерея
            </button>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Документация
            </a>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Цены
            </a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden sm:flex">
              Войти
            </Button>
            <Button>
              <Icon name="Zap" className="mr-2" size={16} />
              Начать
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
