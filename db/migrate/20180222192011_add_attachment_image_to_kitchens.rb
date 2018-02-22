class AddAttachmentImageToKitchens < ActiveRecord::Migration[5.1]
  def self.up
    change_table :kitchens do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :kitchens, :image
  end
end
