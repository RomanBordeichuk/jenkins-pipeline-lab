# Використовуємо легкий базовий образ
FROM node:18-alpine

# Створюємо робочу директорію
WORKDIR /usr/src/app

# Копіюємо файли залежностей
COPY package*.json ./

# Встановлюємо залежності
RUN npm install --production

# Копіюємо вихідний код
COPY . .

# Відкриваємо порт, на якому працює Express
EXPOSE 8080

# Запускаємо додаток
CMD [ "node", "app.js" ]