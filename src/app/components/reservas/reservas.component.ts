import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/interfaces/reservas';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  listReservas: Reserva[] = [];  
  
  displayedColumns: string[] = ['idReserva', 'idCliente', 'idSalon', 'idEvento', 'idAdicional', 'mes', 'anio', 'detalles', 'acciones'];
  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor (private _reservaService:ReservaService, private _snackBar:MatSnackBar, private router:Router)  {}

  ngOnInit(): void {
    this.cargarReserva();
  }

  cargarReserva(){
    this.listReservas=this._reservaService.getReserva();
    this.dataSource=new MatTableDataSource(this.listReservas);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarReserva(index:number){
    this._reservaService.eliminarReserva(index);
    this.cargarReserva();
    this._snackBar.open('La reserva fue eliminada con éxito', '', {
      duration:1500,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
}
