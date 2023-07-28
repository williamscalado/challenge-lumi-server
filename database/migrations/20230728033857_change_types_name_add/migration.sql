/*
  Warnings:

  - You are about to drop the column `date` on the `bill` table. All the data in the column will be lost.
  - You are about to drop the column `month_ref` on the `bill` table. All the data in the column will be lost.
  - Added the required column `expiration_date` to the `bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reference` to the `bill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bill" DROP COLUMN "date",
DROP COLUMN "month_ref",
ADD COLUMN     "expiration_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "reference" TIMESTAMP(3) NOT NULL;
