import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfileCardStatsComponent } from './profile-card-stats.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatDialogModule, MatIconModule } from '@angular/material'
import { AvatarPhotoModule } from './../avatar-photo/avatar-photo.module'
import { SlidersDynamicModule } from './../../sliders-dynamic/sliders-dynamic.module'
import { PipeDurationTransformModule, PipeOrdinalModule } from '@sunbird-cb/utils-v2'
import { WeeklyClapsModule } from '../weekly-claps/weekly-claps.module'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  declarations: [ProfileCardStatsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    AvatarPhotoModule,
    SlidersDynamicModule,
    PipeDurationTransformModule,
    WeeklyClapsModule,
    TranslateModule,
    PipeOrdinalModule,
  ],
  exports: [
    ProfileCardStatsComponent,
  ],
  entryComponents: [ProfileCardStatsComponent],
})
export class ProfileCardStatsModule { }
