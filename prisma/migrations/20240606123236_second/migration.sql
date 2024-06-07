-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_task_id_fkey";

-- AlterTable
ALTER TABLE "Document" ALTER COLUMN "task_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Task"("id") ON DELETE SET NULL ON UPDATE CASCADE;
