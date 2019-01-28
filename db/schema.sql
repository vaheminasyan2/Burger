DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id int(11) auto_increment not null,
    burger_name varchar(100) not null,
    devoured boolean,
    primary key (id)
);

-- SELECT * FROM burgers_db.burgers;