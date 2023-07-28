/*
  Warnings:

  - You are about to drop the column `client_id` on the `bill` table. All the data in the column will be lost.
  - You are about to drop the column `create_at` on the `bill` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `bill` table. All the data in the column will be lost.
  - Added the required column `client_number` to the `bill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `bill` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "bill" DROP CONSTRAINT "bill_client_id_fkey";

-- AlterTable
ALTER TABLE "bill" DROP COLUMN "client_id",
DROP COLUMN "create_at",
DROP COLUMN "update_at",
ADD COLUMN     "client_number" BIGINT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "client" ALTER COLUMN "client_number" SET DATA TYPE BIGINT;

-- AddForeignKey
ALTER TABLE "bill" ADD CONSTRAINT "bill_client_number_fkey" FOREIGN KEY ("client_number") REFERENCES "client"("client_number") ON DELETE RESTRICT ON UPDATE CASCADE;
