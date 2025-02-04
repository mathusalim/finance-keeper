import type { MongoDto } from '.';

export interface SettingDto extends MongoDto {
	currencyIds: string[];
	tagIds: string[];
	choiceIds: string[];
	categoryIds: string[];
}
