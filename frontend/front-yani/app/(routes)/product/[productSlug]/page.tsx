"use client"

import { useGetProductBySlug } from "@/api/getProductBySlug";
import { useParams } from "next/navigation";
import { ResponseType } from '@/types/response';
import SkeletonProduct from "./componentes/skeleton-product";
import CarouselProduct from "./componentes/carousel-product";
import InfoProduct from "./componentes/info-products";

export default function Page() {
  const params = useParams();
  const { productSlug } = params; 

  const { result} : ResponseType = useGetProductBySlug(productSlug);

  if( result === null) {
     return <SkeletonProduct />
  }

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24">
      <div className="grid sm:grid-cols-2">
        <div>
         <CarouselProduct images={result[0].attributes.images}/>
        </div>
        <div className="sm:px-12">
          <InfoProduct product={ result[0]}/>
        </div>
      </div>
    </div>
  );
}