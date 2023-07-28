/*
  Warnings:

  - You are about to drop the column `data` on the `bill` table. All the data in the column will be lost.
  - Added the required column `date` to the `bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `month_ref` to the `bill` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `contribution_lighting` on the `bill` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "bill" DROP COLUMN "data",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "month_ref" TIMESTAMP(3) NOT NULL,
DROP COLUMN "contribution_lighting",
ADD COLUMN     "contribution_lighting" INTEGER NOT NULL;
