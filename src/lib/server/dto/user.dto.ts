import type { MongoDto } from '.';

export interface UserDto extends MongoDto {
	name: string;
	settingId?: string;
	monthIds: string[];
}
