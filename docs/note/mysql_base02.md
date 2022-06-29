## **11、union**

### 11.1、union可以合并集合（相加）

1、查询job包含MANAGER和包含SALESMAN的员工

```sql
select * from emp where job in('MANAGER', 'SALESMAN');
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps96.jpg)

2、采用union来合并

select  *from emp where job='MANAGER'unionselect*  from emp where job='SALESMAN'

![img](https://www.oss.tuwei.site/blogsImgs/images/wps97.jpg)

合并结果集的时候，需要查询字段对应个数相同。*在Oracle中更严格，不但要求个数相同，而且还要求类型对应相同*。

## **12、*limit*的使用**

mySql提供了limit ，主要用于提取前几条或者中间某几行数据

select *from table limit m,n
其中m是指记录开始的index，从0开始，表示第一条记录
n是指从第m+1条开始，取n条。
select* from tablename limit 2,4
即取出第3条至第6条，4条记录

### 12.1、取得前5条数据

```sql
select * from emp  limit 5;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps98.jpg)

![img](https://www.oss.tuwei.site/blogsImgs/images/wps99.jpg)

### 12.2、从第二条开始取两条数据

```sql
select * from emp  limit 1,2;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps100.jpg)

### 12.3、取得薪水最高的前5名

```sql
select * from emp e order by e.sal desc limit 5;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps101.jpg)

## **13、表**

### 13.1、创建表

语法格式
```sql
create table tableName(  columnName dataType(length),  ………………..  columnName dataType(length));set character_set_results='gbk'; show variables like '%char%'; 
```

创建表的时候，表中有字段，每一个字段有：   *字段名*   字段数据类型   *字段长度限制*   字段约束

MySql常用数据类型

| 类型                         | 描述                                             |
| ---------------------------- | ------------------------------------------------ |
| Char(长度)                   | 定长字符串，存储空间大小固定，适合作为主键或外键 |
| Varchar(长度)                | 变长字符串，存储空间等于实际数据空间             |
| double(有效数字位数，小数位) | 数值型                                           |
| Float(有效数字位数，小数位)  | 数值型                                           |
| Int( 长度)                   | 整型                                             |
| bigint(长度)                 | 长整型                                           |
| Date                         | 日期型 年月日                                    |
| DateTime                     | 日期型 年月日 时分秒 毫秒                        |
| time                         | 日期型 时分秒                                    |
| BLOB                         | Binary Large OBject（二进制大对象）              |
| CLOB                         | Character Large OBject（字符大对象）             |
| 其它…………………                  |                                                  |

建立学生信息表，字段包括：学号、姓名、性别、出生日期、email、班级标识

```sql
create table t_student( student_id  int(10), student_name  varchar(20), sex  char(2), birthday date, email  varchar(30), classes_id int(3) )
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps102.jpg)

向t_student表中加入数据,（必须使用客户端软件，我们的cmd默认是GBK编码,数据中设置的编码是UTF-8）

```sql
insert into t_student(student_id, student_name, sex, birthday, email, classes_id) values(1001, 'zhangsan', 'm', '1988-01-01', 'qqq@163.com', 10)
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps103.jpg)

向t_student表中加入数据（使用默认值）

```sql
drop table if exists t_student; create table t_student( student_id  int(10), student_name  varchar(20), sex  char(2)  default  'm', birthday date,  email  varchar(30), classes_id int(3) ) insert into t_student(student_id, student_name, birthday, email, classes_id) values(1002, 'zhangsan', '1988-01-01', 'qqq@163.com', 10) ![img](https://www.oss.tuwei.site/blogsImgs/images/wps104.jpg)
```

### 13.2、增加/删除/修改表结构

采用alter table来增加/删除/修改表结构，不影响表中的数据

#### 13.2.1、添加字段

如：需求发生改变，需要向t_student中加入联系电话字段，字段名称为：contatct_tel 类型为varchar(40)

```sql
alter table t_student add  contact_tel varchar(40);
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps105.jpg)

#### 13.2.2、修改字段

如：student_name无法满足需求，长度需要更改为100

```sql
alter table t_student modify student_name varchar(100) ;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps106.jpg)

如sex字段名称感觉不好，想用gender那么就需要更爱列的名称

![img](https://www.oss.tuwei.site/blogsImgs/images/wps107.jpg)

#### 13.2.3、删除字段

如：删除联系电话字段

```sql
alter table t_student drop contact_tel;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps108.jpg)

### 13.3、添加、修改和删除

#### 13.3.1、insert

添加、修改和删出都属于DML，主要包含的语句：insert、update、delete

Insert语法格式

Insert into 表名(字段，。。。。) values(值,………..)

省略字段的插入

```sql
insert into emp values(9999,'zhangsan','MANAGER', null, null,3000, 500, 10);
```
![img](https://www.oss.tuwei.site/blogsImgs/images/wps109.jpg)

![img](https://www.oss.tuwei.site/blogsImgs/images/wps110.jpg)

不建议使用此种方式，因为当数据库表中的字段位置发生改变的时候会影响到insert语句

指定字段的插入(建议使用此种方式)

```sql
insert into emp (empno,ename,job,mgr,hiredate,sal,comm,deptno) values(9999,'zhangsan','MANAGER', null, null,3000, 500, 10);
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps111.jpg)

出现了主键重复的错误，主键表示了记录的唯一性，不能重复

![img](https://www.oss.tuwei.site/blogsImgs/images/wps112.jpg)

如何插入日期：

第一种方法，插入的日期格式和显示的日期格式一致

```sql
insert into emp(empno, ename, job, mgr, hiredate, sal, comm, deptno) values(9997,'zhangsan','MANAGER', null, '1981-06-12',3000, 500, 10);
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps113.jpg)

第二种方法，采用str_to_date

```sql
insert into emp(empno, ename, job, mgr, hiredate, sal, comm, deptno) values(9996,'zhangsan','MANAGER',null,str_to_date('1981-06-12','%Y-%m-%d'),3000, 500, 10);
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps114.jpg)

第三种方法，添加系统日期（now()）

```sql
insert into emp(empno, ename, job, mgr, hiredate, sal, comm, deptno) values(9995,'zhangsan','MANAGER',null,now() ,3000, 500, 10);
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps115.jpg)

![img](https://www.oss.tuwei.site/blogsImgs/images/wps116.jpg)

表复制

```sql
create table emp_bak as select empno,ename,sal from emp;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps117.jpg)

![img](https://www.oss.tuwei.site/blogsImgs/images/wps118.jpg)

以上方式，会自动创建表，将符合查询条件的数据自动复制到创建的表中

如何将查询的数据直接放到已经存在的表中，可以使用条件

```sql
insert into emp_bak select * from emp where sal=3000;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps119.jpg)

#### 13.3.2、update

可以修改数据，可以根据条件修改数据

语法格式：

update 表名 set 字段名称1=需要修改的值1, 字段名称2=需要修改的值2 where …….

将job为manager的员工的工资上涨10%

```sql
update emp set sal=sal+sal*0.1 where job='MANAGER';
```

#### 13.3.3、delete

可以删除数据，可以根据条件删除数据

语法格式：

```sql
Delete from表名 where 。。。。。
```

删除津贴为500的员工

```sql
delete from emp where comm=500;
```

删除津贴为null的员工

```sql
delete from emp where comm is null;
```

### 13.4、创建表加入约束

常见的约束

a) 非空约束，not null

b) 唯一约束，unique

c) 主键约束，primary key

d) 外键约束，foreign key

e) 自定义检查约束，check（不建议使用）(在mysql中现在还不支持)

#### 13.4.1、非空约束，not null

非空约束，针对某个字段设置其值不为空，如：学生的姓名不能为空

```sql
drop table if exists t_student; create table t_student( student_id  int(10), student_name  varchar(20) not null, sex  char(2)  default  'm', birthday date,  email  varchar(30), classes_id int(3) ) insert into t_student(student_id, birthday, email, classes_id) values(1002, '1988-01-01', 'qqq@163.com', 10)
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps120.jpg)

以上错误为加入的学生姓名为空。

#### 13.4.2、唯一约束，unique

唯一性约束，它可以使某个字段的值不能重复，如：email不能重复：

```sql
drop table if exists t_student; create table t_student( student_id  int(10), student_name  varchar(20) not null, sex  char(2)  default  'm', birthday date,  email  varchar(30) unique, classes_id int(3) )insert into t_student(student_id, student_name , sex, birthday, email, classes_id) values(1001,'zhangsan','m', '1988-01-01', 'qqq@163.com', 10)
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps121.jpg)

以上插入了重复的email，所以出现了“违反唯一约束错误”，所以unique起作用了

同样可以为唯一约束起个约束名

我们可以查看一下约束


mysql> use information_schema;

```sql
select * from table_constraints where table_name = 't_student';
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps122.jpg)

关于约束名称可以到table_constraints中查询

以上约束的名称我们也可以自定义。

```sql
drop table if exists t_student; create table t_student( student_id  int(10), student_name  varchar(20) not null, sex  char(2)  default  'm', birthday date,  email  varchar(30)  , classes_id int(3) ,constraint email_unique unique(email)/*表级约束*/)
```

#### 13.4.3、主键约束，primary key

每个表应该具有主键，主键可以标识记录的唯一性，主键分为单一主键和复合（联合）主键，单一主键是由一个字段构成的，复合（联合）主键是由多个字段构成的

```sql
drop table if exists t_student; create table t_student() student_id  int(10)  primary key,/*列级约束*/ student_name  varchar(20) not null, sex  char(2)  default  'm', birthday date,  email  varchar(30)  , classes_id int(3) )insert into t_student(student_id, student_name , sex, birthday, email, classes_id) values(1001,'zhangsan','m', '1988-01-01', 'qqq@163.com', 10)
```

向以上表中加入学号为1001的两条记录，出现如下错误，因为加入了主键约束

![img](https://www.oss.tuwei.site/blogsImgs/images/wps123.jpg)

我们也可以通过表级约束为约束起个名称：

```sql
drop table if exists t_student; create table t_student( student_id  int(10), student_name  varchar(20) not null, sex  char(2)  default  'm', birthday date,  email  varchar(30)  , classes_id int(3),  CONSTRAINT p_id PRIMARY key (student_id))insert into t_student(student_id, student_name , sex, birthday, email, classes_id) values(1001,'zhangsan','m', '1988-01-01', 'qqq@163.com', 10)
```

#### 13.4.4、外键约束，foreign  key

外键主要是维护表之间的关系的，主要是为了保证参照完整性，如果表中的某个字段为外键字段，那么该字段的值必须来源于参照的表的主键，如：emp中的deptno值必须来源于dept表中的deptno字段值。

建立学生和班级表之间的连接

首先建立班级表t_classes

```sql
drop table if exists t_classes;create table t_classes( classes_id int(3), classes_name varchar(40), constraint pk_classes_id primary key(classes_id))
```

在t_student中加入外键约束

```sql
drop table if exists t_student;create table t_student( student_id  int(10), student_name  varchar(20), sex  char(2), birthday date, email  varchar(30), classes_id int(3), constraint   student_id_pk primary key(student_id),constraint fk_classes_id foreign key(classes_id) references t_classes(classes_id)   )
```

向t_student中加入数据

```sql
insert into t_student(student_id, student_name, sex, birthday, email, classes_id) values(1001, 'zhangsan', 'm', '1988-01-01', 'qqq@163.com', 10)
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps124.jpg)

出现错误，因为在班级表中不存在班级编号为10班级，外键约束起到了作用

存在外键的表就是子表，参照的表就是父表，所以存在一个父子关系，也就是主从关系，主表就是班级表，从表就是学生表

![img](https://www.oss.tuwei.site/blogsImgs/images/wps125.jpg)

以上成功的插入了学生信息，当时classes_id没有值，这样会影响参照完整性，所以我们建议将外键字段设置为非空

```sql
drop table if exists t_student;create table t_student( student_id  int(10), student_name  varchar(20), sex  char(2), birthday date, email  varchar(30), classes_id int (3) not null, constraint   student_id_pk primary key(student_id), constraint fk_classes_id foreign key(classes_id) references t_classes(classes_id)   )insert into t_student(student_id, student_name, sex, birthday, email, classes_id) values(1001, 'zhangsan', 'm', '1988-01-01', 'qqq@163.com', null);
```

再次插入班级编号为null的数据

![img](https://www.oss.tuwei.site/blogsImgs/images/wps126.jpg)

添加数据到班级表，添加数据到学生表，删除班级数据，将会出现如下错误：

```sql
insert into t_classes (classes_id,classes_name) values (10,'366'); insert into t_student(student_id, student_name, sex, birthday, email, classes_id) values(1001, 'zhangsan', 'm', '1988-01-01', 'qqq@163.com', 10) mysql> update t_classes set  classes_id = 20 where classes_name = '366';
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps127.jpg) 因为子表（t_student）存在一个外键classes_id，它参照了父表（t_classes）中的主键，所以先删除子表中的引用记录，再修改父表中的数据。我们也可以采取以下措施 级联更新。mysql> delete from t_classes where classes_id = 10;![img](https://www.oss.tuwei.site/blogsImgs/images/wps128.jpg) 因为子表（t_student）存在一个外键classes_id，它参照了父表（t_classes）中的主键，所以先删除父表，那么将会影响子表的参照完整性，所以正确的做法是，先删除子表中的数据，再删除父表中的数据，采用drop table也不行，必须先drop子表，再drop父表我们也可以采取以下措施 级联删除。

#### 13.4.5、级联更新与级联删除

##### 13.4.5.1、on update cascade;

mysql对有些约束的修改比较麻烦，所以我们可以先删除，再添加 

```sql
alter table t_student drop foreign key fk_classes_id; alter table t_student add constraint fk_classes_id_1 foreign key(classes_id) references t_classes(classes_id) on update cascade; 
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps129.jpg)
我们只修改了父表中的数据，但是子表中的数据也会跟着变动。

##### 13.4.5.2、on delete cascade*

mysql对有些约束的修改时不支持的，所以我们可以先删除，再添加 
```sql
alter table t_student drop foreign key fk_classes_id; alter table t_student add constraint fk_classes_id_1 foreign key(classes_id) references t_classes(classes_id) on delete cascade;delete from t_classes where classes_id = 20;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps130.jpg) 我们只删除了父表中的数据，但是子表也会中的数据也会删除。

### 13.5、t_student和t_classes完整示例

```sql
drop table if exists t_classes;create table t_classes( classes_id int (3), classes_name varchar(30) not null, constraint pk_classes_id primary key(classes_id) ) drop table if exists t_student;create table t_student( student_id int(10), student_name  varchar(50) not null, sex  char(2) not null, birthday date not null, email  varchar(30) unique, classes_id int (3) not null, constraint pk_student_id primary key(student_id), constraint fk_classes_id foreign key(classes_id) references t_classes(classes_id) )
```

## **14、存储引擎（了解）**

### 14.1、存储引擎的使用

• 数据库中的各表均被（在创建表时）指定的存储引擎来处理。

• 服务器可用的引擎依赖于以下因素：

• MySQL的版本

• 服务器在开发时如何被配置

• 启动选项

• 为了解当前服务器中有哪些存储引擎可用，可使用SHOW ENGINES语句：

​ mysql> SHOW ENGINES\G

![img](https://www.oss.tuwei.site/blogsImgs/images/wps131.jpg)

• 在创建表时，可使用ENGINE选项为CREATE TABLE语句显式指定存储引擎。

CREATE TABLE TABLENAME (NO INT) ENGINE = MyISAM;

• 如果在创建表时没有显式指定存储引擎，则该表使用当前默认的存储引擎

• 默认的存储引擎可在my.ini配置文件中使用default-storage-engine选项指定。

• 现有表的存储引擎可使用ALTER TABLE语句来改变：ALTER TABLE TABLENAME ENGINE = INNODB;

• 为确定某表所使用的存储引擎，可以使用SHOW CREATE TABLE或SHOW TABLE STATUS语句：

mysql> SHOW CREATE TABLE emp\G

mysql> SHOW TABLE STATUS LIKE 'emp' \G

### 14.2、常用的存储引擎

#### 14.2.1、MyISAM*存储引擎**

• MyISAM存储引擎是MySQL最常用的引擎。

• 它管理的表具有以下特征：

– 使用三个文件表示每个表：

• 格式文件 — 存储表结构的定义（mytable.frm）

• 数据文件 — 存储表行的内容（mytable.MYD）

• 索引文件 — 存储表上索引（mytable.MYI）

– 灵活的AUTO_INCREMENT字段处理

– 可被转换为压缩、只读表来节省空间

#### 14.2.2、InnoDB*存储引擎**

• InnoDB存储引擎是MySQL的缺省引擎。

• 它管理的表具有下列主要特征：

– 每个InnoDB表在数据库目录中以.frm格式文件表示

– InnoDB表空间tablespace被用于存储表的内容

– 提供一组用来记录事务性活动的日志文件

– 用COMMIT(提交)、SAVEPOINT及ROLLBACK(回滚)支持事务处理

– 提供全ACID兼容

– 在MySQL服务器崩溃后提供自动恢复

– 多版本（MVCC）和行级锁定

– 支持外键及引用的完整性，包括级联删除和更新

#### 14.2.3、MEMORY存储引擎

• 使用MEMORY存储引擎的表，其数据存储在内存中，且行的长度固定，这两个特点使得MEMORY存储引擎非常快。

• MEMORY存储引擎管理的表具有下列特征：

– 在数据库目录内，每个表均以.frm格式的文件表示。

– 表数据及索引被存储在内存中。

– 表级锁机制。

– 不能包含TEXT或BLOB字段。

• MEMORY存储引擎以前被称为HEAP引擎。

### 14.3、选择合适的存储引擎

• MyISAM表最适合于大量的数据读而少量数据更新的混合操作。MyISAM表的另一种适用情形是使用压缩的只读表。

• 如果查询中包含较多的数据更新操作，应使用InnoDB。其行级锁机制和多版本的支持为数据读取和更新的混合操作提供了良好的并发机制。

• 可使用MEMORY存储引擎来存储非永久需要的数据，或者是能够从基于磁盘的表中重新生成的数据。

## **15、事务**

### ![img](https://www.oss.tuwei.site/blogsImgs/images/wps132.png)15.1、概述

事务可以保证多个操作原子性，要么全成功，要么全失败。对于数据库来说事务保证批量的DML要么全成功，要么全失败。事务具有四个特征ACID

f) 原子性（Atomicity）

整个事务中的所有操作，必须作为一个单元全部完成（或全部取消）。

g) 一致性（Consistency）

在事务开始之前与结束之后，数据库都保持一致状态。

h) 隔离性(Isolation)

一个事务不会影响其他事务的运行。

i) 持久性(Durability)

在事务完成以后，该事务对数据库所作的更改将持久地保存在数据库之中，并不会被回滚。

事务中存在一些概念：

a) 事务（Transaction）：一批操作（一组DML）

b) 开启事务（Start Transaction）

c) 回滚事务（rollback）

d) 提交事务（commit）

e) SET AUTOCOMMIT：禁用或启用事务的自动提交模式

当执行DML语句是其实就是开启一个事务

关于事务的回滚需要注意：只能回滚insert、delete和update语句，不能回滚select（回滚select没有任何意义），对于create、drop、alter这些无法回滚.

事务只对DML有效果。

注意：rollback，或者commit后事务就结束了。

### 15.2、事务的提交与回滚演示

(1) 创建表

```
| create table user(id int (11) primary key not null auto_increment ,   username varchar(30),password varchar(30))  ENGINE=InnoDB DEFAULT CHARSET=utf8 |
| ------------------------------------------------------------ |
|                                                              |
```

(2) 查询表中数据

![img](https://www.oss.tuwei.site/blogsImgs/images/wps133.jpg)

(3) 开启事务START TRANSACTION;

(4) 插入数据

```sql
insert into user (username,password) values ('zhangsan','123');
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps134.jpg)

(5) 查看数据

![img](https://www.oss.tuwei.site/blogsImgs/images/wps135.jpg)

(6) 修改数据

![img](https://www.oss.tuwei.site/blogsImgs/images/wps136.jpg)

(7) 查看数据

![img](https://www.oss.tuwei.site/blogsImgs/images/wps137.jpg)

(8) 回滚事务

![img](https://www.oss.tuwei.site/blogsImgs/images/wps138.jpg)

(9) 查看数据

![img](https://www.oss.tuwei.site/blogsImgs/images/wps139.jpg)

### 15.3、自动提交模式

• 自动提交模式用于决定新事务如何及何时启动。

• 启用自动提交模式：

– 如果自动提交模式被启用，则单条DML语句将缺省地开始一个新的事务。

– 如果该语句执行成功，事务将自动提交，并永久地保存该语句的执行结果。

– 如果语句执行失败，事务将自动回滚，并取消该语句的结果。

– 在自动提交模式下，仍可使用START TRANSACTION语句来显式地启动事务。这时，一个事务仍可包含多条语句，直到这些语句被统一提交或回滚。

• 禁用自动提交模式：

– 如果禁用自动提交，事务可以跨越多条语句。

– 在这种情况下，事务可以用COMMIT和ROLLBACK语句来显式地提交或回滚。

• 自动提交模式可以通过服务器变量AUTOCOMMIT来控制。

• 例如：

mysql> SET AUTOCOMMIT = OFF；

mysql> SET AUTOCOMMIT = ON；

或

mysql> SET SESSION AUTOCOMMIT = OFF；

mysql> SET SESSION AUTOCOMMIT = ON；

show variables like '%auto%'; -- 查看变量状态

### **15.4、事务的隔离级别**

#### 15.4.1、隔离级别

• 事务的隔离级别决定了事务之间可见的级别。

• 当多个客户端并发地访问同一个表时，可能出现下面的一致性问题：

– 脏读取（Dirty Read）

​ 一个事务开始读取了某行数据，但是另外一个事务已经更新了此数据但没有能够及时提交，这就出现了脏读取。

– 不可重复读（Non-repeatable Read）

​ 在同一个事务中，同一个读操作对同一个数据的前后两次读取产生了不同的结果，这就是不可重复读。

– 幻像读（Phantom Read）

​ 幻像读是指在同一个事务中以前没有的行，由于其他事务的提交而出现的新行。

#### 15.4.2、四个隔离级别

• InnoDB 实现了四个隔离级别，用以控制事务所做的修改，并将修改通告至其它并发的事务：

– 读未提交（READ UMCOMMITTED）

​ 允许一个事务可以看到其他事务未提交的修改。

– 读已提交（READ COMMITTED）

​ 允许一个事务只能看到其他事务已经提交的修改，未提交的修改是不可见的。

– 可重复读（REPEATABLE READ）

​ 确保如果在一个事务中执行两次相同的SELECT语句，都能得到相同的结果，不管其他事务是否提交这些修改。 （银行总账）

​ 该隔离级别为InnoDB的缺省设置。

– 串行化（SERIALIZABLE） 【序列化】

​ 将一个事务与其他事务完全地隔离。

例:A可以开启事物,B也可以开启事物

A在事物中执行DML语句时,未提交

B不以执行DML,DQL语句

#### 15.4.3、隔离级别与一致性问题的关系

![img](https://www.oss.tuwei.site/blogsImgs/images/wps140.jpg)

#### 15.4.4、设置服务器缺省隔离级别

##### 通过修改配置文件设置

• 可以在my.ini文件中使用transaction-isolation选项来设置服务器的缺省事务隔离级别。

• 该选项值可以是：

– READ-UNCOMMITTED

– READ-COMMITTED

– REPEATABLE-READ

– SERIALIZABLE

• 例如：

[mysqld]

transaction-isolation = READ-COMMITTED

##### 通过命令动态设置隔离级别

• 隔离级别也可以在运行的服务器中动态设置，应使用SET TRANSACTION ISOLATION LEVEL语句。

• 其语法模式为：

​ SET [GLOBAL | SESSION] TRANSACTION ISOLATION LEVEL

​ 其中的可以是：

– READ UNCOMMITTED

– READ COMMITTED

– REPEATABLE READ

– SERIALIZABLE

• 例如： SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;

#### 15.4.5、隔离级别的作用范围

• 事务隔离级别的作用范围分为两种：

– 全局级：对所有的会话有效

– 会话级：只对当前的会话有效

• 例如，设置会话级隔离级别为READ COMMITTED ：

mysql> SET TRANSACTION ISOLATION LEVEL READ COMMITTED；

或：

mysql> SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED；

• 设置全局级隔离级别为READ COMMITTED ：

mysql> SET GLOBAL TRANSACTION ISOLATION LEVEL READ COMMITTED；

#### 15.4.6、查看隔离级别

• 服务器变量tx_isolation（包括会话级和全局级两个变量）中保存着当前的会话隔离级别。

• 为了查看当前隔离级别，可访问tx_isolation变量：

– 查看会话级的当前隔离级别：

​ mysql> SELECT @@tx_isolation;

​ 或：

​ mysql> SELECT @@session.tx_isolation;

– 查看全局级的当前隔离级别：

​ mysql> SELECT @@global.tx_isolation;

#### 15.4.7、并发事务与隔离级别示例

##### read uncommitted(未提交读) --脏读(Drity Read)：

| 会话一                                                       | 会话二                 |
| ----------------------------------------------------------- | ---------------------- |
| mysql> prompt s1>                                           | mysql> use bjpowernode |
| s1>use bjpowernode                                          | mysql> prompt s2>      |
| s1>create table tx (id int(11),num int (10));               |                        |
| s1>set global transaction isolation level read uncommitted; |                        |
| s1>start transaction;                                       |                        |
|                                                             | s2>start transaction;  |
| s1>insert into tx values (1,10);                            |                        |
|                                                             | s2>select * from tx;   |
| s1>rollback;                                                |                        |
|                                                             | s2>select * from tx;   |

##### read committed(已提交读)

| 会话一                                                     | 会话二                |
| ---------------------------------------------------------- | --------------------- |
| s1> set global transaction isolation level read committed; |                       |
| s1>start transaction;                                      |                       |
|                                                            | s2>start transaction; |
| s1>insert into tx values (1,10);                           |                       |
| s1>select * from tx;                                       |                       |
|                                                            | s2>select * from tx;  |
| s1>commit;                                                 |                       |
|                                                            | s2>select * from tx;  |

##### repeatable read(可重复读)

| 会话一                                                      | 会话二                |
| ----------------------------------------------------------- | --------------------- |
| s1> set global transaction isolation level repeatable read; |                       |
| s1>start transaction;                                       | s2>start transaction; |
| s1>select * from tx;                                        |                       |
| s1>insert into tx values (1,10);                            |                       |
|                                                             | s2>select * from tx;  |
| s1>commit;                                                  |                       |
|                                                             | s2>select * from tx;  |

## **16、索引**

#### 16.1、索引原理

索引被用来快速找出在一个列上用一特定值的行。没有索引，MySQL不得不首先以第一条记录开始，然后读完整个表直到它找出相关的行。表越大，花费时间越多。对于一个有序字段，可以运用二分查找（Binary Search），这就是为什么性能能得到本质上的提高。MYISAM和INNODB都是用B+Tree作为索引结构

（主键，unique 都会默认的添加索引）

#### 16.2、索引的应用

##### 16.2.1、创建索引

如果未使用索引，我们查询 工资大于 1500的会执行全表扫描

![img](https://www.oss.tuwei.site/blogsImgs/images/wps141.jpg)

**什么时候需要给字段添加索引：**

**-表中该字段中的数据量庞大**

**-经常被检索，经常出现在where子句中的字段**

**-经常被DML操作的字段不建议添加索引**

**索引等同于一本书的目录**

**主键会自动添加索引，所以尽量根据主键查询效率较高。**

如经常根据sal进行查询，并且遇到了性能瓶颈，首先查看程序是否存算法问题，再考虑对sal建立索引，建立索引如下：

1、create unique index 索引名 on 表名(列名);

```sql
create unique index u_ename on emp(ename);
```

2、alter table 表名 add unique index 索引名 (列名);

```sql
create index test_index on emp (sal);
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps142.jpg)

##### 16.2.2、查看索引

```sql
show index from emp;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps143.jpg)

##### 16.2.3、使用索引

注意一定不可以用select * … 可以看到type!=all了，说明使用了索引

```sql
explain select sal from emp where sal > 1500;
```

条件中的sal使用了索引

![img](https://www.oss.tuwei.site/blogsImgs/images/wps144.jpg)

如下图：假如我们要查找sal大于1500的所有行，那么可以扫描索引，索引时排序的，结果得出7行，我们知道不会再有匹配的记录，可以退出了。
如果查找一个值，它在索引表中某个中间点以前不会出现，那么也有找到其第一个匹配索引项的定位算法，而不用进行表的顺序扫描（如二分查找法）。
这样，可以快速定位到第一个匹配的值，以节省大量搜索时间。数据库利用了各种各样的快速定位索引值的技术，通常这些技术都属于DBA的工作。

##### 16.2.4、删除索引

```sql
DROP INDEX index_name ON talbe_name ALTER TABLE table_name 

DROP INDEX index_name ALTER TABLE table_name 

DROP PRIMARY KEY
```

其中，前两条语句是等价的，删除掉table_name中的索引index_name。

第3条语句只在删除PRIMARY KEY索引时使用，因为一个表只可能有一个PRIMARY KEY索引， mysql> ALTER TABLE EMP DROP INDEX test_index; 删除后就不再使用索引了，查询会执行全表扫描。![img](https://www.oss.tuwei.site/blogsImgs/images/wps145.jpg)

## **17、视图**

### 17.1、什么是视图

• 视图是一种根据查询（也就是SELECT表达式）定义的数据库对象，用于获取想要看到和使用的局部数据。

• 视图有时也被成为“虚拟表”。

• 视图可以被用来从常规表（称为“基表”）或其他视图中查询数据。

• 相对于从基表中直接获取数据，视图有以下好处：

– 访问数据变得简单

– 可被用来对不同用户显示不同的表的内容

用来协助适配表的结构以适应前端现有的应用程序

视图作用：

- 提高检索效率

- 隐藏表的实现细节【面向视图检索】

![img](https://www.oss.tuwei.site/blogsImgs/images/wps146.jpg)

### 17.2、创建视图

如下示例：查询员工的姓名，部门，工资入职信息等信息。

```sql
select ename,dname,sal,hiredate,e.deptno from emp e,dept d where e.deptno = e.deptno and e.deptno = 10;
```

为什么使用视图？因为需求决定以上语句需要在多个地方使用，如果频繁的拷贝以上代码，会给维护带来成本，视图可以解决这个问题

```sql
create view v_dept_emp as select ename,dname,sal,hiredate,e.deptno from emp e,dept d where e.deptno = e.deptno and e.deptno = 10;

create view v_dept_avg_sal_grade as select a.deptno, a.avg_sal, b.grade from (select deptno, avg(sal) avg_sal from emp group by deptno) a, salgrade b where a.avg_sal between b.losal and b.hisal; 
```

*注意mysql不支持子查询创建视图*

### 17.3、修改视图

```sql
alter view  v_dept_emp as select ename,dname,sal,hiredate,e.deptno from emp e,dept d where e.deptno = 20;
```

### 17.4、删除视图

```sql
drop view if exists v_dept_emp;
```

## **18、DBA命令（了解）**

### 18.1、新建用户

```sql
CREATE USER username IDENTIFIED BY 'password';
```

>说明:username——你将创建的用户名, password——该用户的登陆密码,密码可以为空,如果为空则该用户可以不需要密码登陆服务器.例如：create user p361 identified by '123'; 可以登录但是只可以看见一个库  information_schema
### 18.2、授权

```
命令详解mysql> grant all privileges on dbname.tbname to 'username'@'login ip' identified by 'password' with grant option;1) dbname=*表示所有*[*数据库*](http://www.2cto.com/database/)*2) tbname=*表示所有表3) login ip=%表示任何ip4) password为空，表示不需要密码即可登录5) with grant option;  表示该用户还可以授权给其他用户l 细粒度授权首先以root用户进入mysql，然后键入命令：grant select,insert,update,delete on*.* to p361 [@localhost]() Identified by "123"; 如果希望该用户能够在任何机器上登陆mysql，则将localhost改为 "%" 。l 粗粒度授权我们测试用户一般使用该命令授权，GRANT ALL PRIVILEGES ON *.*TO 'p361'@'%' Identified by "123"; 注意:用以上命令授权的用户不能给其它用户授权,如果想让该用户可以授权,用以下命令: GRANT ALL PRIVILEGES ON*.* TO 'p361'@'%' Identified by "123"  WITH GRANT OPTION; privileges包括：1)  alter：修改数据库的表2)  create：创建新的数据库或表3)  delete：删除表数据4)  drop：删除数据库/表5)  index：创建/删除索引6)  insert：添加表数据7)  select：查询表数据8)  update：更新表数据9)  all：允许任何操作10)  usage：只允许登录
```

### 18.3、回收权限

命令详解revoke privileges on dbname[.tbname] from username;revoke all privileges on *.* from p361; use mysqlselect * from user进入 mysql库中修改密码;update user set password =  password('qwe') where user = 'p646';刷新权限;flush privileges

### 18.4、导出导入

#### 18.4.1、导出

##### 18.4.1.1、*导出整个数据库

在windows的dos命令窗口中执行：mysqldump bjpowernode>D:\bjpowernode.sql -uroot -p123

##### 18.4.1.2、导出*指定库下的指定表**

在windows的dos命令窗口中执行：mysqldump bjpowernode emp> D:\ bjpowernode.sql -uroot –p123

#### 18.4.2、导入

登录MYSQL数据库管理系统之后执行：source D:\ bjpowernode.sql

## **19、数据库设计的三范式**

### 19.1、第一范式

数据库表中不能出现重复记录，每个字段是原子性的不能再分

不符合第一范式的示例

| 学生编号 | 学生姓名 | 联系方式                                            |
| -------- | ---------| ----------------------------------------------- |
| 1001     | 张三      | [zs@gmail.com](mailto:zs@gmail.com),1359999999  |
| 1002     | 李四      | [ls@gmail.com](mailto:ls@gmail.com),13699999999 |
| 1001     | 王五      | [ww@163.net](mailto:ww@163.net),13488888888     |

存在问题：

n 最后一条记录和第一条重复（不唯一，没有主键）

n 联系方式字段可以再分，不是原子性的

| 学生编号(pk) | 学生姓名 | email                               | 联系电话    |
| ------------ | -------- | ----------------------------------- | ----------- |
| 1001         | 张三      | [zs@gmail.com](mailto:zs@gmail.com) | 1359999999  |
| 1002         | 李四      | [ls@gmail.com](mailto:ls@gmail.com) | 13699999999 |
| 1003         | 王五      | [ww@163.net](mailto:ww@163.net)     | 13488888888 |

关于第一范式，每一行必须唯一，也就是每个表必须有主键，这是我们数据库设计的最基本要求，主要通常采用数值型或定长字符串表示，关于列不可再分，应该根据具体的情况来决定。如联系方式，为了开发上的便利行可能就采用一个字段了。

### 19.2、第二范式

第二范式是建立在第一范式基础上的，另外要求所有非主键字段完全依赖主键，不能产生部分依赖

示例：

| 学生编号   | 学生姓名 | 教师编号   |  教师姓名 |
| -------- | -------- | -------- | --------|
| 1001     | 张三     | 001       | 王老师   |
| 1002     | 李四     | 002       | 赵老师   |
| 1003     | 王五     | 001       | 王老师   |
| 1001     | 张三     | 002       | 赵老师   |

确定主键：

| 学生编号(PK) | 教师编号(PK) | 学生姓名 | 教师姓名 |
| ------------ | ------------ | -------- | -------- |
| 1001         | 001          | 张三     | 王老师   |
| 1002         | 002          | 李四     | 赵老师   |
| 1003         | 001          | 王五     | 王老师   |
| 1001         | 002          | 张三     | 赵老师   |

以上虽然确定了主键，但此表会出现大量的冗余，主要涉及到的冗余字段为“学生姓名”和“教师姓名”，出现冗余的原因在于，学生姓名部分依赖了主键的一个字段学生编号，而没有依赖教师编号，而教师姓名部门依赖了主键的一个字段教师编号，这就是第二范式部分依赖。

解决方案如下：

学生信息表

| 学生编号（PK） | 学生姓名 |
| -------------- | -------- |
| 1001           | 张三     |
| 1002           | 李四     |
| 1003           | 王五     |

教师信息表

| 教师编号（PK） | 教师姓名 |
| -------------- | -------- |
| 001            | 王老师   |
| 002            | 赵老师   |

教师和学生的关系表

| 学生编号(PK)  fkà学生表的学生编号 | 教师编号(PK) fkà教师表的教师编号 |
| --------------------------------- | -------------------------------- |
| 1001                              | 001                              |
| 1002                              | 002                              |
| 1003                              | 001                              |
| 1001                              | 002                              |

如果一个表是单一主键，那么它就复合第二范式，部分依赖和主键有关系

**以上是一种典型的“多对多”的设计**

### 19.3、第三范式

建立在第二范式基础上的，非主键字段不能传递依赖于主键字段。（**不要产生传递依赖**）

| 学生编号（PK） | 学生姓名 | 班级编号 | 班级名称 |
| -------------- | ------- | -------- | -------- |
| 1001           | 张三     | 01       | 一年一班 |
| 1002           | 李四     | 02       | 一年二班 |
| 1003           | 王五     | 03       | 一年三班 |
| 1004           | 六       | 03       | 一年三班 |

从上表可以看出，班级名称字段存在冗余，因为班级名称字段没有直接依赖于主键，班级名称字段依赖于班级编号，班级编号依赖于学生编号，那么这就是传递依赖，解决的办法是将冗余字段单独拿出来建立表，如：

学生信息表

| 学生编号（PK） | 学生姓名 | 班级编号（FK） |
| -------------- | -------- | -------------- |
| 1001           | 张三     | 01             |
| 1002           | 李四     | 02             |
| 1003           | 王五     | 03             |
| 1004           | 六       | 03             |


班级信息表

| 班级编号（PK）   | 班级名称 |
| -------------- | -------- |
| 01             | 一年一班 |
| 02             | 一年二班 |
| 03             | 一年三班 |

**以上设计是一种典型的一对多的设计，一存储在一张表中，多存储在一张表中，在多的那张表中添加外键指向一的一方的主键**

### 19.4、三范式总结

第一范式：有主键，具有原子性，字段不可分割

第二范式：完全依赖，没有部分依赖

第三范式：没有传递依赖

数据库设计尽量遵循三范式，但是还是根据实际情况进行取舍，有时可能会拿冗余换速度，最终用目的要满足客户需求。

**一对一设计，有两种设计方案：**

​**第一种设计方案：主键共享**

**第二种设计方案：外键唯一**

## 、作业

## **1、取得每个部门最高薪水的人员名称**

 <!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps147.jpg) -->

## **2、哪些人的薪水在部门的平均薪水之上**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps148.jpg) -->

## **3、取得部门中（所有人的）平均的薪水等级，如下：**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps149.jpg) -->

## **4、不准用组函数（Max），取得最高薪水**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps150.jpg) -->

## **5、取得平均薪水最高的部门的部门编号**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps151.jpg) -->

## **6、取得平均薪水最高的部门的部门名称**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps152.jpg) -->

## **7、求平均薪水的等级最低的部门的部门名称**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps153.jpg) -->

## **8、取得比普通员工(员工代码没有在mgr字段上出现的)的最高薪水还要高的领导人姓名**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps154.jpg) -->

## **9、取得薪水最高的前五名员工**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps155.jpg) -->

## **10、取得薪水最高的第六到第十名员工**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps156.jpg) -->

## **11、取得最后入职的5名员工**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps157.jpg) -->

## **12、取得每个薪水等级有多少员工**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps158.jpg) -->

## **13、面试题**

有3个表S(学生表)，C（课程表），SC（学生选课表）

S（SNO，SNAME）代表（学号，姓名）

C（CNO，CNAME，CTEACHER）代表（课号，课名，教师）

SC（SNO，CNO，SCGRADE）代表（学号，课号，成绩）

问题：

  1，找出没选过“黎明”老师的所有学生姓名。

  2，列出2门以上（含2门）不及格学生姓名及平均成绩。

  3，即学过1号课程又学过2号课所有学生的姓名。

  请用标准SQL语言写出答案，方言也行（请说明是使用什么方言）。


```sql
CREATE TABLE SC( 
  SNO   VARCHAR(200), 
  CNO   VARCHAR(200), 
  SCGRADE  VARCHAR(200)
); 
CREATE TABLE S( 
  SNO  VARCHAR(200 ), 
  SNAME  VARCHAR(200)
); 
CREATE TABLE C( 
  CNO   VARCHAR(200), 
  CNAME  VARCHAR(200), 
  CTEACHER  VARCHAR(200)
); 
INSERT INTO C ( CNO, CNAME, CTEACHER ) VALUES ( '1', '语文', '张'); 
INSERT INTO C ( CNO, CNAME, CTEACHER ) VALUES ( '2', '政治', '王'); 
INSERT INTO C ( CNO, CNAME, CTEACHER ) VALUES ( '3', '英语', '李'); 
INSERT INTO C ( CNO, CNAME, CTEACHER ) VALUES ( '4', '数学', '赵'); 
INSERT INTO C ( CNO, CNAME, CTEACHER ) VALUES ( '5', '物理', '黎明'); 
commit; 
INSERT INTO S ( SNO, SNAME ) VALUES ( '1', '学生1'); 
INSERT INTO S ( SNO, SNAME ) VALUES ( '2', '学生2'); 
INSERT INTO S ( SNO, SNAME ) VALUES ( '3', '学生3'); 
INSERT INTO S ( SNO, SNAME ) VALUES ( '4', '学生4'); 
commit; 
INSERT INTO SC ( SNO, CNO, SCGRADE ) VALUES ( '1', '1', '40'); 
INSERT INTO SC ( SNO, CNO, SCGRADE ) VALUES ( '1', '2', '30'); 
INSERT INTO SC ( SNO, CNO, SCGRADE ) VALUES ( '1', '3', '20'); 
INSERT INTO SC ( SNO, CNO, SCGRADE ) VALUES ( '1', '4', '80'); 
INSERT INTO SC ( SNO, CNO, SCGRADE ) VALUES ( '1', '5', '60'); 
INSERT INTO SC ( SNO, CNO, SCGRADE ) VALUES ( '2', '1', '60'); 
INSERT INTO SC ( SNO, CNO, SCGRADE ) VALUES ( '2', '2', '60'); 
INSERT INTO SC ( SNO, CNO, SCGRADE ) VALUES ( '2', '3', '60'); 
INSERT INTO SC ( SNO, CNO, SCGRADE ) VALUES ( '2', '4', '60'); 
INSERT INTO SC ( SNO, CNO, SCGRADE ) VALUES ( '2', '5', '40'); 
INSERT INTO SC ( SNO, CNO, SCGRADE ) VALUES ( '3', '1', '60'); 
INSERT INTO SC ( SNO, CNO, SCGRADE ) VALUES ( '3', '3', '80'); 
commit;
```

问题1.找出没选过“黎明”老师的所有学生姓名。

即:

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps159.jpg) -->

问题2:列出2门以上（含2门）不及格学生姓名及平均成绩。

问题3:即学过1号课程又学过2号课所有学生的姓名。

## **14、列出所有员工及领导的姓名**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps160.jpg)  -->

## **15、列出受雇日期早于其直接上级的所有员工的编号,姓名,部门名称**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps161.jpg) -->

## **16、列出部门名称和这些部门的员工信息,同时列出那些没有员工的部门.**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps162.jpg) -->

## **17、列出至少有5个员工的所有部门**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps163.jpg) -->

## **18、列出薪金比"SMITH"多的所有员工信息.**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps164.jpg) -->

## **19、列出所有"CLERK"(办事员)的姓名及其部门名称,部门的人数.**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps165.jpg) -->

## **20、列出最低薪金大于1500的各种工作及从事此工作的全部雇员人数.**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps166.jpg) -->

## **21、列出在部门"SALES"<销售部>工作的员工的姓名,假定不知道销售部的部门编号.**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps167.jpg) -->

## **22、列出薪金高于公司平均薪金的所有员工,所在部门,上级领导,雇员的工资等级.**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps168.jpg) -->

## **23、列出与"SCOTT"从事相同工作的所有员工及部门名称.**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps169.jpg) -->

## **24、列出薪金等于部门30中员工的薪金的其他员工的姓名和薪金.**

## **25、列出薪金高于在部门30工作的所有员工的薪金的员工姓名和薪金.部门名称.**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps170.jpg) -->

## **26、列出在每个部门工作的员工数量,平均工资和平均服务期限.**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps171.jpg) -->

## **27、列出所有员工的姓名、部门名称和工资。**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps172.jpg) -->

## **28、列出所有部门的详细信息和人数**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps173.jpg) -->

## **29、列出各种工作的最低工资及从事此工作的雇员姓名**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps174.jpg) -->

## **30、列出各个部门的MANAGER(领导)的最低薪金**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps175.jpg) -->

## **31、列出所有员工的年工资,按年薪从低到高排序**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps176.jpg) -->

## **32、求出员工领导的薪水超过3000的员工名称与领导名称**

<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps177.jpg) -->

## **33、求出部门名称中,带'S'字符的部门员工的工资合计、部门人数.**
<!-- ![img](https://www.oss.tuwei.site/blogsImgs/images/wps178.jpg) -->

## **34、给任职日期超过30年的员工加薪10%.**
