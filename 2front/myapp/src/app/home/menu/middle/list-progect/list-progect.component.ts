import {AfterViewChecked, Component, DoCheck, OnChanges, OnInit, SimpleChanges, TemplateRef} from '@angular/core';
import {Service} from "../../../../shared/service";
import {Router} from "@angular/router";
import {Project} from "../../../../model/project";
import {Subscription} from "rxjs";
import {ModalService} from "../../../../shared/modalService";

@Component({
  selector: 'app-list-progect',
  templateUrl: './list-progect.component.html',
  styleUrls: ['./list-progect.component.css']
})
export class ListProgectComponent implements OnInit,DoCheck{

  public projects: Project[];
  private subscriptions: Subscription[] = [];


  table1: string=" ";
  table2: string=" ";
  table3: string=" ";
  table4: string=" ";


  templates: any[] = ['templates'];
  templatesUsers: any[] = ['templatesUsers'];
  templatesProject: any[] = ['templatesProject'];
  templatesTasks: any[] = ['templatesTasks'];


  constructor(private router: Router, private service: Service, private modalServ :ModalService) {
    this.template(this.service.getIdiser())
  }



  ngOnInit() {
  //  this.loadBillingAccounts()// загруска таблицы
    this.service.fethDataBase().subscribe(() => {
    })
  }

  ngDoCheck(){this.template(this.service.getIdiser())}


  onLogin (template: TemplateRef<any>){
    this.modalServ._openModal(template);
  }


  public template(number: number) {
    switch (number) {
      case 1: {
        // this.templates = this.templatesProject;
          // this.templates = this.templatesProject;
          this.table1 = "Projects"
          this.table2 = " "
          this.table3 = "Status RFT"
          this.table4 = " "
          break;
        break;
      }
      case 2: {
      //  console.log(this.service.flagUserList)
        switch (this.service.flagUserList) {
          case false:{
            this.table1 = "Tasks"
            this.table2 = " "
            this.table3 = "Status RFT"
            this.table4 = " "
         //   this.templates = this.templatesProject;
            break
          }
          case true:{
            this.table1 = "Users"
            this.table2 = " "
            this.table3 = "Number of tasks"
            this.table4 = " "
         //   this.templates = this.templatesUsers;
            break
          }
        }
        break
      }
      case 3: {
     //   this.templates = this.templatesTasks;
        this.table1 = "Tasks"
        this.table2 = " "
        this.table3 = "Status RFT"
        this.table4 = "Сomments"
        break
      }
      case 4: {
     //   this.templates = this.templatesTasks;
        this.table1 = "Tasks"
        this.table2 = " "
        this.table3 = "Status RFT"
        this.table4 = "Сomments"
        break
      }
    }
  }





  // oncChange(id :number){
  //  this.onToggle.emit(id)
  //   this.service.onToggle(id)
  // }

  goComponent(str: string) {
    this.router.navigate([str]);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
 }


 public loadBillingAccounts(): void {
  // Get data from BillingAccountService
   this.subscriptions.push(this.service.getBillingAccounts().subscribe(accounts => {
    // Parse json response into local array
     this.projects = accounts as Project[];
     // Check data in console
     console.log(this.projects);// don't use console.log in angular :)
    }));
  }
}

