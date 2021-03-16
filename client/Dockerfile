FROM node:alpine as todo-app-build

#RUN mkdir   /client

WORKDIR /client

COPY package.json package-lock.json README.md ./

RUN npm install

COPY ./public ./public

COPY ./src ./src

ENV REACT_APP_baseAPIURL=http://1192.168.43.171:30621

RUN npm run build

FROM nginx:latest

LABEL maintainer=Tunde-Oyewo

COPY --from=todo-app-build /client/build/ /usr/share/nginx/html

EXPOSE 80

#/////////////////////////////////////////////////

# FROM node:alpine as todo-app-build

# WORKDIR /client

# COPY package.json package-lock.json README.md ./

# RUN npm install

# COPY ./public ./public

# COPY ./src ./src

# ENV REACT_APP_baseAPIURL=http://1192.168.43.171:30621

# #RUN npm build

# #FROM nginx:latest

# #LABEL maintainer=Tunde-Oyewo

# #COPY --from=todo-app-build /client/build/ /usr/share/nginx/html

# COPY . .

# EXPOSE 80

# CMD ["npm", "start"]
