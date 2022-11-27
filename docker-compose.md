#### How to use the development environnement

You have to create an .env file, following the example of ./env_sample.

You may need to locally stop nginx, do
`systemctl stop nginx`
or any other command you prefer
You may also need to start docker if the daemon don't want to run at all.
`systemctl start docker`

Then, you just have to
`docker-compose up` to launch the whole thing.

### development

#### frontend

Holy be the hot reloading, write code, save, enjoy the result.
You can access whatever you code in the frontend at localhost:80 from your preferred browser.

If you add some dependencies package, you have to rebuild the container, you can rebuild only the container using
`docker-compose build --no-cache front`

#### backend

Holy be the hot reloading, write code, save, enjoy the result.
You can access whatever you code in the backend at http://localhost:80/api/ from your preferred browser.
You can access any routes by using http://localhost:80/api/[ROUTE], the route will be cleansed from the /api/ part. Leaving you only what you need.
Don't forget to refresh the page to do a new call to the route though ;)

You can test the get routes directly on browser, but it's more complicated for other types of routes. You can use insomnia, or any tool you see fit.

If you add some dependencies package, you have to rebuild the container, you can rebuild only the container using
`docker-compose build --no-cache back`

#### phpmyadmin

You can access phpmyadmin at http://localhost:5432 from your preferred browser.
user : postgres
password : the root password from .env in /

### containers manipulations

#### interactive

If you need to enter a container, let's say, backend, you can do :
`docker-compose exec back bash`
Or if bash is not availaible (depending on image base):
`docker-compose exec back sh`

#### Rebuilding container one to one

Example for the backend :
`docker-compose build --no-cache back`

#### acces container logs

Example for the backend :
`docker-compose logs back`

#### stopping all dockers

`docker stop $(docker ps -qa)`

#### deleting all dockers

They must be already stopped beforehand.
`docker system prune -fa`

#### BONUS

There is a few npm run `command` in package.json, for your convenience.
