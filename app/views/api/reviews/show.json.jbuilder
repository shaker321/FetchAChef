json.extract! @review, :id, :rating, :body, :user_id, :kitchen_id
json.username @review.user.username
