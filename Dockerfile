FROM pierrezemb/gostatic
WORKDIR /react-vite-app
COPY package.json ./
RUN npm install --silent
COPY . ./
CMD ["npm", "run", "build"]
COPY ./dist/ /srv/http/
