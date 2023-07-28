/*
  Warnings:

  - A unique constraint covering the columns `[client_number]` on the table `client` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `client_number` on the `client` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "bill" DROP CONSTRAINT "bill_client_id_fkey";

-- AlterTable
ALTER TABLE "client" DROP COLUMN "client_number",
ADD COLUMN     "client_number" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "client_client_number_key" ON "client"("client_number");

-- AddForeignKey
ALTER TABLE "bill" ADD CONSTRAINT "bill_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "client"("client_number") ON DELETE RESTRICT ON UPDATE CASCADE;
