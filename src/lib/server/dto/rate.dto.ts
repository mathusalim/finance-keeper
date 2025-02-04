import type { MongoDto } from '.';

export interface RateDto extends MongoDto {
	sourceCurrencyId: string;
	targetCurrencyId: string;
	rate: number;
}
