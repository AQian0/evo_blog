FROM node:20.8.1
LABEL maintainer="AQian"
ENV HOST 0.0.0.0
RUN npm install -g pnpm
WORKDIR /evo-blog
COPY . .
EXPOSE 3000
RUN pnpm install --frozen-lockfile
RUN pnpm build
CMD ["node",".output/server/index.mjs"]
