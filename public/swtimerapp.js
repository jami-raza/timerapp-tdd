console.log('registered')
let cacheData = 'website'
const assets=[
    [
        "/static/js/bundle.js",
        "/static/js/0.chunk.js",
        "/static/js/main.chunk.js",
        "sockjs-node",
        "/swtimerapp.js",
        "/manifest.json",
        
        
    ]
]
self.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then(cache=>{
            cache.addAll(assets)
        }).catch((err)=>{
            console.log("err",err);
        })
    )
})



  self.addEventListener('fetch', event => {
    
        event.respondWith(
            caches.match(event.request)
                .then(cacheresponse => {
                    
                        console.log(cacheresponse)
                        return cacheresponse || fetch(event.request)
                     
            })
        )
    }
)