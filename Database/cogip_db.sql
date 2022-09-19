SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+01:00";

CREATE DATABASE IF NOT EXISTS cogip;
USE cogip;

create table if not exists `roles` (
    `id` int unsigned not null AUTO_INCREMENT,
    `name` varchar(50) character set utf8 not null,
    `created_at` datetime default CURRENT_TIMESTAMP,
    `updated_at` datetime not null,
    primary key (id)
) ENGINE=InnoDB default CHARSET=latin1 AUTO_INCREMENT=1;

create table if not exists `permissions` (
    `id` int unsigned not null AUTO_INCREMENT,
    `name` varchar(50) character set utf8 not null,
    `created_at` datetime default CURRENT_TIMESTAMP,
    `updated_at` datetime not null,
    primary key (id)
) ENGINE=InnoDB default CHARSET=latin1 AUTO_INCREMENT=1;


create table if not exists `roles_permission` (
    `id` int unsigned not null AUTO_INCREMENT,
    `permission_id` int unsigned not null,
    `role_id` int unsigned not null,
    primary key (id),
    foreign key (permission_id) references permissions(id),
    foreign key (role_id) references roles(id)
) ENGINE=InnoDB default CHARSET=latin1 AUTO_INCREMENT=1;

create table if not exists `users` (
    `id` int unsigned not null AUTO_INCREMENT,
    `first_name` varchar(50) character set utf8 not null,
    `last_name` varchar(50) character set utf8 not null,
    `email` varchar(50) character set utf8 not null,
    `password` varchar(50) character set utf8 not null,
    `role_id` int unsigned not null,
    `created_at` datetime default CURRENT_TIMESTAMP,
    `updated_at` datetime not null,
    primary key (id),
    foreign key (role_id) references roles(id)
) ENGINE=InnoDB default CHARSET=latin1 AUTO_INCREMENT=1;

create table if not exists `types` (
    `id` int unsigned not null AUTO_INCREMENT,
    `name` varchar(50) character set utf8 not null,
    `created_at` datetime default CURRENT_TIMESTAMP,
    `updated_at` datetime not null,
    primary key (id)
) ENGINE=InnoDB default CHARSET=latin1 AUTO_INCREMENT=1;

create table if not exists `companies` (
    `id` int unsigned not null AUTO_INCREMENT,
    `type_id` int unsigned not null,
    `name` varchar(50) character set utf8 not null,
    `country` varchar(50) character set utf8 not null,
    `tva` varchar(50) character set utf8 not null,
    `created_at` datetime default CURRENT_TIMESTAMP,
    `updated_at` datetime not null,
    primary key (id),
    foreign key (type_id) references types(id)
) ENGINE=InnoDB default CHARSET=latin1 AUTO_INCREMENT=1;

create table if not exists `contacts` (
    `id` int unsigned not null AUTO_INCREMENT,
    `company_id` int unsigned not null,
    `name` varchar(50) character set utf8 not null,
    `email` varchar(50) character set utf8 not null,
    `phone` varchar(50) character set utf8 not null,
    `created_at` datetime default CURRENT_TIMESTAMP,
    `updated_at` datetime not null,
    primary key (id),
    foreign key (company_id) references companies(id)
) ENGINE=InnoDB default CHARSET=latin1 AUTO_INCREMENT=1;
    

create table if not exists `invoices` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `ref` varchar(50) character set utf8 not null,
    `id_company` int unsigned not null,
    `created_at` datetime default CURRENT_TIMESTAMP,
    `updated_at` datetime not null,
    primary key (id),
    foreign key (id_company) references companies(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;