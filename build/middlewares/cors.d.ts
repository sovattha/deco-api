/// <reference types="qs" />
import { Request, Response, NextFunction } from 'express';
export declare class CorsMiddleware {
    static allowEverything(): (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction) => Response<any, Record<string, any>> | undefined;
}
//# sourceMappingURL=cors.d.ts.map