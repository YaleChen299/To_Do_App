# CVWO TO_DO APP
by Chen Yanyu

### File Structure

* The CreateReactApp lives in `/client`
* The Backend is created using Rails 6.1 with `api-only` setting

### Set up Guide
* Clone the repo
* Set up Postgresql database as the configuration in `/config/database.yml`
* run `rake db:create` to create the database
* run `rake db:migrate` to do the necessary migration.
* run `rake db:seed` to seed the database, you can configure the `/db/seeds.db` file to change the seed data.
* run the back end with `rails server -p 3001` to start the server at port 3001, this is to avoid clashing with React.
* `cd client` and run `npm run start`.

You can visit the api at
https://powerful-savannah-28155.herokuapp.com

 Prefix |Verb|URI Pattern|Controller#Action
 -------|----|-----------|-----------------
api_tasks |GET    |/api/tasks(.:format) | api/tasks#index
-|POST   |/api/tasks(.:format) |api/tasks#create
api_task |GET    |/api/tasks/:id(.:format) |api/tasks#show
-|PATCH  |/api/tasks/:id(.:format)|pi/tasks#update
-|PUT   | /api/tasks/:id(.:format) |api/tasks#update
-|DELETE |/api/tasks/:id(.:format)  |api/tasks#destroy


