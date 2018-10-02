INSERT INTO gear
    (gear_type, gear_condition, gear_description)
VALUES($1, $2, $3);
SELECT *
FROM gear;