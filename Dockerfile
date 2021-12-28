FROM node:16

# Create the app working dir
RUN mkdir -p /usr/src/website
WORKDIR /usr/src/website

COPY package*.json /usr/src/website/

RUN npm ci --only=production

COPY . /usr/src/website

RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "start" ]