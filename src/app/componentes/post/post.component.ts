import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() imgPost:string = 'https://www.libreriahuequito.com/public/images/productos/default.png';
  @Input() imgPerfil:string = '../../../assets/default-perfil.jpg';
  
  constructor() { }

  ngOnInit(): void {
  }

  
}
