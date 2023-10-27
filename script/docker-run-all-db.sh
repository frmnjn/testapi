sudo docker run --name postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
sudo docker run --name mongo -p 27017:27017 -d mongo
sudo docker run --name mysql -e MYSQL_ROOT_PASSWORD=secr3t123 -e MYSQL_DATABASE=testdb -e MYSQL_USER=admin -e MYSQL_PASSWORD=admin -p 3306:3306 -d mysql --default-authentication-plugin=mysql_native_password
#butuh ram minimal 2GB buat jalanin sql server
sudo docker run --name mssql -e ACCEPT_EULA=Y -e SA_PASSWORD=Hesemeleh_123 -p 1433:1433 -d mcr.microsoft.com/mssql/server:2017-latest
#dafault -- database=xe, username=system, password=oracle
sudo docker run --name oracledb -p 1521:1521 -d oracleinanutshell/oracle-xe-11g

# Setup Oracle DB
#select * from dba_tables;
#SELECT table_name FROM all_tables WHERE owner ='FRMNJN';

#CREATE USER frmnjn IDENTIFIED BY password;
#GRANT CREATE TABLE TO frmnjn;
#grant sysdba to frmnjn;
#GRANT CONNECT TO frmnjn;
#GRANT CREATE SESSION TO frmnjn;
#GRANT UNLIMITED TABLESPACE TO frmnjn;

#GRANT create session TO frmnjn;
#GRANT create table TO frmnjn;
#GRANT create view TO frmnjn;
#GRANT create any trigger TO frmnjn;
#GRANT create any procedure TO frmnjn;
#GRANT create sequence TO frmnjn;
#GRANT create synonym TO frmnjn;
#GRANT CONNECT, RESOURCE, DBA TO frmnjn;

#SELECT * FROM dba_users
#WHERE username = 'FRMNJN';

#CREATE SCHEMA AUTHORIZATION FRMNJN;
#CREATE TABLE TEST_SCHEMA.TEST_TABLE (
#    ID VARCHAR2(40) NOT NULL
#    )
