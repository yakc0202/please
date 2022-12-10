FROM node:17-alpine3.15

# Copy [host machine] [container]
# (first path is relative to the Dockerfile, second is relative to root on the container)
# COPY package*.json .

# RUN npm install

# COPY . .

# RUN npm run build

# # cmd -c npm start
# CMD ["npm", "start"]
ENV TZ=America/Atikokan
WORKDIR /app
COPY package*.json .
RUN npm install
RUN npm install -g react-scripts

CMD ["npm", "start"]