import { createFakeContact } from '../utils/createFakeContact.js';
// import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

// 1) Створюємо список контактів
// 2) Проситати данні з файлу db.json та отримати ці данні
// 3) Записуємо нові контакти до фалу db.json

const generateContacts = async (number) => {
  // Отримуємо список контактів з фалу db.json
  const contsctList = await readContacts();
  // Створюємо масим(Array),значення кожного елементу масиву є 0(fill(0))
  //  та за допомогою(map), заповнюємо масив данними(контакт)
  const newContscts = Array(number).fill(0).map(createFakeContact);
  // Поєднюємо список існуєчиїх контактів та нові
  const newContactList = [...contsctList, ...newContscts];
  // Перезаписуємо данні в файйлі db.json
  await writeContacts(newContactList);
};

generateContacts(5);
