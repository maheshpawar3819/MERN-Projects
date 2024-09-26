-- AlterTable
ALTER TABLE `category` ADD COLUMN `idDelete` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `idDelete` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `subcategory` ADD COLUMN `idDelete` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `idDelete` BOOLEAN NOT NULL DEFAULT false;
