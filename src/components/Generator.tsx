import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const styles = [
  { id: 'realism', name: 'Реализм', icon: 'Camera' },
  { id: 'anime', name: 'Аниме', icon: 'Sparkles' },
  { id: 'digital', name: 'Цифровое искусство', icon: 'Palette' },
  { id: 'fantasy', name: 'Фэнтези', icon: 'Wand2' },
  { id: 'photo', name: 'Фотография', icon: 'Aperture' },
  { id: '3d', name: '3D-рендер', icon: 'Box' },
];

export default function Generator() {
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('realism');
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Введите описание",
        description: "Пожалуйста, опишите изображение, которое хотите создать",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    setTimeout(() => {
      toast({
        title: "Изображение создано! ✨",
        description: "Ваше изображение успешно сгенерировано и добавлено в галерею",
      });
      setIsGenerating(false);
      setPrompt('');
    }, 2000);
  };

  return (
    <section id="generator" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Создайте своё изображение</h2>
          <p className="text-muted-foreground text-lg">Опишите вашу идею, и ИИ воплотит её в жизнь</p>
        </div>
        
        <div className="space-y-6 bg-card border border-border rounded-2xl p-8 shadow-xl">
          <div>
            <label className="text-sm font-medium mb-2 block">Описание изображения</label>
            <Textarea
              placeholder="Например: Космический корабль над неоновым городом в стиле киберпанк, детализированный, драматическое освещение..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[120px] text-base resize-none"
            />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-3 block">Выберите стиль</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {styles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style.id)}
                  className={`
                    p-4 rounded-xl border-2 transition-all duration-200
                    ${selectedStyle === style.id 
                      ? 'border-primary bg-primary/10 scale-105' 
                      : 'border-border hover:border-primary/50 hover:bg-accent'
                    }
                  `}
                >
                  <Icon name={style.icon as any} size={24} className="mx-auto mb-2" />
                  <span className="text-sm font-medium">{style.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          <Button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-6 text-lg font-semibold hover:scale-105 transition-transform"
            size="lg"
          >
            {isGenerating ? (
              <>
                <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                Генерация...
              </>
            ) : (
              <>
                <Icon name="Wand2" className="mr-2" size={20} />
                Создать изображение
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
