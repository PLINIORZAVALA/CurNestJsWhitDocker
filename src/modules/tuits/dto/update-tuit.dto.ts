import { IsString } from "class-validator";

export class UpdateTuitDtoTs {
    @IsString()
    readonly message: string;

}

