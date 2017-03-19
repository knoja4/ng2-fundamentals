import { Router } from '@angular/router'
import { Component } from '@angular/core'
import { EventService } from './shared/index'

@Component({
  templateUrl: 'app/events/create-event.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {color:#999;}
    .error ::-moz-placeholder {color:#999;}
    .error :-moz-placeholder {color:#999;}
    .error :-ms-input-placeholder {color:#999;}
  `]  
})
export class CreateEventComponent {
  isDirty:boolean = true
  event:any
  
  constructor(private router: Router, private eventService: EventService) {
    
  }

  ngOnInit() {
    this.event = {
      name: '',
      date: '',
      time: '',
      price: null,
      location: {
        address: '',
        city: '',
        country: ''
      },
      onlineUrl: '',
      imageUrl: ''
    }
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues)
    this.isDirty = false
    this.router.navigate(['/events'])
  }

  cancel() {
    this.router.navigate(['/events'])
  }
}