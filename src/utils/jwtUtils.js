import {jwtVerify, SignJWT} from "jose";

export async function createToken(user, pass){
    const secretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

    const payload = {user:user, pass:pass};

    let token = await new SignJWT(payload)
        .setProtectedHeader({alg:'HS256'})
        .setIssuedAt()
        .setIssuer(process.env.JWT_ISSUER)
        .setExpirationTime(process.env.JWT_EXPIRATION_TIME)
        .sign(secretKey)
    
    return token;
}

export async function verifyToken(token){
    const secretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
    const decoded = await jwtVerify(token, secretKey)
    return decoded['payload'];
}