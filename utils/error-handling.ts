import { NextApiRequest } from "next";

type httpMethods = "PUT" | "POST" | "GET" | "DELETE";
export default function allowedMethod(req: NextApiRequest, allowedMethod: httpMethods) {
  return req.method === allowedMethod;
}