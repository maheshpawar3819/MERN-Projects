/*
  Warnings:

  - You are about to drop the column `idDelete` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `idDelete` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `idDelete` on the `subcategory` table. All the data in the column will be lost.
  - You are about to drop the column `idDelete` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `category` DROP COLUMN `idDelete`,
    ADD COLUMN `isDelete` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `idDelete`,
    ADD COLUMN `isDelete` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `subcategory` DROP COLUMN `idDelete`,
    ADD COLUMN `isDelete` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `idDelete`,
    ADD COLUMN `isDelete` BOOLEAN NOT NULL DEFAULT false;
