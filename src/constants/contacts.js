import * as path from 'node:path';

// oтримаємо абсолютний шлях до файлу db.json
// export const PATH_DB = path.join(process.cwd(), 'src', 'db', 'db.json');
export const PATH_DB = path.resolve('src', 'db', 'db.json');
