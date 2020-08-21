import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../products.service';
import { Products } from '../../products';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  sortType: 'hightolow' | 'lowtohigh';
  ProductsList: Products[] = [];
  LoadProducts: Products[] = [];
  EndCard: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productservice: ProductsService,
    private renderer: Renderer2,
    private spinner: NgxSpinnerService
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
    });
    this.productservice.productsList().subscribe((data) => {
      this.ProductsList = data;
      this.newmethod();
      this.LoadProducts = this.ProductsList.slice(0, 12);
    });
  }

  newmethod() {
    if (this.sortType === 'hightolow') {
    } else if (this.sortType === 'lowtohigh') {
      this.ProductsList = this.ProductsList.reverse();
    }
  }

  onScroll() {
    if (this.LoadProducts.length <= 24) {
      this.spinner.show();
      this.loadNextProducts();
    } else {
      this.spinner.hide();
      this.EndCard = true;
    }
  }

  loadNextProducts() {
    setTimeout(() => {
      this.LoadProducts = this.LoadProducts.concat(
        this.ProductsList.slice(
          this.LoadProducts.length,
          +this.LoadProducts.length + 12
        )
      );
    }, 1000);
  }
}
