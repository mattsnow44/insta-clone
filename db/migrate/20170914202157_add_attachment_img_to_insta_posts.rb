class AddAttachmentImgToInstaPosts < ActiveRecord::Migration[5.1]
  def self.up
    change_table :insta_posts do |t|
      t.attachment :img
    end
  end

  def self.down
    remove_attachment :insta_posts, :img
  end
end
