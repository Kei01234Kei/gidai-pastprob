DROP DATABASE IF EXISTS `gidai_pastprob`;
CREATE DATABASE `gidai_pastprob` DEFAULT CHARACTER SET utf8;
USE `gidai_pastprob`;
SET CHARSET utf8;
DROP TABLE IF EXISTS `gidai_pastprob`.`users`;
CREATE TABLE `gidai_pastprob`.`users`
(
    `id`         INT          NOT NULL AUTO_INCREMENT COMMENT 'id',
    `student_id` VARCHAR(128) NOT NULL COMMENT '学籍id',
    `name`       VARCHAR(128) NOT NULL COMMENT '名前',
    `year`       INT          NOT NULL COMMENT '学年',
    `faculty`    VARCHAR(128) NOT NULL COMMENT '学部',
    `department` VARCHAR(128) NOT NULL COMMENT '学科',
    `created_at` TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成時間',
    `updated_at` TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新時間',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
    COMMENT = 'ユーザー';
DROP TABLE IF EXISTS `gidai_pastprob`.`faculties`;
CREATE TABLE `gidai_pastprob`.`faculties`
(
    `id`         INT          NOT NULL AUTO_INCREMENT COMMENT 'id',
    `faculty_id` INT          NOT NULL COMMENT '学部識別子',
    `faculty`    VARCHAR(128) NOT NULL COMMENT '学部',
    `department` VARCHAR(128) NOT NULL COMMENT '学科',
    `created_at` TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '作成時間',
    `updated_at` TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新時間',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
    COMMENT = '学部';