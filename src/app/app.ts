import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from "./components/button/button";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portfolio';
  public button1 = "kkk";
  public button2 = "kkk2";

  public acao1() {
    window.alert("Botao1 clicado")
  }

  public acao2() {
    window.alert("Botao2 clicado")
  }
}
