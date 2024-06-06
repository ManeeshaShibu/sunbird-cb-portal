import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PendingRequestComponent } from './pending-request.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatDialogModule, MatIconModule } from '@angular/material'
import { AvatarPhotoModule } from './../avatar-photo/avatar-photo.module'
import { SkeletonLoaderModule } from '../skeleton-loader/skeleton-loader.module'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  declarations: [PendingRequestComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    AvatarPhotoModule,
    SkeletonLoaderModule,
    TranslateModule
  ],
  exports: [
    PendingRequestComponent,
  ],
  entryComponents: [PendingRequestComponent],
})
export class PendingRequestModule { }
