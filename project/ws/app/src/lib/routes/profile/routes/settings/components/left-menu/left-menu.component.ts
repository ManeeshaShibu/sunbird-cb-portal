import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import { ConfigurationsService , EventService, WsEvents } from '@sunbird-cb/utils-v2'
import { ActivatedRoute, Router } from '@angular/router'
/* tslint:disable*/
import _ from 'lodash'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'ws-app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
})
export class LeftMenuComponent implements OnInit, OnDestroy {

  @Input()
  tabsData!: any
  constructor(
    private events: EventService,
    private configSvc: ConfigurationsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService,
  ) {
    if (localStorage.getItem('websiteLanguage')) {
      this.translate.setDefaultLang('en')
      let lang = localStorage.getItem('websiteLanguage')!
      this.translate.use(lang)
    }
  }

  ngOnInit(): void {

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

  public tourClick(tab: any) {
    this.events.raiseInteractTelemetry(
      {
        type: WsEvents.EnumInteractTypes.CLICK,
        subType: WsEvents.EnumInteractSubTypes.SIDE_MENU,
        id: `${_.camelCase(tab.name)}-menu`,
      },
      { },
    )
    if (tab.name == "getStartedTour") {
      this.router.navigate(['/page/home'], { relativeTo: this.activatedRoute, queryParamsHandling: 'merge' })
      this.configSvc.updateTourGuideMethod(false)
    }
  }

  translateLetMenuName(menuName: string): string {
    const translationKey = 'settingLeftMenu.' + menuName.replace(/\s/g, "")
    return this.translate.instant(translationKey);
  }

}
