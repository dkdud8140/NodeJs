use kimbabheaven;
DESC tbl_products;
DESC tbl_orders;


SHOW VARIABLES LIKE 'c%';

select * from tbl_products;

insert into tbl_products (p_code, p_name, p_price, p_rem)
values('kim0000001','나들이김밥',2500,'밥, 김, 김치');

ALTER TABLE tbl_products 
alter createdAt set default (current_date())  ;

ALTER TABLE tbl_products 
alter updatedAt set default (current_date())  ;

DROP table tbl_nums;
DROP table tbl_orders;
DROP table tbl_products;

DESC tbl_nums;


select * from tbl_nums;
select * from tbl_orders;
select * from tbl_products;

alter table tbl_orders 
add FOREIGN KEY(tblProductPCode) 
REFERENCES tbl_tbl_products(p_code);

ALTER TABLE tbl_orders ADD tblProductPCode VARCHAR(10) ;

delete from tbl_orders
where 1=1;  