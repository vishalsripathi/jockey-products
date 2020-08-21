import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../products.service';
import { Products } from '../../products';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  sortType: 'hightolow' | 'lowtohigh';
  ProductsList: Products[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productservice: ProductsService,
    private renderer: Renderer2
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.renderer.setStyle(document.body, 'background', 'white');
  }

  ngOnInit(): void {
    const url = this.route.snapshot.queryParams.sortType;
    if (!url) {
      this.router.navigate(['/list'], {
        queryParams: { sortType: 'hightolow' },
      });
    }
    this.route.queryParams.subscribe((data) => {
      this.sortType = data['sortType'];
      console.log(data['sortType']);
    });
    this.productservice.productsList().subscribe((data) => {
      this.ProductsList = data;
      this.newmethod();
    });
  }

  newmethod() {
    if (this.sortType === 'hightolow') {
      console.log(this.ProductsList);
    } else if (this.sortType === 'lowtohigh') {
      this.ProductsList = this.ProductsList.reverse();
      console.log(this.ProductsList);
    }
  }
}
