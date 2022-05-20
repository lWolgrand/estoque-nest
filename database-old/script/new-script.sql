
insert into "Statuses"(id, name) values 
(1, 'Ativo'),
(2, 'Emprestado'),
(3, 'Manutenção'),
(4, 'Offline') ON CONFLICT DO NOTHING;

insert into categories(id, name) values 
(1, 'Móveis'),
(2, 'Notebook'),
(3, 'Desktop'),
(4, 'Teclado'),
(5, 'Mouse'),
(6, 'Monitor'),
(7, 'Estabilizador'),
(8, 'Chromebook'),
(9, 'Peça-hardware') ON CONFLICT DO NOTHING;

insert into sources(id, name) values 
(1, 'Doação'),
(2, 'Compra'),
(3, 'Alugado'),
(4, 'Empréstimo') ON CONFLICT DO NOTHING;
