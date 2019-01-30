use htly1ec3st75e99d;

CREATE TABLE burgers (
	id int(11) auto_increment not null,
    burger_name varchar(100) not null,
    devoured boolean,
    createdAt timestamp not NULL default current_timestamp,
    primary key (id)
);

SET SQL_SAFE_UPDATES = 0;

SELECT * FROM htly1ec3st75e99d.burgers;

-- delete from burgers;