import type { MongoDto } from '.';

export interface SpendingDto extends MongoDto {
	label: string;
	originalCurrencyId: string;
	originalValue: number;
	primaryCurrencyId: string;
	value: number;
	categoryId: string;
	tagId: string;
	choiceIds: string[];
}
