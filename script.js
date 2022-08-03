const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)


const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.querySelector('canvas')
});



renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio)

//create a sphere

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.MeshBasicMaterial({
    // color:0xff0000


    map: new THREE.TextureLoader().load('mars.jpeg')
  })
)

const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(80, 80, 50);



scene.add(sphere, light)


camera.position.z = 30



function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.y += 0.009;



  renderer.render(scene, camera)
}

animate();
