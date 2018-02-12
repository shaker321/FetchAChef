json.array! @chefs.each do |chef|
  json.partial! "chef", chef: chef
end
