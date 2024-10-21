import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMenuDto {
    @IsNotEmpty()
    @IsString()
    dishname: string;

    @IsNotEmpty()
    @IsString()
    type: string;

    @IsNotEmpty()
    @IsNumber()
    price: string;
}
