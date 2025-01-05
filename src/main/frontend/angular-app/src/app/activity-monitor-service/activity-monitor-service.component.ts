import { Injectable, NgZone } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { auditTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ActivityMonitorService {
  private inactivityTimeout: number = 1 * 60 * 60 * 1000; // 1 hour
  private isInactiveSubject: Subject<boolean> = new Subject<boolean>();
  private lastActivity: Date | null = null;

  constructor(private ngZone: NgZone) {
    this.startMonitoring();
  }

  // Observable para que outros componentes possam se inscrever
  get isInactive$(): Observable<boolean> {
    return this.isInactiveSubject.asObservable();
  }

  // Iniciar o monitoramento de atividade
  private startMonitoring() {
    this.ngZone.runOutsideAngular(() => {
      // Registre eventos para detectar atividade do usuário
      window.addEventListener('mousemove', () => this.resetTimer());
      window.addEventListener('keydown', () => this.resetTimer());
      window.addEventListener('scroll', () => this.resetTimer());
      window.addEventListener('click', () => this.resetTimer());

      // Inicie o temporizador de inatividade
      this.startInactivityTimer();
    });
  }

  // Reinicia o temporizador de inatividade
  private resetTimer() {
    this.lastActivity = new Date();
    this.isInactiveSubject.next(false); // Usuário está ativo
  }

  // Inicia o temporizador de inatividade
  private startInactivityTimer() {
    setInterval(() => {
      if (this.lastActivity) {
        const now = new Date();
        const diff = now.getTime() - this.lastActivity.getTime();

        if (diff > this.inactivityTimeout) {
          this.isInactiveSubject.next(true); // Usuário inativo
        }
      }
    }, 1000); // Verifica a cada segundo
  }
}
