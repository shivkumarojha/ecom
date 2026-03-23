import {
  integer,
  boolean,
  timestamp,
  pgTable,
  text,
} from "drizzle-orm/pg-core";

export const admin = pgTable("admin", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
});

export const products = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  productName: text("name"),
  description: text("description"),
  price: integer(),
  image_url: text("image_url"),
  is_published: boolean().default(false),
  quantity: integer(),
  created_at: timestamp().defaultNow().notNull(),
});
