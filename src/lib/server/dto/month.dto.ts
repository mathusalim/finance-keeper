import type { MongoDto } from '.';

export interface MonthDto extends MongoDto {
	date: string;
	incomeIds: string[];
	spendingIds: string[];
	mainCurrencyId: string;
	rateIds: string[];
}
