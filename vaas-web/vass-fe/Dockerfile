FROM node:lts AS development

ENV CI=true
ENV PORT=3000

WORKDIR /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm ci
COPY . /code

CMD [ "npm", "start" ]

FROM development AS builder

RUN npm run build

FROM development as dev-envs
#RUN <<EOF
RUN apt-get update
RUN apt-get install -y --no-install-recommends git
#EOF

#RUN <<EOF
RUN useradd -s /bin/bash -m vaasfe
RUN groupadd docker
RUN usermod -aG docker vaasfe
#EOF

# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /
CMD [ "npm", "start" ]

FROM nginx:1.13-alpine

COPY --from=builder /code/build /usr/share/nginx/html
