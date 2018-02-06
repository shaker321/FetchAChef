json.array! @kitchens.each do |kitchen|
    json.partial! "kitchen", kitchen: kitchen
end
