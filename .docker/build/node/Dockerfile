ARG NODE_VERSION
FROM node:8.4.0-stretch

RUN apt-get update

RUN npm install --global eslint

# Add Chromium and Firefox with xvfb for karma tests

ADD xvfb-chromium /usr/bin/xvfb-chromium
RUN chmod +x /usr/bin/xvfb-chromium
ENV CHROMIUM_BIN=/usr/bin/xvfb-chromium

ADD xvfb-firefox /usr/bin/xvfb-firefox
RUN chmod +x /usr/bin/xvfb-firefox
ENV FIREFOX_BIN=/usr/bin/xvfb-firefox

WORKDIR /usr/src/app
