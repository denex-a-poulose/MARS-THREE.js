# MARS-THREE.js

- This is a simple **THREE.js** project.   
- I used THREE.js's CDN to develop this.  
---
<h1 align="center"> UV map used</h1>


![images (19)](https://user-images.githubusercontent.com/107526656/183801702-127ea388-fa33-4a5f-9d48-2c9a8bb914f2.jpeg)

### SPHERE USED  

``` javascript

const sphere = new THREE.Mesh(

  new THREE.SphereGeometry(5, 50, 50),

  new THREE.MeshBasicMaterial({

    // color:0xff0000

    map: new THREE.TextureLoader().load('mars.jpeg')

  })

) 

```
