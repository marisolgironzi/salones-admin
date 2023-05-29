import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Adicional } from 'src/app/interfaces/adicionales';
import { AdicionalService } from 'src/app/services/adicional.service';

@Component({
  selector: 'app-adicionales',
  templateUrl: './adicionales.component.html',
  styleUrls: ['./adicionales.component.css']
})
export class AdicionalesComponent {
  listAdicionales: Adicional[] = [];  
  
  displayedColumns: string[] = ['idAdicional', 'nombre', 'acciones'];
  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor (private _adicionalService:AdicionalService, private _snackBar:MatSnackBar, private router:Router)  {}

  ngOnInit(): void {
    this.cargarAdicional();
  }

  cargarAdicional(){
    this.listAdicionales=this._adicionalService.getAdicional();
    this.dataSource=new MatTableDataSource(this.listAdicionales);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarAdicional(index:number){
    this._adicionalService.eliminarAdicional(index);
    this.cargarAdicional();
    this._snackBar.open('El adicional fue eliminado con éxito', '', {
      duration:1500,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
}
