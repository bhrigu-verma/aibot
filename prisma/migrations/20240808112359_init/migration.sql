-- AlterTable
ALTER TABLE "ChatBot" ADD COLUMN     "detaill" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Detaill" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "domainId" UUID,

    CONSTRAINT "Detaill_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Detaill" ADD CONSTRAINT "Detaill_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "Domain"("id") ON DELETE CASCADE ON UPDATE CASCADE;
