SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+01:00";

CREATE DATABASE cogip;
USE cogip;

CREATE TABLE IF NOT EXISTS `users` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `name` varchar(255) CHARACTER SET utf8 NOT NULL,
    `email` varchar(255) CHARACTER SET utf8 NOT NULL,
    `phone` varchar(22) CHARACTER SET utf8 NOT NULL
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS `companies` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `owner` varchar(255) CHARACTER SET utf8 NOT NULL FOREIGN KEY (id) REFERENCES users(id),
    `name` varchar(255) CHARACTER SET utf8 NOT NULL,
    `tva` varchar(255) CHARACTER SET utf8 NOT NULL,
    `country` varchar(255) CHARACTER SET utf8 NOT NULL,
    `type` varchar(255) CHARACTER SET utf8 NOT NULL,
    `create_at` DATE DEFAULT GETDATE(),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

CREATE TABLE IF NOT EXISTS `invoices` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `client` varchar(255) CHARACTER SET utf8 NOT NULL FOREIGN KEY (id) REFERENCES companies(id),
    `number` varchar(15) CHARACTER SET utf8 NOT NULL,
    `price` int(11) unsigned NOT NULL,
    `due_date` DATE NOT NULL,
    `created_at` DATE DEFAULT GETDATE(),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;


CREATE TABLE IF NOT EXISTS `contacts` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `userA` varchar(255) CHARACTER SET utf8 NOT NULL,
    `userB` varchar(255) CHARACTER SET utf8 NOT NULL,
    `create_at` DATE DEFAULT GETDATE(),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;