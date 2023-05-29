import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Evento } from 'src/app/interfaces/eventos';
import { EventoService } from 'src/app/services/evento.service';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  listEventos: Evento[] = [];  
  
  displayedColumns: string[] = ['idEvento', 'nombre', 'acciones'];
  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor (private _eventoService:EventoService, private _snackBar:MatSnackBar, private router:Router)  {}

  ngOnInit(): void {
    this.cargarEvento();
  }

  cargarEvento(){
    this.listEventos=this._eventoService.getEvento();
    this.dataSource=new MatTableDataSource(this.listEventos);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarEvento(index:number){
    this._eventoService.eliminarEvento(index);
    this.cargarEvento();
    this._snackBar.open('El evento fue eliminado con éxito', '', {
      duration:1500,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
}
