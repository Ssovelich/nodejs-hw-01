import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = (contacts) =>
  // fs.writeFile перезаписує данні фалу(видаляє старе, записує нове)
  // куди записуємо(PATH_DB), що записуємо: масив обєктів робимо строкою(JSON.stringify(contacts)),
  // щоб не було все в одну строку, додаємо роздільники (null, 2)
  fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
