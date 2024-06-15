import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componentes/login/login.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CommonModule, LoginComponent, ClientesComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rotas';
}
