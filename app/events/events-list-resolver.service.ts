import { EventService } from './shared/event.service'
import { Resolve } from '@angular/router'
import { Injectable } from '@angular/core'

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService:EventService) {

  }

  resolve() {
    return this.eventService.getEvents().map(events => events)
  }
}