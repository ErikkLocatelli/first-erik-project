import { Component, EventEmitter, Input, Output} from '@angular/core'


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class User {
  
  @Input({required: true}) user! : { id: String; name: String; avatar: String };

  @Output() select = new EventEmitter(); // outputando o evento para o componente pai


  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }


  onSelecUser() {
    this.select.emit(this.user.id); // emitindo o evento no arquivo raiz que tem input recebendo os dados
  }

}
