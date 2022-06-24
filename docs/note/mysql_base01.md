# mysql学习笔记

## **1、数据库概述及数据准备**

### 1.1、SQL概述

SQL，一般发音为sequel，SQL的全称Structured Query Language)，SQL用来和数据库打交道，完成和数据库的通信，SQL是一套标准。但是每一个数据库都有自己的特性别的数据库没有,当使用这个数据库特性相关的功能,这时SQL语句可能就不是标准了.(90%以上的SQL都是通用的)

### 1.2、什么是数据库

数据库，通常是一个或一组文件，保存了一些符合特定规格的数据,数据库对应的英语单词是DataBase,简称:DB,数据库软件称为数据库管理系统（DBMS），全称为DataBase Management System，如：Oracle、SQL Server、MySql、Sybase、informix、DB2、interbase、PostgreSql 。

### 1.3、MySql概述

MySQL最初是由“MySQL AB”公司开发的一套关系型数据库管理系统（RDBMS-Relational Database Mangerment System）。

MySQL不仅是最流行的开源数据库，而且是业界成长最快的数据库，每天有超过7万次的下载量，其应用范围从大型企业到专有的嵌入应用系统。

MySQL AB是由两个瑞典人和一个芬兰人：David Axmark、Allan Larsson和Michael “Monty” Widenius在瑞典创办的。

在2008年初，Sun Microsystems收购了MySQL AB公司。在2009年，Oracle收购了Sun公司，使MySQL并入Oracle的数据库产品线。

### 1.4、MySql的安装


安装教程网上很多，这里不多介绍
<!-- 打开下载的mysql安装文件mysql-essential-5.0.22-win32.msi，双击运行，出现如下界面

![img](https://www.oss.tuwei.site/blogsImgs/images/wps1.png)

按“Next”继续

![img](https://www.oss.tuwei.site/blogsImgs/images/wps2.png)

选择安装类型，有“Typical（默认）”、“Complete（完全）”、“Custom（用户自定义）”三个选项，我们选择“Custom”，有更多的选项，也方便熟悉安装过程

![img](https://www.oss.tuwei.site/blogsImgs/images/wps3.jpg)

上一步选择了 Custom 安装，这里将设定 MySQL 的组件包和安装路径，设定好之后，单击 Next 继续安装。

![img](https://www.oss.tuwei.site/blogsImgs/images/wps4.png)

现在软件安装完成了，出现上面的界面，将 “Configure the Mysql Server now”前面的勾打上，点“Finish”结束软件的安装并启动mysql配置向导。

mysql配置向导启动界面，按“Next”继续。

![img](https://www.oss.tuwei.site/blogsImgs/images/wps5.png)

选择配置方式，“Detailed Configuration（手动精确配置）”、“Standard Configuration（标准配置）”，我们选择“Detailed Configuration”，方便熟悉配置过程。

![img](https://www.oss.tuwei.site/blogsImgs/images/wps6.png) 

选择服务器类型，“Developer Machine（开发测试类，mysql占用很少资源）”、“Server Machine（服务器类型，mysql占用较多资源）”、“Dedicated MySQL Server Machine（专门的数据库服务器，mysql占用所有可用资源）”，大家根据自己的类型选择了，一般选“Server Machine”，不会太少，也不会占满。

![img](https://www.oss.tuwei.site/blogsImgs/images/wps7.png)

选择mysql数据库的大致用途，“Multifunctional Database（通用多功能型，能很好的支持InnoDB与MyISAM存储引擎）”、“Transactional Database Only（服务器类型，专注于事务处理，一般）”、“Non-Transactional Database Only（非事务处理型，较简单，主要做一些监控、记数用，对MyISAM数据类型的支持仅限于non-transactional），随自己的用途而选择了，我这里选择“Multifunctional Database”， 按“Next”继续。

![img](https://www.oss.tuwei.site/blogsImgs/images/wps8.png)

对InnoDB Tablespace进行配置，就是为InnoDB 数据库文件选择一个存储空间，如果修改了，要记住位置，重装的时候要选择一样的地方，否则可能会造成数据库损坏，当然，对数据库做个备份就没问题了，这里不详述。我这里没有修改，使用用默认位置，直接按“Next”继续。

![img](https://www.oss.tuwei.site/blogsImgs/images/wps9.png)

选择您的网站的一般mysql访问量，同时连接的数目，“Decision Support(DSS)/OLAP（20个左右）”、“Online Transaction Processing(OLTP)（500个左右）”、“Manual Setting（手动设置，自己输一个数）”，我这里选“Decision Support(DSS)/OLAP)”，按“Next”继续

![img](https://www.oss.tuwei.site/blogsImgs/images/wps10.png)

是否启用TCP/IP连接，设定端口，如果不启用，就只能在自己的机器上访问mysql数据库了，我这里启用，把前面的勾打上，Port Number：3306，在这个页面上，您还可以选择“启用标准模式”（Enable Strict Mode），按“Next”继续。

![img](https://www.oss.tuwei.site/blogsImgs/images/wps11.jpg)

这个比较重要，就是对mysql默认数据库语言编码进行设置，第一个是西文编码，我们要设置的是utf8编码，按 “Next”继续。

![img](https://www.oss.tuwei.site/blogsImgs/images/wps12.png)

选择是否将mysql安装为windows服务，还可以指定Service Name（服务标识名称），是否将mysql的bin目录加入到Windows PATH（加入后，就可以直接使用bin下的文件，而不用指出目录名，比如连接，“mysql.exe -uusername -ppassword;”就可以了，不用指出mysql.exe的完整地址，很方便），我这里全部打上了勾，Service Name不变。按“Next”继续。

![img](https://www.oss.tuwei.site/blogsImgs/images/wps13.png)

设置完毕，按“Next”继续。

![img](https://www.oss.tuwei.site/blogsImgs/images/wps14.png)

确认设置无误，如果有误，按“Back”返回检查。按“Execute”使设置生效。

![img](https://www.oss.tuwei.site/blogsImgs/images/wps15.png)

设置完毕，按“Finish”结束mysql的安装与配置

可以通过服务管理器管理 MYSQL 的服务。

通过命令调用服务管理器:services.msc

停止 MYSQL 的服务。

![img](https://www.oss.tuwei.site/blogsImgs/images/wps16.jpg)

启动 MYSQL 的服务。

![img](https://www.oss.tuwei.site/blogsImgs/images/wps17.jpg)

也可以在 DOS 中直接通过命令行的形式进行控制。
-->
停止 MYSQL 的服务。

![img](https://www.oss.tuwei.site/blogsImgs/images/wps18.jpg)

启动 MYSQL 的服务。

![img](https://www.oss.tuwei.site/blogsImgs/images/wps19.jpg)

### 1.5、表

表(table)是一种**结构化的文件**，可以用来存储特定类型的数据，如：学生信息，课程信息，都可以放到表中。另外表都有特定的名称，而且不能重复。表中具有几个概念：列、行、主键。 列叫做字段(Column),行叫做表中的记录,每一个字段都有:字段名称/字段数据类型/字段约束/字段长度

学生信息表

| 学号（主键） | 姓名 | 性别 | 年龄 |
| ------------ | ---- | ---- | ---- |
| 00001        | 张三 | 男   | 20   |
| 00002        | 李四 | 女   | 20   |

### 1.6、SQL的分类

数据查询语言(DQL-Data Query Language)

代表关键字:select

数据操纵语言(DML-Data Manipulation Language)

代表关键字:insert,delete,update

数据定义语言(DDL-Data Definition Language)

代表关键字:create ,drop,alter,

事务控制语言(TCL-Transactional Control Language)

代表关键字:commit ,rollback;

数据控制语言(DCL-Data Control Language)

代表关键字:grant,revoke.

### 1.7、导入演示数据

使用MySQL命令行客户端来装载数据库。

(1) 连接MySql

![img](https://www.oss.tuwei.site/blogsImgs/images/wps20.jpg)

(2) 创建“bjpowernode”数据库

mysql> create database bjpowernode;

(3) 选择数据库

mysql> use bjpowernode

(4) 导入数据

mysql>source D:\ bjpowernode.sql

(5) 删除数据库(这里不要做!)

mysql> drop database bjpowernode;

### 1.8、表结构描述

表名称：dept

描述：部门信息表

| 英文字段名称 | 中文描述 | 类型        |
| ------------ | -------- | ----------- |
| DEPTNO       | 部门编号 | INT(2)      |
| DNAME        | 部门名称 | VARCHAR(14) |
| LOC          | 位置     | VARCHAR(13) |

表名称：emp

描述：员工信息表

| 英文字段名称 | 中文描述 | 类型         |
| ------------ | -------- | ------------ |
| EMPNO        | 员工编号 | INT (4)      |
| ENAME        | 员工姓名 | VARCHAR(10)  |
| JOB          | 工作岗位 | VARCHAR(9)   |
| MGR          | 上级领导 | INT (4)      |
| HIREDATE     | 入职日期 | DATE         |
| SAL          | 薪水     | DOUBLE(7,2)  |
| COMM         | 津贴     | DOUBLE (7,2) |
| DEPTNO       | 部门编号 | INT(2)       |

注：DEPTNO字段是外键，DEPTNO的值来源于dept表的主键，起到了约束的作用

表名称：salgrade

描述：薪水等级信息表

| 英文字段名称 | 中文描述 | 类型 |
| ------------ | -------- | ---- |
| GRADE        | 等级     | INT  |
| LOSAL        | 最低薪水 | INT  |
| HISAL        | 最高薪水 | INT  |

## **2、常用命令**

### 2.1、查看msyql版本

• MySQL程序选项具有以下两种通用形式：

– 长选项，由单词之前加两个减号组成

– 短选项，由单个字母之前加一个减号组成

C:\Users\Administrator>mysql --version

mysql  Ver 14.14 Distrib 5.5.36, for Win32 (x86)

C:\Users\Administrator>mysql -V

mysql  Ver 14.14 Distrib 5.5.36, for Win32 (x86)

### 2.2、创建数据库

1. create database 数据库名称;

create database  bjpowernode;

2. use 数据库名称

use bjpowernode;

在数据库中建立表，因此创建表的时候必须要先选择数据库。

### 2.3、查询当前使用的数据库

```sql
select  database();
```

查询数据库版本也可以使用

```sql
select  version();
```

### 2.4、终止一条语句

如果想要终止一条正在编写的语句，可键入\c。

### 2.5、退出*mysql

可使用\q、QUIT或EXIT：

如：

mysql> \q (ctrl+c)

## **3、查看“演示数据”的表结构**

### 3.1、查看和指定现有的数据库

![img](https://www.oss.tuwei.site/blogsImgs/images/wps21.jpg)

### 3.2、指定当前缺省数据库

![img](https://www.oss.tuwei.site/blogsImgs/images/wps22.jpg)

### 3.3、查看当前使用的库

![img](https://www.oss.tuwei.site/blogsImgs/images/wps23.jpg)

### 3.4、查看当前库中的表

![img](https://www.oss.tuwei.site/blogsImgs/images/wps24.jpg)

### 3.5、查看其他库中的表

show tables from ;

如查看exam库中的表

![img](https://www.oss.tuwei.site/blogsImgs/images/wps25.jpg)

### 3.6、查看表的结构

desc

如：

![img](https://www.oss.tuwei.site/blogsImgs/images/wps26.jpg)

### 3.7、查看表的创建语句

show create table

如：

![img](https://www.oss.tuwei.site/blogsImgs/images/wps27.jpg) ![img](https://www.oss.tuwei.site/blogsImgs/images/wps28.jpg)

## **4、简单的查询**

### 4.1、查询一个字段

查询员工姓名

```sql
select ename from emp; 
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps29.jpg) 

Select语句后面跟的是字段名称，select是关键字，select和字段名称之间采用空格隔开，from表示将要查询的表，它和字段之间采用空格隔开

### 4.2、查询多个字段

查询员工的编号和姓名

```sql
select empno, ename from emp;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps30.jpg)

查询多个字段，select中的字段采用逗号间隔即可，最后一个字段，也就是在from前面的字段不能使用逗号了。

### 4.3、查询全部字段

可以将所有的字段放到select语句的后面，这种方案不方便，但是比较清楚，我们可以采用如下便捷的方式查询全部字段

```sql
select * from emp;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps31.jpg)

采用select  *from emp，虽然简单，但是*号不是很明确，建议查询全部字段将相关字段写到select语句的后面,在以后java连接数据库的时候,是需要在java程序中编写SQL语句的,这个时候编写的SQL语句不建议使用select *  这种形式,建议写明字段,这样可读性强.

### 4.4、计算员工的年薪

列出员工的编号，姓名和年薪

```sql
select empno, ename, sal*12 from emp;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps32.jpg)

在select语句中可以使用运算符，以上存在一些问题，年薪的字段名称不太明确

### 4.5、将查询出来的字段显示为中文

```sql
select empno as ‘员工编号’, ename as ‘员工姓名’, sal*12 as ‘年薪’ from emp;注意:字符串必须添加单引号 | 双引号
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps33.jpg)

可以采用as关键字重命名表字段，其实as也可以省略，如：

```sql
select empno  "员工编号", ename  "员工姓名", sal*12  "年薪" from emp;
```

## **5、条件查询**

条件查询需要用到where语句，where必须放到from语句表的后面

支持如下运算符

| 运算符           | 说明                                                         |
| ---------------- | ------------------------------------------------------------ |
| =                | 等于                                                         |
| <>或!=           | 不等于                                                       |
| <                | 小于                                                         |
| <=               | 小于等于                                                     |
| >                | 大于                                                         |
| >=               | 大于等于                                                     |
| between … and …. | 两个值之间,**等同于 >= and <=**                              |
| is null          | 为null（is not null 不为空）                                 |
| **and**          | 并且                                                         |
| **or**           | 或者                                                         |
| in               | 包含，相当于多个or（not in不在这个范围中）                   |
| not              | not可以取非，主要用在is 或in中                               |
| like             | like称为模糊查询，支持%或下划线匹配%匹配任意个字符下划线，一个下划线只匹配一个字符 |

### 5.1、等号操作符

查询薪水为5000的员工

```sql
select empno, ename, sal from emp where sal=5000;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps34.jpg)

查询job为MANAGER的员工

```sql
select empno, ename from emp where job=manager;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps35.jpg)

以上查询出现错误，因为job为字符串，所以出现了以上错误

```sql
select empno, ename from emp where job="manager";
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps36.jpg)

```sql
select empno, ename from emp where job=’manager’;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps37.jpg)

也可以使用单引号

```sql
select empno, ename from emp where job='MANAGER';
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps38.jpg)

以上输出正确，Mysql默认情况下大小写是不敏感的。

注意：

MySQL在windows下是不区分大小写的，将script文件导入MySQL后表名也会自动转化为小写，结果再 想要将数据库导出放到linux服务器中使用时就出错了。因为在linux下表名区分大小写而找不到表，查了很多都是说在linux下更改MySQL的设置使其也不区分大小写，但是有没有办法反过来让windows 下大小写敏感呢。其实方法是一样的，相应的更改windows中MySQL的设置就行了。

   具体操作：

   在MySQL的配置文件my.ini中增加一行：

   lower_case_table_names = 0

   其中 0：区分大小写，1：不区分大小写

   MySQL在Linux下数据库名、表名、列名、别名大小写规则是这样的：

1、数据库名与表名是严格区分大小写的；

2、表的别名是严格区分大小写的；

3、列名与列的别名在所有的情况下均是忽略大小写的；

4、变量名也是严格区分大小写的；  MySQL在Windows下都不区分大小写

### 5.2、 <>操作符

查询薪水不等于5000的员工

```sql
select empno, ename, sal from emp where sal <> 5000;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps39.jpg)

一下写法等同于以上写法，建议使用第一种写法

```sql
select empno, ename, sal from emp where sal != 5000;
```

数值也可以采用单引号引起来，如一下语句是正确的(不建议这么写)：

```sql
select empno, ename, sal from emp where sal <> '5000';
```

查询工作岗位不等于MANAGER的员工

```sql
select empno, ename from emp where job <> 'MANAGER';
```

### 5.3、between … and …*操作符

查询薪水为1600到3000的员工(第一种方式，采用>=和<=)

```sql
select empno, ename, sal from emp where sal >= 1600 and sal <= 3000;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps40.jpg)

查询薪水为1600到3000的员工(第一种方式，采用between … and …)

```sql
select empno, ename, sal from emp where sal between 1600 and 3000;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps41.jpg)

关于between … and …，它是包含最大值和最小值的

### 5.4、is null

Null为空，但不是空串，为null可以设置这个字段不填值，如果查询为null的字段，采用is null

查询津贴为空的员工

```sql
select * from emp where comm=null;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps42.jpg)

以上也无法查询出符合条件的数据，因为null类型比较特殊，必须使用 is来比较
```sql
select * from emp where comm is null;
```
![img](https://www.oss.tuwei.site/blogsImgs/images/wps43.jpg)

以上查询正确

### 5.5、 and

and表示并且的含义，表示所有的条件必须满足

工作岗位为MANAGER,薪水大于2500的员工

```sql
select * from emp where job='MANAGER' and sal > 2500;
```
![img](https://www.oss.tuwei.site/blogsImgs/images/wps44.jpg)

### 5.6、or

or，只要满足条件即可,相当于包含

查询出job为manager或者job为salesman的员工

```sql
select * from emp where job='MANAGER' or job='SALESMAN';
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps45.jpg)

### 5.7、表达式的优先级

查询薪水大于1800，并且部门代码为20或30的员工（错误的写法）

```sql
select * from emp where sal > 1800 and deptno = 20 or deptno = 30;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps46.jpg)

以上输出不是预期结果，薪水小于1800的数据也被查询上来了，原因是表达式的优先级导致的，首先过滤sal > 1800 and deptno = 20，然后再将deptno = 30员工合并过来，所以是不对的

查询薪水大于1800，并且部门代码为20或30的（正确的写法）

```sql
select * from emp where sal > 1800 and (deptno = 20 or deptno = 30);
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps47.jpg)

关于运算符的问题：不用记，没有把握尽量采用括号

### 5.8、in

in表示包含的意思，完全可以采用or来表示，采用in会更简洁一些

查询出job为manager或者job为salesman的员工

```sql
select * from emp where job in ('manager','salesman');
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps48.jpg)

查询出薪水包含1600和薪水包含3000的员工
```sql
select * from emp where sal in(1600, 3000);
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps49.jpg)

### 5.9、not

查询出薪水不包含1600和薪水不包含3000的员工（第一种写法）

```sql
select * from emp where sal <> 1600 and sal <> 3000;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps50.jpg)

查询出薪水不包含1600和薪水不包含3000的员工（第二种写法

```sql
select * from emp where not (sal = 1600 or sal = 3000);
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps51.jpg)

查询出薪水不包含1600和薪水不包含3000的员工（第三种写法）

```sql
select * from emp where sal not in (1600, 3000);
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps52.jpg)

查询出津贴不为null的所有员工

```sql
select * from emp where comm is not  null;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps53.jpg)

### 5.10、like

Like可以实现模糊查询，like支持%和下划线匹配

查询姓名以M开头所有的员工

```sql
select * from emp where ename like 'M%';
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps54.jpg)

查询姓名以N结尾的所有的员工

```sql
select * from emp where ename like '%N';
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps55.jpg)

查询姓名中包含O的所有的员工

```sql
select * from emp where ename like '%O%';
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps56.jpg)

查询姓名中第二个字符为A的所有员工

```sql
select * from emp where ename like '_A%';
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps57.jpg)Like中%和下划线的差别？

%匹配任意字符出现的个数

下划线只匹配一个字符

Like 中的表达式必须放到单引号中|双引号中，以下写法是错误的：

```sql
select * from emp where ename like _A%
```

## **6、排序数据**

### 6.1、单一字段排序

排序采用order by子句，order by后面跟上排序字段，排序字段可以放多个，多个采用逗号间隔，order by默认采用升序，如果存在where子句那么order by必须放到where语句的后面

按照薪水由小到大排序(系统默认由小到大)

```sql
select * from emp order by sal;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps58.jpg)

取得job为MANAGER的员工，按照薪水由小到大排序(系统默认由小到大)

```sql
select * from emp where job='MANAGER' order by sal;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps59.jpg)

如果包含where语句order by必须放到where后面，如果没有where语句order by放到表的后面

以下写法是错误的：

```sql
select * from emp order by sal where job='MANAGER';
```

按照多个字段排序，如：首先按照job排序，再按照sal排序

```sql
select * from emp order by job,sal;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps60.jpg)

### 6.2、手动指定排序顺序

手动指定按照薪水由小到大排序

```sql
[img](https://tuwei.site/ui/ms100/note/mysql_base.html#_15-4%E3%80%81%E4%BA%8B%E5%8A%A1%E7%9A%84%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB)elect * from emp order by sal asc;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps61.jpg)

手动指定按照薪水由大到小排序

```sql
select * from emp order by sal desc;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps62.jpg)

### 6.3、多个字段排序

按照job和薪水倒序

```sql
select * from emp order by job desc, sal desc;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps63.jpg)

如果采用多个字段排序，如果根据第一个字段排序重复了，会根据第二个字段排序

### 6.4、使用字段的位置来排序

按照薪水升序

```sql
select * from emp order by 6;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps64.jpg)

不建议使用此种方式，采用数字含义不明确，程序不健壮

## **7、分组函数/聚合函数/多行处理函数**

| count | 取得记录数 |
| ----- | ---------- |
| sum   | 求和       |
| avg   | 取平均     |
| max   | 取最大的数 |
| min   | 取最小的数 |

**注意：分组函数自动忽略空值，不需要手动的加where条件排除空值。**

**select count() from emp where xxx**; //符合条件的所有记录总数。

**select count(comm) from emp;comm** //这个字段中不为空的元素总数。

注意：分组函数不能直接使用在where关键字后面。

```sql
mysql> select ename,sal from emp where sal > avg(sal);

ERROR 1111 (HY000): Invalid use of group function
```

### 7.1、count

取得所有的员工数


```sql
select count(*) from emp;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps65.jpg)Count(*)表示取得所有记录，忽略null，为null的值也会取得

取得津贴不为null员工数

```sql
select count(comm) from emp;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps66.jpg)

采用count(字段名称)，不会取得为null的记录

取得工作岗位的个数

```sql
select count(distinct job ) from emp;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps67.jpg)

### 7.2、sum

Sum可以取得某一个列的和，null会被忽略

取得薪水的合计

```sql
select sum(sal) from emp;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps68.jpg)

取得津贴的合计

```sql
select sum(comm) from emp;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps69.jpg)

null会被忽略

取得薪水的合计（sal+comm）

```sql
select sum(sal+comm) from emp;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps70.jpg)

从以上结果来看，不正确，原因在于comm字段有null值，所以无法计算，sum会忽略掉，正确的做法是将comm字段转换成0

```sql
select sum(sal+IFNULL(comm, 0)) from emp;
```
![img](https://www.oss.tuwei.site/blogsImgs/images/wps71.jpg)

### 7.3、avg

取得某一列的平均值

取得平均薪水

```sql
select avg(sal) from emp;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps72.jpg)

### 7.4、max

取得某个一列的最大值

取得最高薪水

```sql
select max(sal) from emp;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps73.jpg)

取得最晚入职得员工

```sql
select max(str_to_date (hiredate, '%Y-%m-%d')) from emp;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps74.jpg)

### 7.5、min

取得某个一列的最小值

取得最低薪水

```sql
select min(sal) from emp;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps75.jpg)

取得最早入职得员工（可以不使用str_to_date转换）

```sql
select min(str_to_date(hiredate, '%Y-%m-%d')) from emp;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps76.jpg)

### 7.6、组合聚合函数

可以将这些聚合函数都放到select中一起使用

```sql
select count(*),sum(sal),avg(sal),max(sal),min(sal) from emp;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps77.jpg)

## **8、分组查询**

分组查询主要涉及到两个子句，分别是：group by和having

### 8.1、group by

取得每个工作岗位的工资合计，要求显示岗位名称和工资合计

```sql
select job, sum(sal) from emp group by job;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps78.jpg)

如果使用了order by，order by必须放到group by后面

![img](https://www.oss.tuwei.site/blogsImgs/images/wps79.jpg)

按照工作岗位和部门编码分组，取得的工资合计

n 原始数据

![img](https://www.oss.tuwei.site/blogsImgs/images/wps80.jpg)

n 分组语句

```sql
select job,deptno,sum(sal) from emp group by job,deptno;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps81.jpg)

```sql
mysql> select empno,deptno,avg(sal) from emp group by deptno;
```

+-------+--------+-------------+

| empno | deptno | avg(sal)  |

+-------+--------+-------------+

|  7782 |  10 | 2916.666667 |

|  7369 |  20 | 2175.000000 |

|  7499 |  30 | 1566.666667 |

+-------+--------+-------------+

以上SQL语句在Oracle数据库中无法执行，执行报错。

以上SQL语句在Mysql数据库中可以执行，但是执行结果矛盾。

在SQL语句中若有group by 语句，那么在select语句后面只能跟 **分组函数*+*参与分组的字段**。

### 8.2、having

如果想对分组数据再进行过滤需要使用having子句

取得每个岗位的平均工资大于2000

```sql
select job, avg(sal) from emp group by job having avg(sal) >2000;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps82.jpg)

分组函数的执行顺序：

根据条件查询数据

分组

采用having过滤，取得正确的数据

### 8.3、select语句总结

一个完整的select语句格式如下

select 字段from 表名where …….group by ……..having …….(就是为了过滤分组后的数据而存在的—不可以单独的出现)order by ……..

以上语句的执行顺序

1. 首先执行where语句过滤原始数据

2. 执行group by进行分组

3. 执行having对分组数据进行操作

4. 执行select选出数据

5. 执行order by排序

原则：能在where中过滤的数据，尽量在where中过滤，效率较高。having的过滤是专门对分组之后的数据进行过滤的。

## **9、连接查询**

### 9.1、SQL92语法

连接查询：也可以叫跨表查询，需要关联多个表进行查询

显示每个员工信息，并显示所属的部门名称

```sql
select ename, dname from emp, dept;                          |
```

以上输出，不正确，输出了56条数据，其实就是两个表记录的成绩，这种情况我们称为：“笛卡儿乘积”，出现错误的原因是：没有指定连接条件

指定连接条件

```sql
select emp.ename, dept.dname from emp, dept where emp.deptno=dept.deptno;也可以使用别名select e.ename, d.dname from emp e, dept d where e.deptno=d.deptno;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps83.jpg)

以上结果输出正确，因为加入了正确的连接条件

以上查询也称为 “内连接”，只查询相等的数据（连接条件相等的数据）

取得员工和所属的领导的姓名

```sql
select e.ename, m.ename from emp e, emp m where e.mgr=m.empno; 
```


以上称为“自连接”，只有一张表连接，具体的查询方法，把一张表看作两张表即可，如以上示例：第一个表emp e代码了员工表，emp m代表了领导表，相当于员工表和部门表一样

### 9.2、SQL99语法

（内连接）显示薪水大于2000的员工信息，并显示所属的部门名称

采用SQL92语法：select e.ename, e.sal, d.dname from emp e, dept d where e.deptno=d.deptno and  e.sal > 2000;采用SQL99语法：select e.ename, e.sal, d.dname from emp e join dept d on e.deptno=d.deptno where e.sal>2000;或select e.ename, e.sal, d.dname from emp e inner join dept d on e.deptno=d.deptno where e.sal>2000;在实际中一般不加inner关键字

Sql92语法和sql99语法的区别：99语法可以做到表的连接和查询条件分离，特别是多个表进行连接的时候，会比sql92更清晰

（外连接）显示员工信息，并显示所属的部门名称，如果某一个部门没有员工，那么该部门也必须显示出来

```sql
右连接：select e.ename, e.sal, d.dname from emp e right join dept d on e.deptno=d.deptno;左连接：select e.ename, e.sal, d.dname from dept d left join emp e on e.deptno=d.deptno;以上两个查询效果相同
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps84.jpg)

连接分类：

内链接

表1  inner join  表2  on  关联条件

做连接查询的时候一定要写上关联条件

inner 可以省略

外连接

左外连接

表1  left  outer  join  表2  on  关联条件

做连接查询的时候一定要写上关联条件

outer  可以省略*右外连接

表1  right  outer  join  表2  on  关联条件

做连接查询的时候一定要写上关联条件

outer  可以省略

*左外连接（左连接）和右外连接（右连接）的区别：

*左连接以左面的表为准和右边的表比较，和左表相等的不相等都会显示出来，右表符合条件的显示,不符合条件的不显示

*右连接恰恰相反，以上左连接和右连接也可以加入outer关键字，但一般不建议这种写法，如：

```sql
select e.ename, e.sal, d.dname from emp e right outer join dept d on e.deptno=d.deptno;select e.ename, e.sal, d.dname from dept d left outer join emp e on e.deptno=d.deptno;
```

左连接能完成的功能右连接一定可以完成

![img](https://www.oss.tuwei.site/blogsImgs/images/wps85.jpg)

## **10、子查询**

子查询就是嵌套的select语句，可以理解为子查询是一张表

### 10.1、在where语句中使用子查询，也就是在where语句中加入select语句

查询员工信息，查询哪些人是管理者，要求显示出其员工编号和员工姓名

实现思路：

1、首先取得管理者的编号，去除重复的

```sql
select distinct mgr from emp where mgr is not null; distinct  
-- 去除重复行
```

2、查询员工编号包含管理者编号的

```sql
select empno, ename from emp where empno in(select mgr from emp where mgr is not null);
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps86.jpg)

查询哪些人的薪水高于员工的平均薪水，需要显示员工编号，员工姓名，薪水

实现思路

1、 取得平均薪水

```sql
select avg(sal) from emp;
```

2、 取得大于平均薪水的员工

```sql
select empno, ename, sal from emp where sal > (select avg(sal) from emp);
```

​ ![img](https://www.oss.tuwei.site/blogsImgs/images/wps87.jpg)

### 10.2、在from语句中使用子查询，可以将该子查询看做一张表

查询员工信息，查询哪些人是管理者，要求显示出其员工编号和员工姓名

首先取得管理者的编号，去除重复的

```sql
select distinct mgr from emp where mgr is not null;
```

将以上查询作为一张表，放到from语句的后面

```sql
使用92语法：select e.empno, e.ename from emp e, (select distinct mgr from emp where mgr is not null) m where e.empno=m.mgr;使用99语法：select e.empno, e.ename from emp e join (select distinct mgr from emp where mgr is not null) m on e.empno=m.mgr;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps88.jpg)

查询各个部门的平均薪水所属等级，需要显示部门编号，平均薪水，等级编号

实现思路

1、首先取得各个部门的平均薪水

```sql
select deptno, avg(sal) avg_sal from emp group by deptno;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps89.jpg)

2、将部门的平均薪水作为一张表与薪水等级表建立连接，取得等级

| select deptno,avg(sal) avg_sal from emp group by deptno;     |
| ------------------------------------------------------------ |
| select * from salgrade;                                      |
| select a.deptno,a.avg_sal,g.grade from (select deptno,avg(sal) avg_sal from emp group by deptno ) a join salgrade g on a.avg_sal between g.losal and hisal; |

![img](https://www.oss.tuwei.site/blogsImgs/images/wps90.png)![img](https://www.oss.tuwei.site/blogsImgs/images/wps91.png)![img](https://www.oss.tuwei.site/blogsImgs/images/wps92.png)![img](https://www.oss.tuwei.site/blogsImgs/images/wps93.png)![img](https://www.oss.tuwei.site/blogsImgs/images/wps94.jpg)

### 10.3、在select语句中使用子查询

查询员工信息，并显示出员工所属的部门名称

第一种做法，将员工表和部门表连接

```sql
select e.ename, d.dname from emp e, dept d where e.deptno=d.deptno;
```

第二种做法，在select语句中再次嵌套select语句完成部分名称的查询

```sql
select e.ename, (select d.dname from dept d where e.deptno=d.deptno) as dname from emp e;
```

![img](https://www.oss.tuwei.site/blogsImgs/images/wps95.jpg)