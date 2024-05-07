import { ApiProperty } from "@nestjs/swagger";
export class CreateExtinctDto {
    @ApiProperty()
    name:string;

    @ApiProperty({required: false})
    description?: string;

    @ApiProperty()
    lastSee: string;

    @ApiProperty()
    countLastSee: number;

    @ApiProperty({required: true, default: true})
    extinct?: boolean = true;
}
