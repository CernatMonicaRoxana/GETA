FROM node

COPY . .

RUN npm install

EXPOSE 8080
CMD ["node", "./index.js"]
