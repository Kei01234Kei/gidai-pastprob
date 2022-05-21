USE gidai_pastprob;
SET NAMES utf8;
INSERT INTO `users` (`student_id`,
                     `name`,
                     `year`,
                     `faculty`,
                     `department`)
VALUES ('z3033012', '石上敬祐', 3, '工学部', '電気電子・情報工学科'),
       ('a8024012', '宮崎泰地', 2, '応用生物科学部', '応用生命化学科');
INSERT INTO `faculties` (`faculty_id`, `faculty`, `department`)
VALUES (3031, '工学部', '機械工学科'),
       (3032, '工学部', '化学生命工学科'),
       (3033, '工学部', '電気電子・情報工学科'),
       (8022, '応用生物科学部', '生産環境科学課程'),
       (8024, '応用生物科学部', '応用生命科学課程');