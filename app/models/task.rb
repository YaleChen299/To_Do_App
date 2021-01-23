class Task < ApplicationRecord
    validates :title, presence: true
    validates :isdone, presence: true, inclusion: { in: [ true, false ] }
end
