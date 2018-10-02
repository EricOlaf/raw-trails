DELETE FROM gear
WHERE id = $1;
SELECT *
FROM gear
ORDER BY gear_type ASC;