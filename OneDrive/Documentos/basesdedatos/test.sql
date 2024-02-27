SHOW DATABASES;

CREATE Table estudiantes (
    id INT PRIMARY KEY AUTO_INCREMENT, Nombre VARCHAR(45), Apellidos VARCHAR(45), Correo VARCHAR(150), Fecha_Nacimiento DATE
);

SELECT * FROM estudiantes;

SELECT Nombre, Apellidos FROM estudiantes;

INSERT INTO
    estudiantes (
        Nombre, Apellidos, Correo, Fecha_Nacimiento,
    )
VALUES (
        "test", "tesapellido", "test@gmail", "2023-05-21"
    )

SELECT nombres, apellidos, edad FROM users WHERE edad = 20;

/*filtar entre 20 y 30 y genero mujer */
SELECT *
FROM users
WHERE
    edad >= 20
    AND edad <= 30
    AND genero = "M"
    /*filtar el de menor edad*/
SELECT MIN(edad), nombres,
FROM users;

/*filtar el de menor edad*/
SELECT *
FROM users
ORDER BY edad ASC
LIMIT 1
    /*contar todos los datos*/
SELECT COUNT(*) as total
FROM users
    /*obtener los primeros 5*/
SELECT *
FROM users
ORDER BY id
LIMIT 5;

/*obtener los ultimos 10 */
SELECT * FROM users ORDER BY id DESC LIMIT 10;

/*listar usurios que el correo termine en punto net.*/
SELECT * FROM users WHERE correo LIKE '%.net';

/* listar los usurios que no vivan en colombia*/
SELECT *
FROM users
WHERE
    NOT pais = "colombia"
    /* listar los usurios que no vivan en ecuador y panama*/
SELECT *
FROM users
WHERE
    NOT pais = "ecuador"
    AND NOT pais = "panama"

SELECT *
FROM users
WHERE
    pais NOT IN("ecuador", "panama")
    /* cuantos(numero )usuarios son de colombia y les gusta el rock */
SELECT COUNT(*)
FROM users
WHERE
    pais = "colombia"
    AND musica = "rock"
    /*actualizar el genero musical de todos los usurios de la base de datos de metal a carranga*/

UPDATE users SET musica = "carranga" WHERE musica = "metal"

SELECT *
FROM users
    /*listado de hombres que les guste la carranga sean de colombia y tengan entre 10 y 20 años de edad*/
SELECT *
FROM users
WHERE
    genero = 'H'
    AND Pais = 'Colombia'
    AND edad BETWEEN 10 AND 20
    AND musica = 'carranga';

/* actualizar todos los usuarios que tengan entre 99 años su genero musical favorito sera la carranga*/
UPDATE users SET musica = 'carranga' WHERE edad = 99;

/*listar todos los usuarios que su nombre inicie con "a" "A"*/
SELECT *
FROM users
WHERE
    UPPER(nombres) LIKE 'A%'
    AND nombres LIKE "a%";

/*listar todos los usuarios que su apellido finalice en z Z */
SELECT *
FROM users
WHERE
    apellidos LIKE '%z'
    AND apellidos LIKE '%Z';

/*acutalizar los usuarios que tengan 50 años de edad su nuevo genero musical es null*/

ALTER TABLE users
MODIFY musica varchar(255) COLLATE utf8mb4_unicode_ci NULL

UPDATE users SET musica = NULL WHERE edad = "50";

/*listar todo los usuarios que su genero musical sea igual a null*/
SELECT * FROM users WHERE musica IS NULL;

/*cual es el resultado de la suma de todas las edades*/
SELECT SUM(edad) FROM users;

/*cuantos usuarios tenemos registrados de "ecuador"*/
SELECT COUNT(*) FROM users WHERE pais = 'ecuador';

/*cuantos usuarios son de colombia y les gusta el vallenato */
SELECT COUNT(*)
FROM users
WHERE
    pais = 'Colombia'
    AND musica = 'vallenato';