
To install and run project, there are 2 ways: Docker and usual one

## Docker
1. Make sure that you have `docker` and `docker-compose`.
2. Run `docker-compose build` and `docker-compose up -d`.
3. Go to `localhost:5173`.


## Usual
1. Make sure you have `npm` and `node` installed. (I've used node 18).
2. Go to the root folder of project.
3. Run `npm install`.
4. Run `npm run start:dev` or `npm run start`.
5. Make sure that backend is running up. Open your browser (or Postman) and navigate to `localhost:3000/users`. You should see user list in JSON format.
6. After successful run of backend part, go to the `client` directory and run `npm install`.
7. Then run `npm run dev`.
8. Finally go to your browser and navigate to `localhost:5173`. You see user list as card list.
