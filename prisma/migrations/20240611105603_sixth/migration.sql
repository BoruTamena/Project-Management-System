/*
  Warnings:

  - You are about to drop the column `user_id` on the `Member` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_email]` on the table `Member` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_email` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_user_id_fkey";

-- DropIndex
DROP INDEX "Member_user_id_key";

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "user_id",
ADD COLUMN     "user_email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Member_user_email_key" ON "Member"("user_email");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
