CREATE DATABASE productos_reposteria;
USE productos_reposteria;
CREATE TABLE ProductosReposteria (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Descripcion VARCHAR(255),
    Precio DECIMAL(10,2),
    Categoria VARCHAR(50)
);

INSERT INTO ProductosReposteria (Nombre, Descripcion, Precio, Categoria) VALUES
('Brownies', 'Brownie de chocolate tradicional', 3.50, 'Reposteria'),
('Pizza Dulce', 'Pizza con nutella y frutas', 6.00, 'Reposteria'),
('Pancakes', 'Pancakes con miel y mantequilla', 4.00, 'Reposteria'),
('Bombones', 'Bombones rellenos de crema', 2.50, 'Reposteria'),
('Cupcakes', 'Cupcakes de vainilla con crema', 3.00, 'Reposteria'),
('Galletas', 'Galletas caseras con chispas de chocolate', 1.50, 'Reposteria'),
('Cheesecake', 'Cheesecake de frutos rojos', 5.50, 'Reposteria'),
('Tarta de Limón', 'Tarta fría de limón', 4.75, 'Reposteria'),
('Donas', 'Donas glaseadas variadas', 2.00, 'Reposteria'),
('Croissants', 'Croissant de mantequilla fresco', 2.80, 'Reposteria'),
('Macarons', 'Macarons franceses surtidos', 5.00, 'Reposteria'),
('Churros', 'Churros con azúcar y canela', 1.80, 'Reposteria');
