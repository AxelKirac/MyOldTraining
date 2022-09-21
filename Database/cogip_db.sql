set SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
set time_zone = "+01:00";

create database if not exists cogip;
use cogip;

create table if not exists `roles` (
    `id` int unsigned not null AUTO_INCREMENT,
    `name` varchar(50) character set utf8 not null,
    `created_at` datetime default CURRENT_TIMESTAMP,
    `updated_at` datetime default CURRENT_TIMESTAMP,
    primary key (id)
) ENGINE=InnoDB default CHARSET=latin1 AUTO_INCREMENT=1;

delimiter $$
create trigger roles_update before update on roles
for each row
begin
    if new.name != old.name then
        set new.updated_at = CURRENT_TIMESTAMP;
    end if;
end$$
delimiter ;

create table if not exists `permissions` (
    `id` int unsigned not null AUTO_INCREMENT,
    `name` varchar(50) character set utf8 not null,
    `created_at` datetime default CURRENT_TIMESTAMP,
    `updated_at` datetime not null,
    primary key (id)
) ENGINE=InnoDB default CHARSET=latin1 AUTO_INCREMENT=1;

delimiter $$
create trigger permissions_update before update on `permissions`
for each row
begin
    if new.name != old.name then
        set new.updated_at = CURRENT_TIMESTAMP;
    end if;
end$$
delimiter ;


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

delimiter $$
create trigger permissions_update before update on users
for each row
begin
    if      new.first_name != old.first_name
        or  new.last_name != old.last_name
        or  new.email != old.email
        or  new.password != old.password
        or  new.role_id != old.role_id then
            set new.updated_at = CURRENT_TIMESTAMP;
    end if;
end$$
delimiter ;

create table if not exists `types` (
    `id` int unsigned not null AUTO_INCREMENT,
    `name` varchar(50) character set utf8 not null,
    `created_at` datetime default CURRENT_TIMESTAMP,
    `updated_at` datetime not null,
    primary key (id)
) ENGINE=InnoDB default CHARSET=latin1 AUTO_INCREMENT=1;

delimiter $$
create trigger permissions_update before update on `types`
for each row
begin
    if new.name != old.name then
        set new.updated_at = CURRENT_TIMESTAMP;
    end if;
end$$
delimiter ;

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

delimiter $$
create trigger permissions_update before update on companies
for each row
begin
    if      new.type_id != old.type_id
        or  new.name != old.name
        or  new.country != old.country
        or  new.tva != old.tva then
            set new.updated_at = CURRENT_TIMESTAMP;
    end if;
end$$
delimiter ;

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

delimiter $$
create trigger permissions_update before update on contacts
for each row
begin
    if      new.company_id != old.company_id
        or  new.name != old.name
        or  new.email != old.email
        or  new.phone != old.phone then
            set new.updated_at = CURRENT_TIMESTAMP;
    end if;
end$$
delimiter ;
    

create table if not exists `invoices` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `ref` varchar(50) character set utf8 not null,
    `id_company` int unsigned not null,
    `due_date` datetime not null,
    `created_at` datetime default CURRENT_TIMESTAMP,
    `updated_at` datetime not null,
    primary key (id),
    foreign key (id_company) references companies(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

delimiter $$
create trigger permissions_update before update on invoices
for each row
begin
    if      new.ref != old.ref
        or  new.id_company != old.id_company
        or  new.due_date != old.due_date then
            set new.updated_at = CURRENT_TIMESTAMP;
    end if;
end$$
delimiter ;