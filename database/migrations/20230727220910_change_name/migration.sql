/*
  Warnings:

  - You are about to drop the column `client_Int` on the `client` table. All the data in the column will be lost.
  - Added the required column `client_number` to the `client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "client" DROP COLUMN "client_Int",
ADD COLUMN     "client_number" VARCHAR(50) NOT NULL;
