// import React from "react";
// import { fetchProducts } from "./api/ProductApi";
// import { useQuery } from "@tanstack/react-query";
// import ProductCard from "./components/ProductCard";

// const App = () => {
//   const {
//     data, //tumhare app me data initially undefined aayega jab api call hogi isme thoda sa time lagega abhi ke liye tum isme optional chaining kar do
//     isPending,
//   } = useQuery({
//     queryKey: ["products"],
//     queryFn: fetchProducts,
//   });

//   if (isPending) {
//     //ab question mark lagane ki bhi jarurat nahi kyu ki ye tumahare data ko tab aage jane degi jab tumhara data aa chuka hoga
//     return <h1>Loading...</h1>;
//   }
//   console.log(data);

//   return (
//     <div>
//       {data.products.map((elem) => {
//         return <ProductCard key={elem.id} product={elem} />;
//       })}
//     </div>
//   );
// };

// export default App;


import React, { useEffect } from "react";
import { fetchProducts } from "./api/ProductApi";
import { useInfiniteQuery} from "@tanstack/react-query";
import ProductCard from "./components/ProductCard";

const App = () => {
  const {
    data, 
    isLoading,
    hasNextPage,
    fetchNextPage
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    getNextPageParam : (lastPage , pages)=>{ //by default ye pageparam api me dete ho , pages matlab kitne pages ab tak aa chuke hai lastPage matlab current last page kon sa hai ya fir simple words me current page ka data
    //  console.log("lastPage",lastPage)
    //  console.log("pages",pages)
    //  getNextPageParam me tumhe logic likhna hai ki tumhe wo product nahi lana hai uske agle product lana hai
    let total = lastPage.total
    let loaded = pages.length * 20 //ye teeno logics apan button hide karne ke liye likhte hai
    if(loaded >= total){
      return undefined
    }
    return pages.length + 1 //matlab agla dundho
    }
  });

  useEffect(()=>{ //agar scrolling pe products load karte jana hai toh mera isme logic rahega mere ko chalate jana hai isliye useEffect
  let handleScrollToFetch = ()=>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight){ //kisse document ke div se jisme product load ho rahe hai
      fetchNextPage()
    }
  }
    window.addEventListener('scroll',handleScrollToFetch)
  },[])


  if (isLoading) {
    return <h1>Loading...</h1>;
  }
console.log("data-->",data)

  return (
    <div>
      {/* {data.pages[0].products.map((elem)=>{ //ispe loadMore karoge kuch hoga hi nahi kyuki tumne map laga ke rakha hai 0th index pe toh wo initial ke 20 products hi dikhayega 
        return <h1>{elem.title}</h1>
      })} */}
      {
        data.pages.map(page => page.products.map((elem)=>{ //toh pehle pages pe map lag gye toh agar 3 pages hai toh 3 pages ke andat jaayega ar unke andar products naam ki key hai unpe laga dega map
          return <h1 key={elem.id}>{elem.title}</h1>
        }))
      }
      <div>
        {hasNextPage ? <button onClick={fetchNextPage}>LoadMore</button> : null}
      </div>
    </div>
  );
};

export default App;


//pehle hume map lagana padega pages pe fir products pe do map lagenge is baar 