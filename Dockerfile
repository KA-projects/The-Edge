FROM node:18-alpine
WORKDIR /workApp
COPY . .
RUN npm install --production
CMD ["npm","run dev"]
EXPOSE 8080