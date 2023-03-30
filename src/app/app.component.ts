import { LogService } from './services/log.service';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, UserService, LogService]
})
export class AppComponent {
  title = 'ServiceExample';

  ngOnInit() {

  }
}
