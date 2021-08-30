
create database nodejs ;
create user node@localhost;
GRANt all privileges on *.* TO
node@localhost ;

ALTER USER 'node'@'localhost'
identified with mysql_native_password
BY '1234';