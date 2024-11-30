import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  // зчитуємо з файлу db.json список контактів
  const contsctList = await readContacts();
  // створюємо 1 контакт
  const contact = createFakeContact();
  // перезаписуємо данні в файлі db.json з додаванням 1 нового контакту
  await writeContacts([...contsctList, contact]);
};

addOneContact();
