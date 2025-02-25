import { Component } from '@angular/core';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { NgFor } from '@angular/common';
import { Product } from './interfaces/product.interface';

@Component({
  selector: 'app-root',
  imports: [ProductListComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 1500, inStock: true, onSale: false, image: "https://www.costco.com.mx/medias/sys_master/products/h67/hbf/188081224646686.jpg" },
    { id: 2, name: 'Smartphone', price: 800, inStock: true, onSale: true, image: "https://lamarinamx.vtexassets.com/arquivos/ids/813972/195949046995_1.jpg?v=638388006648230000"  },
    { id: 3, name: 'Tablet', price: 400, inStock: false, onSale: false, image: "https://i5-mx.walmartimages.com/mg/gm/1p/images/product-images/img_large/00880609559914l.jpg"  },
    { id: 4, name: 'Monitor', price: 200, inStock: true, onSale: true, image: "https://chobs.mistoremx.com/images/202311/goods_img/0_P_1700092365874.jpg"  },
    { id: 5, name: 'Teclado mecánico', price: 100, inStock: true, onSale: false, image: "https://s3-sa-east-1.amazonaws.com/saasargentina/BQG7m4OG04D87UWfyHPq/imagen"  },
    { id: 6, name: 'Mouse inalámbrico', price: 50, inStock: false, onSale: false, image: "https://www.stuffactory.mx/cdn/shop/files/copy_32b6fa43-c8c2-4600-b0ca-db582350f3e7.jpg?v=1721339348"  },
    { id: 7, name: 'Impresora láser', price: 250, inStock: true, onSale: true, image: "https://www.a4toner.com/blog/wp-content/uploads/2020/11/HP-Color-Laser-150A-1024x752.jpg.webp"  },
    { id: 8, name: 'Auriculares Bluetooth', price: 120, inStock: true, onSale: false, image: "https://http2.mlstatic.com/D_NQ_NP_996416-MLU73742464395_012024-O.webp"  },
    { id: 9, name: 'Silla ergonómica', price: 300, inStock: false, onSale: true, image: "https://toplivingmexico.com/cdn/shop/products/10066940007057-1.jpg?v=1734371562&width=1080"  },
    { id: 10, name: 'Micrófono profesional', price: 180, inStock: true, onSale: false, image: "https://www.redlemon.com.mx/cdn/shop/files/01_65d920cf-4adc-4d01-996d-e02a28c0e6dd.jpg"  },
    { id: 11, name: 'Disco SSD 1TB', price: 220, inStock: true, onSale: true, image: "https://m.media-amazon.com/images/I/5169n4UNj5L._AC_UF894,1000_QL80_.jpg"  },
    { id: 12, name: 'Cámara web 1080p', price: 90, inStock: true, onSale: false, image: "https://resource.logitech.com/w_800,c_lpad,ar_1:1,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/c922/gallery/c922-gallery-1.png?v=1"  },
    { id: 13, name: 'Router Wi-Fi 6', price: 160, inStock: false, onSale: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNVQuf-EjSMsUzXhRETfZw8qHVJkcjZGKMfA&s"  },
    { id: 14, name: 'Tarjeta gráfica RTX 4060', price: 500, inStock: true, onSale: false, image: "https://m.media-amazon.com/images/I/71t1ClD2EtL.jpg"  },
    { id: 15, name: 'Smartwatch', price: 250, inStock: true, onSale: true, image: "https://m.media-amazon.com/images/I/61yEHZXdi6L._AC_UF1000,1000_QL80_.jpg"  },
  ];

}
