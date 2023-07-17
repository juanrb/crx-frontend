FROM node:latest
RUN mkdir -p -v /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
EXPOSE 3000
RUN cd /usr/src/app
CMD ["npm", "run", "dev"]