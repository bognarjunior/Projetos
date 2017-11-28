import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatCurrency'
})
export class FormatCurrencyPipe implements PipeTransform {

    transform(value: any, locale = 'pt-BR'): any {
        return new Intl.NumberFormat(locale).format(value);
    }

}
