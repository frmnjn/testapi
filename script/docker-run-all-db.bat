docker run --name postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
docker run --name mongo -p 27017:27017 -d mongo
docker run --name mysql -e MYSQL_ROOT_PASSWORD=secr3t123 -e MYSQL_DATABASE=testdb -e MYSQL_USER=admin -e MYSQL_PASSWORD=admin -p 3306:3306 -d mysql --default-authentication-plugin=mysql_native_password
REM butuh ram minimal 2GB buat jalanin sql server
docker run --name mssql -e ACCEPT_EULA=Y -e SA_PASSWORD=Hesemeleh_123 -p 1433:1433 -d mcr.microsoft.com/mssql/server:2017-latest
REM dafault -- database=xe, username=system, password=oracle
docker run --name oracledb -p 1521:1521 -d oracleinanutshell/oracle-xe-11g
