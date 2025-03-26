import { GUESTBOOK } from '../data/guestbook.js';
import { BaseLayout } from '../layouts/base.js';
import { useHonoContext } from '../utils/context.js';
import { useTranslation } from '../utils/lang.js';

export function AdminGuestbook() {
  const title = useTranslation({ en: 'Admin Guestbook', fr: "Admin Livre d'or" });
  const deleteButton = useTranslation({ en: 'Delete', fr: 'Supprimer' });
  const context = useHonoContext();

  if (context.req.query('delete')) {
    GUESTBOOK.splice(parseInt(context.req.query('delete')!), 1);
  }

  return (
    <BaseLayout title={title}>
      <main>
        <h2>{title}</h2>
        <section>
          {GUESTBOOK.map((msg, index) => (
            <article data-testid="guestbook-message">
              <p>{msg.message}</p>
              <p style={{ textAlign: 'right', fontStyle: 'italic' }}>
                <span data-testid="author">{msg.author}</span>
                {' - '}
                <time datetime={msg.date}>{msg.date}</time>
              </p>
              <footer>
                <a href={'/admin/guestbook?delete=' + index} role="button">
                  {deleteButton}
                </a>
              </footer>
            </article>
          ))}
        </section>
      </main>
    </BaseLayout>
  );
}
