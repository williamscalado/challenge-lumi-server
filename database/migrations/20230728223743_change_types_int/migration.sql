/*
  Warnings:

  - Changed the type of `energy_unit` on the `bill` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "bill" DROP COLUMN "energy_unit",
ADD COLUMN     "energy_unit" INTEGER NOT NULL;
