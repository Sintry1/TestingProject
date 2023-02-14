import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAnnouncement } from '@omnihost/interfaces';
import { FileUploadComponent } from '../../../components/file-upload/file-upload.component';
import { AnnouncementsService } from '../../../services/announcements.service';

@Component({
  selector: 'frontend-update-announcement-dialog',
  templateUrl: './update-announcement-dialog.component.html',
  styleUrls: ['../../../../assets/styles/dialog.scss', '../announcements.component.scss'],
})
export class UpdateAnnouncementDialogComponent implements OnInit {
  updateAnnouncementForm = new UntypedFormGroup({});
  isLoading = false;
  containsInvalidFiles = false;

  @ViewChild('fileUpload') fileUploadRef!: FileUploadComponent;
  @ViewChild('title') titleInput!: ElementRef;
  @ViewChild('comments') commentsInput!: ElementRef;
  @ViewChild('showFrom') showFromInput!: ElementRef;
  @ViewChild('showTo') showToInput!: ElementRef;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private announcementService: AnnouncementsService,
    @Inject(MAT_DIALOG_DATA) public data: IAnnouncement
  ) {}

  ngOnInit(): void {
    this.updateAnnouncementForm = new UntypedFormGroup({
      title: new UntypedFormControl(this.data.title, [Validators.required]),
      showFrom: new UntypedFormControl(this.data.showFrom, [Validators.required]),
      showTo: new UntypedFormControl(this.data.showTo, [Validators.required]),
      comments: new UntypedFormControl(this.data.comments, [
        Validators.maxLength(1000),
        Validators.required,
      ]),
    });
  }

  onSubmit(): void {
    if (!this.updateAnnouncementForm.valid) {
      if (this.updateAnnouncementForm.get('title')?.invalid) {
        this.titleInput.nativeElement.focus();
      } else if (this.updateAnnouncementForm.get('comments')?.invalid) {
        this.commentsInput.nativeElement.focus();
      } else if (this.updateAnnouncementForm.get('showFrom')?.invalid) {
        this.showFromInput.nativeElement.focus();
      } else if (this.updateAnnouncementForm.get('showTo')?.invalid) {
        this.showToInput.nativeElement.focus();
      } else if (this.containsInvalidFiles) {
        this.snackBar.open('Remove the invalid files before proceeding!', 'Okay', {
          duration: 10000,
        });
      }
    } else {
      this.updateAnnouncement();
    }
  }

  updateAnnouncement(): void {
    this.isLoading = true;
  }
}
