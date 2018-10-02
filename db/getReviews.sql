SELECT r.review, u.first_name, u.last_name, r.comment_date, r.user_id, r.image_one, r.id as review_id
FROM reviews  r JOIN users u ON u.id = r.user_id
ORDER BY r.comment_date DESC