import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs";


export class AuthenticatedGuard implements CanActivate {

    async canActivate(context: ExecutionContext) {

        const request = await context.switchToHttp().getRequest();
        return request.isAuthenticated();
    }

}








