import { Directive } from "vue";

const lazyload: Directive  = {
    mounted(el) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const lazyImage = entry.target as HTMLImageElement;
                console.log(lazyImage.dataset);
                
                if (lazyImage.dataset.src) {
                  lazyImage.src = lazyImage.dataset.src;
                  observer.unobserve(lazyImage);
                }
              }
            });
          });
      
        observer.observe(el);
    }
}

export default lazyload