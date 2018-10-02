UPDATE users
SET is_admin = $1
WHERE first_name = $2 AND last_name = $3;