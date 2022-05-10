CREATE TABLE IF NOT EXISTS DeviceStatus (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    enable BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS Categories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    enable BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS Sources (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    enable BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS Invoices (
    id SERIAL PRIMARY KEY,
    path TEXT NOT NULL,    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Devices (
    id SERIAL PRIMARY KEY,
    serial_number TEXT DEFAULT NULL,
    device_name TEXT NOT NULL,
    device_description TEXT DEFAULT NULL,
    id_source INT REFERENCES Sources(id),
    id_category INT REFERENCES Categories(id),
    id_status INT REFERENCES DeviceStatus(id),      
    id_invoice_in INT REFERENCES Invoices(id),
    id_invoice_out INT REFERENCES Invoices(id),    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    enable BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS Locations (
    id SERIAL PRIMARY KEY,
    id_device INT REFERENCES Devices(id),
    contact_name TEXT NOT NULL,
    contact_info TEXT NOT NULL,
    contact_address TEXT NOT NULL,    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    finished_at TIMESTAMP WITH TIME ZONE DEFAULT NULL,
    enable BOOLEAN DEFAULT TRUE
);

CREATE or replace VIEW VW_DEVICES AS
    SELECT 
        Devices.id id_device,
        Devices.serial_number,
        Devices.device_name,
        Devices.device_description,
        Sources.name source_name,
        Categories.name category_name,
        DeviceStatus.name device_status_name,
        Locations.contact_name location_contact_name,
        Locations.contact_info location_contact_info,
        Locations.contact_address location_contact_address,
        InvoicesIn.path invoice_in_path,
        InvoicesOut.path invoice_out_path,
        Devices.created_at,
        Devices.updated_at
    FROM
        Devices 
        INNER JOIN Sources ON Devices.id_source = Sources.id
        INNER JOIN Categories ON Devices.id_category = Categories.id
        INNER JOIN DeviceStatus ON Devices.id_status = DeviceStatus.id
        LEFT JOIN Invoices InvoicesIn ON Devices.id_invoice_in = InvoicesIn.id
        LEFT JOIN Invoices InvoicesOut ON Devices.id_invoice_out = InvoicesOut.id
        LEFT JOIN 
        (
            SELECT 
                id_device,
                contact_name, 
                contact_info, 
                contact_address 
            FROM 
                Locations 
              	left join Devices
              		on  Devices.id = Locations.id_device
            WHERE                
               Locations.finished_at IS NULL
            ORDER BY
                Locations.created_at DESC 
            LIMIT 1            
        ) Locations ON  Devices.id = Locations.id_device 
    WHERE
        Devices.enable = TRUE


insert into DeviceStatus(id, name) values 
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




