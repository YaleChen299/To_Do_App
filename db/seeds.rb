# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Task.create([
    {
        title: 'Buy bread',
        detail: 'I need to go buy bread in the store. and do this and do that',
        isdone: true,
        tag: 'shopping daily'
    },
    {
        title: 'Develop a To-Do App',
        detail: 'make the Rails API and React App',
        isdone: false,
        tag: 'study'
    }]
)
