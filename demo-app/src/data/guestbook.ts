export interface Message {
  author: string;
  message: string;
  date: string;
}

export const GUESTBOOK: Message[] = [
  {
    author: 'Marie Dupont',
    message:
      'Les croissants sont absolument délicieux ! Je viens chaque dimanche matin pour mon petit déjeuner. La qualité est toujours au rendez-vous.',
    date: '2024-01-15',
  },
  {
    author: 'Jean-Pierre Martin',
    message:
      'Meilleure baguette tradition du quartier ! La croûte est croustillante et la mie parfaitement alvéolée. Un vrai savoir-faire artisanal.',
    date: '2024-02-12',
  },
  {
    author: 'Emma Thompson',
    message:
      'What a delightful little bakery! The pain au chocolat reminds me of my student years in Paris. The staff is lovely and so patient with my broken French. A true authentic French experience!',
    date: '2024-04-14',
  },
  {
    author: 'Sophie Lambert',
    message:
      "J'ai commandé un Paris-Brest pour l'anniversaire de mon mari, c'était une pure merveille. Toute la famille a adoré. Merci pour votre travail !",
    date: '2024-08-08',
  },
  {
    author: 'Ahmed Benali',
    message:
      'Service chaleureux et pâtisseries exceptionnelles. La tarte au citron meringuée est un vrai coup de cœur !',
    date: '2024-08-05',
  },
  {
    author: 'Claire Moreau',
    message:
      "Cela fait 5 ans que je suis cliente et la qualité n'a jamais baissé. Les viennoiseries sont toujours aussi savoureuses. Une adresse incontournable !",
    date: '2024-10-02',
  },
  {
    author: 'James Wilson',
    message:
      "Simply amazing! I discovered this French bakery during my holiday in France and their croissants are better than anything I've had in London. Will definitely come back next time I'm in town!",
    date: '2024-12-16',
  },
  {
    author: 'Hans Mueller',
    message:
      'Eine wunderbare Bäckerei! Die Baguettes sind perfekt - knusprig außen und weich innen. Erinnert mich an meinen Urlaub in der Provence. Ich komme auf jeden Fall wieder!',
    date: '2025-01-13',
  },
];
