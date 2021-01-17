class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :detail
      # t.datetime :deadline
      # t.string :steps, array: true 
      # t.string :tags, array: true 

      t.timestamps
    end
  end
end
