class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :detail
      t.boolean :isdone
      t.text :tag

      t.timestamps
    end
  end
end
