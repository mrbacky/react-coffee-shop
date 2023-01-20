/* eslint-disable no-case-declarations */
import { NextApiRequest, NextApiResponse } from "next";
import { clearCollection, connectToDatabase } from "../../../utils/db/db-util";
import { hashPassword } from "../../../utils/auth/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      const client = await connectToDatabase();
      const db = client.db();

      const hashedPassword = await hashPassword("1234567");

      await db.collection(process.env.USER_COLLECTION).insertOne({
        email: "testAccount@gmail.com",
        firstName: "fName",
        lastName: "lName",
        password: hashedPassword, // DO NOT STORE PLAIN PASSWORDS in database, must be encrypted.
      });

      res.status(200).json({});
  }
}
