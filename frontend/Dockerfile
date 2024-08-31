# https://dev.to/thexdev/dockerize-production-reactjs-3ai9

FROM node

WORKDIR /app

COPY . /app

RUN npm install
RUN npm install js-cookie

CMD "npm" "run" "dev" "--" "--host"