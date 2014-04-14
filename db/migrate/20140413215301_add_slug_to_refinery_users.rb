class AddSlugToRefineryUsers < ActiveRecord::Migration
  def change
    add_column :refinery_users, :slug, :string
  end
end
