FROM node:14.15.4-slim


RUN apt update && apt install -y\
  git \
  zsh \
  curl \
  wget

RUN npm install -g @nestjs/cli@8.2.5 npm@8.5.5

USER node

WORKDIR /home/node/app

CMD [ "sh","-c","npm install && tail -f /dev/null" ]