import {  HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DataAuthDto } from './dto/data-auth.dto';
import * as crypto from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private configService: ConfigService){}

    async signUp(user: DataAuthDto){
        const data = await this.prisma.user.findUnique({
            where:{
                email: user.email
            }
        });

        if(data){
            throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
        }

        const hash = await crypto.hash(user.password, 10);

        const data2 = await this.prisma.user.create({
            data:{
                email: user.email,
                password: hash
            }
        });

        const token = jwt.sign({id: data2.id}, this.configService.get('KEY'),{ expiresIn: "30d" });

        return {token: token};
    }

    async logIn(user: DataAuthDto){
        const data = await this.prisma.user.findUnique({
            where:{
                email: user.email
            }
        });

        if(!data){
            throw new HttpException('Email not found', HttpStatus.BAD_REQUEST);
        }

        const match = await crypto.compare(user.password, data.password);

        if(!match){
            throw new HttpException('Password not match', HttpStatus.BAD_REQUEST);
        }

        const token = jwt.sign({id: data.id}, this.configService.get('KEY'),{ expiresIn: "30d" });

        return {token: token};
    }

    async verify(token: string){
        try {
            const data = jwt.verify(token, this.configService.get('KEY'));
            return data;
        } catch (error) {
            throw new HttpException('Token invalid', HttpStatus.UNAUTHORIZED);
        }
    }
}
