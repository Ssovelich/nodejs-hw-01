import { readFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  // зчитуємо данні з файлу db.json та декодуємо їх
  const data = await readFile(PATH_DB, 'utf-8');
  // повертаємо розпарсені данні
  return JSON.parse(data);
};
