CREATE TABLE IF NOT EXISTS `vaas_vps`.`system_user` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(40) NOT NULL,
  `password` VARCHAR(128) NOT NULL,
  `email` VARCHAR(64) NOT NULL,
  `tenant_id` INT UNSIGNED,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC)
)
ENGINE = InnoDB;
