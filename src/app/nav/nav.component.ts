import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  menuItems = ['dashboard', 'heroes', 'card-test'];
  smallBreakpoints = [Breakpoints.XSmall, Breakpoints.Small];

  isSmall: Observable<boolean> = this.breakpointObserver.observe(this.smallBreakpoints)
    .pipe(
      // tap(_ => console.log(`HANDSET CHANGED TO ${_.matches}`)),
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  toggleIfApplicable(drawer: MatSidenav) {
    if (this.breakpointObserver.isMatched(this.smallBreakpoints)) {
      // noinspection JSIgnoredPromiseFromCall
      drawer.toggle();
    }
  }
}
