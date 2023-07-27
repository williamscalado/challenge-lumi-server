-- CreateTable
CREATE TABLE "client" (
    "id" SERIAL NOT NULL,
    "client_Int" VARCHAR(50) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "address" VARCHAR(100) NOT NULL,
    "createAt" INTEGER NOT NULL,
    "updateAt" INTEGER NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bill" (
    "id" SERIAL NOT NULL,
    "client_id" INTEGER NOT NULL,
    "data" TEXT NOT NULL,
    "energy_unit" TEXT NOT NULL,
    "energy_price" INTEGER NOT NULL,
    "energy_amount" INTEGER NOT NULL,
    "energy_send_unit" INTEGER NOT NULL,
    "energy_send_price" INTEGER NOT NULL,
    "energy_send_amount" INTEGER NOT NULL,
    "contribution_lighting" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "create_at" INTEGER NOT NULL,
    "update_at" INTEGER NOT NULL,

    CONSTRAINT "bill_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bill" ADD CONSTRAINT "bill_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
