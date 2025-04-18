import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import { verifyUserLogin } from '../services/auth.services';
import status from "http-status"
import config from "../constraints/config";

export const login = async (req, res) => {
    console.log(req.headers.authorization);
    const tokenId = req.headers.authorization;

    const authToken = await verifyUserLogin(tokenId);

    res.status(status.OK).json({ authToken });
}

export const access = (req, res) => {
    res.json("Authorised");
}