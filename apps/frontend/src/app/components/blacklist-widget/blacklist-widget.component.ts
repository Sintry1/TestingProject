import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IBlacklist } from '@omnihost/interfaces';
//import { UpdateBlacklistDialogComponent } from '../../pages/blacklists/update-blacklist-dialog/update-blacklist-dialog.component';
import { ManagerAccessDialogComponent } from '../manager-access-dialog/manager-access-dialog.component';

@Component({
  selector: 'frontend-blacklist-widget',
  templateUrl: './blacklist-widget.component.html',
  styleUrls: ['./blacklist-widget.component.scss'],
})
export class BlacklistWidgetComponent {
  @Input() blacklist!: IBlacklist;

  constructor(private dialog: MatDialog) {}

  updateBlacklistDialog(): void {
    this.dialog.open(ManagerAccessDialogComponent, {
      width: '600px',
      data: {
        // component: UpdateBlacklistDialogComponent,
        componentData: this.blacklist,
        width: '600px',
      },
    });
  }

  displayName() {
    if (this.blacklist.name !== undefined) {
      if (this.blacklist.name?.length > 27) {
        return this.blacklist.name?.substring(0, 24) + '...';
      }
    }
    return this.blacklist.name;
  }

  // displayDate() {
  //   return this.blacklist.expiresAt.
  // }

}
