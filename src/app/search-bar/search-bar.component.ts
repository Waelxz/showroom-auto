import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Input() autos: any[] = []; // Input property to receive the car list
  @Output() filteredAutosChange = new EventEmitter<any[]>(); // Output property to emit the filtered list
  brand: string = ''; // This will hold the input value

  // Method to filter the car list based on the brand and model
  onInputChange() {
    // Optionally, filter dynamically as user types
    this.filterAutos();
  }

  // Method to handle the search button click
  onSearchClick() {
    this.filterAutos();
  }

  private filterAutos() {
    let filteredAutos = [];
    if (this.brand) {
      filteredAutos = this.autos.filter(car => 
        car.make.toLowerCase().includes(this.brand.toLowerCase()) || 
        car.model.toLowerCase().includes(this.brand.toLowerCase())
      );
    } else {
      filteredAutos = this.autos; // If the input is empty, show the full list
    }
    this.filteredAutosChange.emit(filteredAutos); // Emit the filtered results
  }
}
