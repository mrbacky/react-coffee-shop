import {NextApiRequest, NextApiResponse} from "next";
import {
    clearCollection
} from "../../../utils/db/db-util";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case 'POST':
            await clearCollection(process.env.USER_COLLECTION)
            await clearCollection(process.env.ORDER_COLLECTION)
            await clearCollection(process.env.CART_COLLECTION)

            res.status(200).json({})
    }
}