import { BaseLayout } from '../layouts/base.js';
import { useTranslation } from '../utils/lang.js';

export function Guestbook() {
  const title = useTranslation({ en: 'Guestbook', fr: "Livre d'or" });
  const authorLabel = useTranslation({ en: 'Author:', fr: 'Auteur :' });
  const messageLabel = useTranslation({ en: 'Message:', fr: 'Message :' });
  const sendButton = useTranslation({ en: 'Send', fr: 'Envoyer' });
  const now = new Date();
  return (
    <BaseLayout title={title}>
      <main>
        <h2>{title}</h2>
        <form method="post">
          <label for="author">{authorLabel}</label>
          <input id="author" name="author" type="text" required />
          <label for="message">{messageLabel}</label>
          <input id="message" name="message" type="text" required />
          <input
            type="hidden"
            name="date"
            value={`${now.getFullYear()}-${now.getMonth() < 10 ? '0' : ''}${now.getMonth()}-${now.getDate()}`}
          />
          <button>{sendButton}</button>
        </form>
      </main>
    </BaseLayout>
  );
}

export function GuestbookSaved() {
  const title = useTranslation({ en: 'Guestbook', fr: "Livre d'or" });
  const thanks = useTranslation({ en: 'Thank you for your feedback!', fr: 'Merci pour votre commentaire!' });
  return (
    <BaseLayout title={title}>
      <main>
        <h2>{title}</h2>
        <p>{thanks}</p>
      </main>
    </BaseLayout>
  );
}
