import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { NSProfileDataV2 } from '../../models/profile-v2.model'
import { WsEvents, EventService, MultilingualTranslationsService } from '@sunbird-cb/utils-v2'
import { TranslateService } from '@ngx-translate/core'
/* tslint:disable*/
import _ from 'lodash'

@Component({
  selector: 'app-profile-v2-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
})
export class LeftMenuComponent implements OnInit, OnDestroy {

  @Input()
  tabsData!: NSProfileDataV2.IProfileTab
  constructor(
    private activatedRoute: ActivatedRoute,
    private events: EventService,
    private translate: TranslateService,
    private langtranslations: MultilingualTranslationsService,
  ) {
    if (localStorage.getItem('websiteLanguage')) {
      this.translate.setDefaultLang('en')
      let lang = localStorage.getItem('websiteLanguage')!
      this.translate.use(lang)
    }
    this.langtranslations.languageSelectedObservable.subscribe(() => {
      if (localStorage.getItem('websiteLanguage')) {
        this.translate.setDefaultLang('en')
        const lang = localStorage.getItem('websiteLanguage')!
        this.translate.use(lang)
      }
    })
  }

  ngOnInit(): void {

  }
  public isLinkActive(url: string): boolean {
    return (this.activatedRoute.snapshot.fragment === url)
  }
  ngOnDestroy() {

  }

  public menuClick(tab: any) {
    this.events.raiseInteractTelemetry(
      {
        type: WsEvents.EnumInteractTypes.CLICK,
        subType: WsEvents.EnumInteractSubTypes.SIDE_MENU,
        id: `${_.camelCase(tab.name)}-menu`,
      },
      { },
    )
  }

  translateLetMenuName(menuName: string): string {
    const translationKey = 'profileV2LeftMenu.' + menuName.replace(/\s/g, "")
    return this.translate.instant(translationKey);
  }
}
