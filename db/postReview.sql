INSERT INTO reviews
    (review, user_id, image_one, comment_date)
VALUES($1, $2, $3, now());
SELECT r.review, u.first_name, u.last_name, r.comment_date, r.user_id, r.image_one, r.id as review_id
FROM reviews  r JOIN users u ON u.id = r.user_id
ORDER BY r.comment_date DESC