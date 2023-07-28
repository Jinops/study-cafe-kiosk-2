create table NOTICE(
Id int auto_increment primary key,
Title varchar(20) null,
Content text null
);

create table USER(
Id int auto_increment primary key,
Phone char(11) not null,
`Password` varchar(4) not null,
`Name` varchar(10) not null,
Total_payment int null default 0
);

create table TICKET(
Id int auto_increment primary key,
`Type` varchar(20) not null,
Price int not null,
Duration_min int not null,
constraint type_check check(Type in('basic', 'fixed'))
);

create table ROOM(
Id int auto_increment primary key,
`Name` varchar(20) not null,
Width int not null,
Height int not null,
constraint Width_ck check(Width>0 and Width<=100),
constraint Height_ck check(Height>0 and Height<=100)
);

create table SEAT( 
Id int auto_increment primary key,
Room_id int not null,
Width int not null,
Height int not null,
X int not null,
Y int not null,
constraint seat_FK foreign key(Room_id)
references ROOM(Id),
constraint X_ck check(X>=0 and X<=100),
constraint Y_ck check(Y>=0 and Y<=100)
);

create table RESERVE(
Id int auto_increment primary key,
User_id int not null,
Room_id int not null,
Seat_id int not null,
Ticket_id int not null,
Start_time datetime not null,
End_time datetime null,
constraint res_userFK foreign key(User_id)
   references USER(Id) ON DELETE CASCADE,
constraint res_seatFK foreign key(Seat_id)
   references SEAT(Id),
constraint res_ticketFK foreign key(Ticket_id)
   references TICKET(Id)
);

create table PAYMENT(
Id int auto_increment primary key,
User_id int not null,
Ticket_id int not null,
Price int not null,
Time timestamp not null,
Type varchar(10) not null,
constraint p_userFK foreign key(User_id)
   references USER(Id) ON DELETE CASCADE,
constraint p_ticketFK foreign key(Ticket_id)
   references TICKET(Id),
constraint payment_type_check check(Type in('card', 'cash'))
);

