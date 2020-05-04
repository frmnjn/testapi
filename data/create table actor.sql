CREATE TABLE TESTDB.actor (
	actor_id int,
	first_name varchar(50),
	last_name varchar(50),
	last_update timestamp
);

--buat oracle
--ALTER USER TESTDB QUOTA 100M ON SYSTEM;
--GRANT UNLIMITED TABLESPACE TO TESTDB;