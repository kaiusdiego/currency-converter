FROM node:14.17.0-slim


RUN apt update && apt install -y\
  git \
  zsh \
  curl \
  wget \
  procps

RUN npm install -g @nestjs/cli@8.2.5 npm@8.5.5

WORKDIR /app

COPY . ./
