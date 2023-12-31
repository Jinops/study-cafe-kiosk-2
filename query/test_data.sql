insert into NOTICE
values (1, '공지사항1', '자리이동 및 소란스런 행위를 하시면 퇴실조치합니다.');

insert into USER
values (1, '01012345678', '1234', 'Carmen', 0);
insert into USER
values (2, '01022345678', '5678', 'Drew', 0);
insert into USER
values (3, '01032345678', '9101', 'Gordon', 0);
insert into USER
values (4, '01042345678', '1112', 'Aiden', 0);
insert into USER
values (5, '01052345678', '1314', 'Robin', 0);

insert into TICKET
values (1, 'basic', 2000, 120);
insert into TICKET
values (2, 'basic', 4000, 240);
insert into TICKET
values (3, 'basic', 6000, 360);
insert into TICKET
values (4, 'basic', 8000, 480);
insert into TICKET
values (5, 'fixed', 50000, 10080);
insert into TICKET
values (6, 'fixed', 100000, 20160);
insert into TICKET
values (7, 'fixed', 150000, 30240);
insert into TICKET
values (8, 'fixed', 210000, 43200);

insert into ROOM
values (1, '1 room', 50, 50);
insert into ROOM
values (2, '2 room', 50, 50);

insert into SEAT
values (1, 1, 20, 10, 20, 5);
insert into SEAT
values (2, 1, 20, 10, 20, 15);
insert into SEAT
values (3, 1, 20, 10, 20, 25);
insert into SEAT
values (4, 1, 20, 10, 20, 35);
insert into SEAT
values (5, 1, 20, 10, 20, 45);
insert into SEAT
values (6, 1, 20, 10, 40, 5);
insert into SEAT
values (7, 1, 20, 10, 40, 15);
insert into SEAT
values (8, 1, 20, 10, 40, 25);
insert into SEAT
values (9, 1, 20, 10, 40, 35);
insert into SEAT
values (10, 1, 20, 10, 40, 45);
insert into SEAT
values (11, 1, 20, 10, 40, 70);
insert into SEAT
values (12, 1, 20, 10, 40, 80);
insert into SEAT
values (13, 1, 20, 10, 60, 70);
insert into SEAT
values (14, 1, 20, 10, 60, 80);
insert into SEAT
values (15, 2, 20, 10, 20, 5);
insert into SEAT
values (16, 2, 20, 10, 20, 15);
insert into SEAT
values (17, 2, 20, 10, 20, 25);
insert into SEAT
values (18, 2, 20, 10, 20, 35);
insert into SEAT
values (19, 2, 20, 10, 20, 45);
insert into SEAT
values (20, 2, 20, 10, 40, 5);
insert into SEAT
values (21, 2, 20, 10, 40, 15);
insert into SEAT
values (22, 2, 20, 10, 40, 25);
insert into SEAT
values (23, 2, 20, 10, 40, 35);
insert into SEAT
values (24, 2, 20, 10, 40, 45);

insert into RESERVE
values (1, 1, 1, 1, 1, '2023-05-28 19:31:17', '2023-05-28 21:31:17');
insert into RESERVE
values (2, 2, 1, 2, 3, '2023-05-28 19:32:03', '2023-05-29 01:32:03');
insert into RESERVE
values (3, 3, 2, 6, 5, '2023-05-28 19:33:46', '2023-06-04 19:33:46');
insert into RESERVE
values (4, 4, 1, 4, 8, '2023-05-28 19:34:06', '2023-06-27 19:34:06');
insert into RESERVE
values (5, 5, 2, 7, 2, '2023-05-28 19:34:26', '2023-05-28 23:34:26');

insert into PAYMENT
values (1, 1, 1, 2000, '2023-05-28 19:31:17', 'card');
insert into PAYMENT
values (2, 2, 3, 6000, '2023-05-28 19:32:03', 'cash');
insert into PAYMENT
values (3, 3, 6, 100000, '2023-05-28 19:33:46', 'card');
insert into PAYMENT
values (4, 4, 8, 210000, '2023-05-28 19:34:06', 'cash');
