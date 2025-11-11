import Icon from '@/components/ui/icon';

const footerSections = [
  {
    title: 'ImageGen',
    links: [
      { name: 'О нас', href: '#' },
      { name: 'Блог', href: '#' },
      { name: 'Карьера', href: '#' },
      { name: 'Контакты', href: '#' },
    ],
  },
  {
    title: 'Продукт',
    links: [
      { name: 'Функции', href: '#' },
      { name: 'Цены', href: '#' },
      { name: 'API', href: '#' },
      { name: 'Документация', href: '#' },
    ],
  },
  {
    title: 'Поддержка',
    links: [
      { name: 'Помощь', href: '#' },
      { name: 'Сообщество', href: '#' },
      { name: 'Статус системы', href: '#' },
      { name: 'Сообщить о проблеме', href: '#' },
    ],
  },
  {
    title: 'Правовая информация',
    links: [
      { name: 'Условия использования', href: '#' },
      { name: 'Политика конфиденциальности', href: '#' },
      { name: 'Политика в отношении файлов cookie', href: '#' },
      { name: 'Лицензии', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="Sparkles" size={16} className="text-primary-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">
              © 2023 ImageGen. Все права защищены.
            </span>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Github" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Twitter" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Linkedin" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
