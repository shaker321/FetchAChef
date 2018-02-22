class AddAttachmentImage1Image2ToKitchens < ActiveRecord::Migration[5.1]
  def self.up
    change_table :kitchens do |t|
      t.attachment :health_cert
      t.attachment :food_handler_cert
    end
  end

  def self.down
    remove_attachment :kitchens, :health_cert
    remove_attachment :kitchens, :food_handler_cert
  end
end
