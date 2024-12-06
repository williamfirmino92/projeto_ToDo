import { Injectable } from '@angular/core';

import { type NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Mestre Angular',
      summary:
        'Aprender todos os recursos básicos e avançados do Angular e como aplicá-los.',
      dueDate: '06-12-2024',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Construir o primeiro protótipo',
      summary: 'Construir um primeiro protótipo do site da loja online',
      dueDate: '06-12-2024',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Preparar modelo de projeto',
      summary:
        'Preparar e descrever um modelo de problema que ajudará no gerenciamento de projetos',
      dueDate: '06-12-2024',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
