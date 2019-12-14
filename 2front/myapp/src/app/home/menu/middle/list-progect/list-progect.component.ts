import {
  AfterViewChecked,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  TemplateRef
} from '@angular/core';
import {Service} from "../../../../shared/service";
import {Router} from "@angular/router";
import {Project} from "../../../../model/project";
import {Subscription} from "rxjs";
import {ModalService} from "../../../../shared/modalService";
import {ProjectService} from "../../../../shared/project.service";
import {UserService} from "../../../../shared/user.service";
import {User} from "../../../../model/user";
import {TaskService} from "../../../../shared/task.service";
import {Task} from "../../../../model/task";

@Component({
  selector: 'app-list-progect',
  templateUrl: './list-progect.component.html',
  styleUrls: ['./list-progect.component.css']
})
export class ListProgectComponent implements OnInit, DoCheck, OnDestroy {

  public projects: Project[];
  private subscriptions: Subscription[] = [];


  table1: string = " ";
  table2: string = " ";
  table3: string = " ";
  table4: string = " ";


  public allProject: Project[] = [];

  public allTask: Task[] = [];

  public allUsers: User[] = [];

  constructor(private userService: UserService,
              private taskService: TaskService,
              private projectService: ProjectService,
              private router: Router,
              private service: Service,
              private modalServ: ModalService){
              this.template(this.service.getIdUser())}







  ngOnInit(): void {
    switch (this.service.getIdUser()) {
      case 1:{
        this.projectService.getAllProject().subscribe((data: Project[]) => {
          data.forEach((p: Project) => this.allProject.push(p));
        });
        break;
      }
      case 2:{
        this.userService.getAllUser().subscribe((data: User[]) => {
          data.forEach((user: User) => this.allUsers.push(user));

        });
        this.projectService.getAllProject().subscribe((data: Project[]) => {
          data.forEach((p: Project) => this.allProject.push(p));
        });
        break;
      }
    }

  //  this.taskService.getTask().subscribe((data: Task[]) => {
    //       data.forEach((t: Task) => this.allTask.push(t));
    //     });
    //     this.userService.getAllUser().subscribe((data: User[]) => {
    //       data.forEach((user: User) => this.allUsers.push(user));
    //     });

  }


  goComponent(str: string) {
    this.router.navigate([str]);
  }

  ngOnDestroy(): void {}

  ngDoCheck() {this.template(this.service.getIdUser())}

  public template(number: number) {
//    switch (number) {
//       case 1: {
//           this.table1 = "Projects"
//         this.table2 = " "
//         this.table3 = "Status RFT"
//         this.table4 = " "
//         break;
//         break;
//       }
//       case 2: {
//         switch (this.service.flagUserList) {
//           case false: {
//             this.table1 = "Tasks"
//             this.table2 = " "
//             this.table3 = "Status RFT"
//             this.table4 = " "
//             break
//           }
//           case true: {
//             this.table1 = "Users"
//             this.table2 = " "
//             this.table3 = "Number of tasks"
//             this.table4 = " "
//             break
//           }
//         }
//         break
//       }
//       case 3: {
//         this.table1 = "Tasks"
//         this.table2 = " "
//         this.table3 = "Status RFT"
//         this.table4 = "Сomments"
//         break
//       }
//       case 4: {
//         this.table1 = "Tasks"
//         this.table2 = " "
//         this.table3 = "Status RFT"
//         this.table4 = "Сomments"
//         break
//       }
//     }
  }


//  public loadBillingAccounts(): void {
//     // Get data from BillingAccountService
//     this.subscriptions.push(this.service.getBillingAccounts().subscribe(accounts => {
//       // Parse json response into local array
//       this.projects = accounts as Project[];
//       // Check data in console
//       console.log(this.projects);// don't use console.log in angular :)
//     }));
//   }






}

