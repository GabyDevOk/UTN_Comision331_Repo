CREATE SCHEMA `posteosutn` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE `posteosutn`.`posteos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(65) NULL,
  `contenido` VARCHAR(280) NULL,
  `createAt` DATE NULL,
  `updateAt` DATE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;