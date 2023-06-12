import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent {
  products: any;

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    // this.products = this.productService.getProducts();

    const productObservable = this.productService.getProducts()
    productObservable.subscribe(
      (data) => {
        this.products = data
        // console.log('次のデータが出力されました： ' + data)
      },
      (err) => { console.error('次のエラーが発生しました: ' + err) }
      // () => { console.log('完了しました'); }
    )

    // const observable = new Observable((subscriber) => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });

    // // debugger // ブレイクポイントになる実行文
    // console.log('just before subscribe');
    // observable.subscribe({
    //   next(data) {
    //     console.log('次のデータが出力されました： ' + data);
    //   },
    //   error(err) {
    //     console.error('次のエラーが発生しました: ' + err);
    //   },
    //   complete() {
    //     console.log('完了しました');
    //   },
    // });
    // console.log('subscribeから抜けました！');


  }
}

