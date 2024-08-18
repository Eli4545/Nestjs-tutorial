import { IsEmail, IsEnum, IsNotEmpty, isString, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name : string;

    @IsEmail()
    email : string;

    @IsEnum([ "INTERN","ENGENEER" ,'ADMIN'],{
        message : 'Valid role required'
    })
    role : "INTERN" | "ENGENEER" | 'ADMIN';

}