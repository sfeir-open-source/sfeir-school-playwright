import { GUESTBOOK } from '../data/guestbook.js';
import { useTranslation } from '../utils/lang.js';

export function LastGuestbookMessage() {
  const guestbookTitle = useTranslation({ en: 'Last guestbook messages', fr: "Derniers messages du livre d'or" });
  const publishLink = useTranslation({ en: 'Publish a message', fr: 'Publier un message' });
  return (
    <section data-testid="guestbook">
      <h2>{guestbookTitle}</h2>
      <div class="grid">
        {GUESTBOOK.slice(-3).map((msg) => (
          <article data-testid="guestbook-message">
            <p>{msg.message}</p>
            <p style={{ textAlign: 'right', fontStyle: 'italic' }}>
              <span data-testid="author">{msg.author}</span>
              {' - '}
              <time datetime={msg.date}>{msg.date}</time>
            </p>
          </article>
        ))}
      </div>
      <a href="/guestbook" role="button">
        {publishLink}
      </a>
    </section>
  );
}
