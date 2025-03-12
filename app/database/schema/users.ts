import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";
import { company } from "./company";

export const users = pgTable("users", {
    userid: serial("userid").primaryKey(),
    companyid: integer("companyid").references(() => company.companyid, { onDelete: "cascade" }),
    username: varchar("username", { length: 255 }).notNull().unique(),
    fullname: varchar("fullname", { length: 255 }).notNull(),
    password: varchar("password", { length: 255 }).notNull(),
    role: integer("role").notNull()
});

export type usersModel = typeof users.$inferInsert;