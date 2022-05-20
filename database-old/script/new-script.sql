
insert into "Statuses"(id, name) values 
(1, 'Ativo'),
(2, 'Emprestado'),
(3, 'Manutenção'),
(4, 'Offline') ON CONFLICT DO NOTHING;

insert into categories(id, name) values 
(1, 'Móveis'),
(2, 'Noteboo'),
(3, 'Deskto'),
(4, 'Teclad'),
(5, 'Mouse'),
(6, 'Monito'),
(7, 'Estabilizado'),
(8, 'Chromeboo'),
(9, 'Peçahardwar') ON CONFLICT DO NOTHING;

insert into sources(id, name) values 
(1, 'Doação'),
(2, 'Compra'),
(3, 'Alugado'),
(4, 'Emprestado') ON CONFLICT DO NOTHING;
