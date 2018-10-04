import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public options: Object = {
    placeholder: "Write your comment",
    events : {
      'froalaEditor.keyup' : function(e, editor) {
        //html.get() gets the html from the editor
        console.log(editor.html.get());
      }
    }
  }
}
