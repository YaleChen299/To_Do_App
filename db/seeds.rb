# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Task.create(
    title: 'Buy bread',
    detail: 'I need to go buy bread in the store. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis arcu accumsan, tempor magna sit amet, feugiat augue. Vestibulum commodo accumsan mauris, sed fringilla lacus tristique nec. Etiam non porta leo. Vivamus lacinia, nisi vitae pellentesque euismod, ex libero viverra purus, ac faucibus velit mauris id neque. Pellentesque ultrices, augue a commodo varius, nisi mauris sollicitudin risus, et scelerisque velit est a urna. Phasellus vestibulum, nulla sed rhoncus gravida, diam ex aliquet nulla, at varius nisl mauris sit amet neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vitae quam nec ex vulputate lacinia sed vel purus. Quisque vehicula vulputate risus eu elementum. Aliquam molestie quis odio vel hendrerit. Pellentesque dapibus tempus justo eu lobortis.',
    isdone: true,
    tag: 'shopping daily'
)

Task.create(
    title: 'Develop a To-Do App',
    detail: 'make the Rails API and React App',
    isdone: false,
    tag: 'study'
)
