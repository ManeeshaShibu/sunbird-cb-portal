import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PipeFilterModule, PipeFilterV2Module, PipeHtmlTagRemovalModule, PipeOrderByModule, PipeRelativeTimeModule } from '@sunbird-cb/utils'
import { CompetenceComponent } from './routes/competence-home/competence.component'
import { CompetencieRoutingModule } from './competence.rounting.module'
import { CompetenceCardComponent } from './components/competencies-card/competencies-card.component'
import { CompetenceViewComponent } from './components/competencies-view/competencies-view.component'
import { CompetenceProficiencyCardComponent } from './components/competencies-proficency-card/competencies-proficency-card.component'
import { LeftMenuComponent } from './components/left-menu/left-menu.component'
import { RightMenuComponent } from './components/right-menu/right-menu.component'
// import { BasicCKEditorComponent } from './components/basic-ckeditor/basic-ckeditor.component'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatDividerModule } from '@angular/material/divider'
import { WidgetResolverModule } from '@sunbird-cb/resolver'
import {
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatChipsModule,
  MatProgressSpinnerModule,
} from '@angular/material'
import { MatCardModule } from '@angular/material/card'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
/*CkEditorModule, CKEditorService,*/
import {  AvatarPhotoModule, BtnPageBackModule } from '@sunbird-cb/collection'
import { EditorSharedModule } from '@ws/author/src/lib/routing/modules/editor/shared/shared.module'
import { LoaderService } from '@ws/author/src/lib/services/loader.service'
import { InitResolver } from './resolvers/init-resolve.service'
import { CompetenceAllComponent } from './routes/competence-all/competence-all.component'
import { CompetenceSysComponent } from './routes/competence-sys/competence-sys.component'
import { CompetencyDetailedViewComponent } from './routes/competency-detailed-view/competency-detailed-view.component'
import { CompetencyAllWrapperComponent } from './routes/competency-all-wrapper/competency-all-wrapper.component'

@NgModule({
  declarations: [
    CompetenceCardComponent,
    CompetenceProficiencyCardComponent,
    CompetenceComponent,
    LeftMenuComponent,
    RightMenuComponent,
    CompetenceAllComponent,
    CompetenceSysComponent,
    CompetencyDetailedViewComponent,
    CompetencyAllWrapperComponent,
    CompetenceViewComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CompetencieRoutingModule,
    MatGridListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    PipeFilterModule,
    PipeHtmlTagRemovalModule,
    PipeRelativeTimeModule,
    AvatarPhotoModule,
    EditorSharedModule,
    PipeFilterV2Module,
    // CkEditorModule,
    PipeOrderByModule,
    BtnPageBackModule,
    WidgetResolverModule,
  ],
  entryComponents: [CompetenceViewComponent],
  providers: [
    // CKEditorService,
    LoaderService,
    InitResolver,
  ],
  exports: [],
})
export class CompetencieModule {

}
