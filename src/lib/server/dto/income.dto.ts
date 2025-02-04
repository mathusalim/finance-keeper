import type { MongoDto } from '.';

export interface IncomeDto extends MongoDto {
	label: string;
	originalCurrencyId: string;
	originalValue: number;
	primaryCurrencyId: string;
	value: number;
}
