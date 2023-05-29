import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Salon } from 'src/app/interfaces/salones';
import { SalonService } from 'src/app/services/salon.service';

@Component({
  selector: 'app-salones',
  templateUrl: './salones.component.html',
  styleUrls: ['./salones.component.css']
})
export class SalonesComponent {
  listSalones: Salon[] = [];  
  
  displayedColumns: string[] = ['idSalon', 'nombre', 'capacidadDdesde', 'capacidadHasta', 'acciones'];
  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor (private _salonService:SalonService, private _snackBar:MatSnackBar, private router:Router)  {}

  ngOnInit(): void {
    this.cargarSalon();
  }

  cargarSalon(){
    this.listSalones=this._salonService.getSalon();
    this.dataSource=new MatTableDataSource(this.listSalones);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarSalon(index:number){
    this._salonService.eliminarSalon(index);
    this.cargarSalon();
    this._snackBar.open('El salón fue eliminado con éxito', '', {
      duration:1500,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
}
