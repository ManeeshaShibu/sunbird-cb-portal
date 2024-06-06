import { Component, OnInit, Input } from '@angular/core'
import { NsWidgetResolver, WidgetBaseComponent } from '@sunbird-cb/resolver'
import { IWidgetElementHtml } from './element-html.model'
import { SafeHtml, DomSanitizer } from '@angular/platform-browser'
import mustache from 'mustache'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { TranslateService } from '@ngx-translate/core'
@Component({
  selector: 'ws-widget-element-html',
  templateUrl: './element-html.component.html',
  styleUrls: ['./element-html.component.scss'],
})
export class ElementHtmlComponent extends WidgetBaseComponent
  implements OnInit, NsWidgetResolver.IWidgetData<IWidgetElementHtml> {
  @Input() widgetData!: IWidgetElementHtml
  html: SafeHtml | null = null
  constructor(private domSanitizer: DomSanitizer, private http: HttpClient,private translate: TranslateService) {
    super()
  }

  async ngOnInit() {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8')
    if (this.widgetData.html) {
      const translatedHtml = await this.translateHTML(this.widgetData.html)
      this.html = this.domSanitizer.bypassSecurityTrustHtml(translatedHtml)
    } else if (this.widgetData.template && this.widgetData.templateData) {
      this.render(this.widgetData.template, this.widgetData.templateData)
    } else if (this.widgetData.template && this.widgetData.templateDataUrl) {
      try {
        const data = await this.http.get<any>(this.widgetData.templateDataUrl).toPromise()
        this.render(this.widgetData.template, data)
      } catch (er) { }
    } else if (this.widgetData.templateUrl && this.widgetData.templateData) {
      // For template, response needs to be modiefed
      const template = await this.http
        .get<string>(this.widgetData.templateUrl, {
          headers,
        })
        .toPromise()
      this.render(template, this.widgetData.templateData)
    } else if (this.widgetData.templateUrl && this.widgetData.templateDataUrl) {
      try {
        const [template, data] = await Promise.all([
          this.http.get<string>(this.widgetData.templateUrl, { headers }).toPromise(),
          this.http.get<any>(this.widgetData.templateDataUrl).toPromise(),
        ])
        this.render(template, data)
      } catch (er) { }
    }
  }
  async translateHTML(html: string): Promise<string> {
    const translations = {
    "Moderated Courses, Moderated Programs and Moderated Assessments for you.": "moderatedCoursesHTML",
    "Blended programs for you.": "blendedProgramsHtml",
    "Curated Programs.": "curatedPrograms",
    "Featured courses": "featuredCoursesHTML",
    "Standalone Assessment": "standaloneAssessmentHTML",
    "Recently added for you.": "recentlyAddedHtml"
    }
    
    for (const [originalText, translationKey] of Object.entries(translations)) {
    const translatedText = await this.translate.get(`contentstripmultiple.${translationKey}`).toPromise();
    html = html.replace(originalText, translatedText);
    }
    console.log('Translated HTML:', html);
    return html;
    }
    
    render(template: string, templateData: any) {
    const data = {
    ...templateData,
    __pageBase: `.${location.pathname}`.split('#')[0],
    translate: (key: string) => this.translate.instant(key),
    };
    const translatedTemplate = this.translate.instant(template);
    this.html = this.domSanitizer.bypassSecurityTrustHtml(mustache.render(translatedTemplate, data));
  }
    changeLanguage(language: string) {
    this.translate.use(language)
  }
}

