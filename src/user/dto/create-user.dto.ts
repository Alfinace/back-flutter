import { IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
	@IsNotEmpty({message:'Username cannot empty'})
	@IsString({message:'Username must be string'})
	username: string;

	@IsEmail({message:'Email is not valid'})
	email: string;

	@IsNotEmpty({message:' Password cannot empty'})
	password: string;

	codeVerfication: number
}
