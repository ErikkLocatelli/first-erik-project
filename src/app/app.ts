import { Component } from '@angular/core';
import {NgFor, NgIf} from '@angular/common';


//import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks"; 


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Tasks, NgFor , NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  selectedUserId?: String; // definindo um usuário padrão para aparecer na tela inicialmente
  
  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId); // aqui ele utiiza o método find padrão do JS para encontrar o usuário que tenha o mesmo valor de id passado pela variável pega pelo veneto de click
  }

  onUserSelected(id: String)  {
    this.selectedUserId = id;
  } // Aqui o evento exportado na página de users é capturado e tratado da forma que deve e fica disponível para ser trabalhado, disposto etc no html do app file 

}