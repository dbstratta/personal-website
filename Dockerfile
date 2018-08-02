FROM node:10.8.0 AS builder

ENV NODE_ENV=${NODE_ENV:-production}

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

# We need `react-app-rewired` to build the app
# and it's listed in `devDependencies`. That's why
# we pass `--production=false`.
RUN yarn install --production=false

COPY . .

RUN yarn build

FROM nginx:1.15.2-alpine

COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html/

COPY nginx/nginx.conf /etc/nginx/sites-available/portfolio.conf
