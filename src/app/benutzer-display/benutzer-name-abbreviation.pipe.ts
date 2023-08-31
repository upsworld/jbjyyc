import { Pipe, PipeTransform } from '@angular/core';
import { Benutzer } from './benutzer-display.component';

@Pipe({
  name: 'benutzerNameAbbreviation',
  standalone: true,
})
export class BenutzerNameAbbreviationPipe implements PipeTransform {
  transform(value: Pick<Benutzer, 'vorname' | 'nachname'>): string {
    return `${value?.vorname?.trim()[0] || ''}${value?.nachname?.trim()[0] || ''}` || '-';
  }
}
