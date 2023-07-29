/*
  Warnings:

  - Added the required column `energy_icms_amount` to the `bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energy_icms_price` to the `bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energy_icms_unit` to the `bill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bill" ADD COLUMN     "energy_icms_amount" INTEGER NOT NULL,
ADD COLUMN     "energy_icms_price" INTEGER NOT NULL,
ADD COLUMN     "energy_icms_unit" INTEGER NOT NULL;
