import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GlassStatCard } from './components/glass-stat-card/glass-stat-card';
import { GradientCtaBanner } from './components/gradient-cta-banner/gradient-cta-banner';
import { FeatureChipList } from './components/feature-chip-list/feature-chip-list';

// Importaciones de tus 5 nuevos componentes
import { ProjectCardComponent } from './components/project-card/project-card';
import { UiAccordionComponent } from './components/ui-accordion/ui-accordion';
import { RadialSkillComponent } from './components/radial-skill/radial-skill';
import { AlertNoticeComponent } from './components/alert-notice/alert-notice';
import { HistoryTimelineComponent } from './components/history-timeline/history-timeline';

@Component({
  selector: 'app-ui-components-page',
  standalone: true,
  imports: [
    GlassStatCard, 
    GradientCtaBanner, 
    FeatureChipList,
    ProjectCardComponent,
    UiAccordionComponent,
    RadialSkillComponent,
    AlertNoticeComponent,
    HistoryTimelineComponent
  ],
  templateUrl: './ui-components-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UiComponentsPage {
  readonly quickChips = [
    'Glass Surface',
    'Gradient CTA',
    'Responsive Grid',
    'Standalone Components',
    'Tailwind + DaisyUI',
  ];

  readonly misTecnologias = ['Angular 21', 'TailwindCSS', 'TypeScript'];

  readonly proyectosEjemplo = [
    {
      titulo: 'Dashboard de Ciberseguridad',
      descripcion: 'Interfaz reactiva para auditoría de vulnerabilidades y escaneo de puertos.',
      tags: ['Cisco', 'Python', 'Tailwind'],
      badge: 'Lab'
    },
    {
      titulo: 'E-Commerce Platform',
      descripcion: 'Plataforma con gestión de catálogo usando señales avanzadas de Angular.',
      tags: ['Angular', 'TypeScript', 'DaisyUI'],
      badge: 'Nuevo'
    }
  ];

  readonly listaPreguntas = [
    {
      q: '¿Por qué usar Arquitectura Standalone?',
      a: 'Porque elimina la necesidad de manejar archivos NgModules complejos, facilitando la modularización directa.'
    },
    {
      q: '¿Cómo altera DaisyUI el flujo de Tailwind?',
      a: 'No lo altera, lo potencia. Añade clases semánticas de componentes pre-estilizados.'
    }
  ];

  // --- ¡AQUÍ ESTÁN LAS PROPIEDADES QUE TE FALTABAN! ---
  
  readonly misAlertas = [
    { tipo: 'alert-info', mensaje: 'Se han cargado los nuevos componentes del sistema base.' },
    { tipo: 'alert-success', mensaje: 'Conexión segura establecida con la base de datos de auditoría.' }
  ];

  readonly misHabilidades = [
    { nombre: 'Angular', porcentaje: 85, colorClass: 'text-primary' },
    { nombre: 'TypeScript', porcentaje: 75, colorClass: 'text-secondary' },
    { nombre: 'Cybersecurity', porcentaje: 90, colorClass: 'text-accent' }
  ];

  readonly miHistorial = [
    { anio: '2024', titulo: 'Inicio de Carrera', desc: 'Primeros laboratorios de redes y estructuras de datos.' },
    { anio: '2025', titulo: 'Especialización en Ciberseguridad', desc: 'Configuración avanzada de routing IPv6 y firewalls.' },
    { anio: '2026', titulo: 'Desarrollo Web Fullstack', desc: 'Creación de plataformas arquitectónicas con Angular y Node.js.' }
  ];
}