import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  // отримуємо контакти
  const contacts = await readContacts();
  // повертаємо довжину масиву контактів, тобто кількість контактів
  return contacts.length;
};

console.log(await countContacts());
