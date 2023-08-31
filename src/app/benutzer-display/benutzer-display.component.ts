import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { BenutzerNameAbbreviationPipe } from "./benutzer-name-abbreviation.pipe";

export interface Benutzer {
  vorname: string;
  nachname: string;
  benutzerId?: string;
}

@Component({
  selector: 'slo-benutzer-display',
  templateUrl: './benutzer-display.component.html',
  styleUrls: ['./benutzer-display.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatTooltipModule, BenutzerNameAbbreviationPipe],
})
export class BenutzerDisplayComponent {
  @Input()
  benutzer: Benutzer;


  @Input()
  @HostBinding('class.emphasize')
  emphasize: boolean;

  constructor() {}

  getTooltipText() {
    return this.benutzer.vorname + ' ' + this.benutzer.nachname;
  }
}
