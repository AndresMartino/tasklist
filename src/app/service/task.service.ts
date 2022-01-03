import { Injectable } from '@angular/core';
import {Task} from '../components/Task'
import {TASKS} from '../components/mock-tasks'
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTasks():Task[]{
    return TASKS

  }
}
