import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  // отримуємо всі контакти
  const contacts = await readContacts();
  // видаляємо останнійй елемент масиву
  contacts.pop();
  // перезаписуємо данні в масиві
  await writeContacts(contacts);
};

removeLastContact();
