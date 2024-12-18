import * as THREE from "three"; // todo  =>  aise hi import krte hai Three js ko :-

// Create The Scene :-

const scene = new THREE.Scene();

scene.background = new THREE.Color("pink");

//  Add The Camera :-

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
); // * hum yeha per camera ki value usko "1st" type ke acccording denge that is called FOV(Field of View) aur hum jaab bhi camera mein koi bhi prop dete hai to height aur width ke according hi dete hai,aur jo last ki 0.1 hai usko hum use krte hai pass ke liye (near),aur jo 1000 ko use krte hai door ke liye (far) ke liye

Camera.position.z = 5; // !aur yeha per hum apne camera ke position ko change bhi kr sekte hai

// Create and add a cube object for the show case purpose :-

const geometry = new THREE.BoxGeometry();

const material = new THREE.MeshLambertMaterial({
  color: "#468825",
  emissive: "#468825",
}); // ? yedi emissive by default black color leta hai

const cube = new THREE.Mesh(geometry, material); // mesh jo banta hai wo hamesa geometry aur material ka hi use krke banta hai

scene.add(cube);

// Add Lightining :-

const light = new THREE.DirectionalLight(0x9cdba6, 10); // yeha 1st color hota aur 2nd intensity hota hai

light.position.set(1, 1, 1); // That Means x = 1,y = 1,z = 1

scene.add(light);

// Set up the rendere

const rendrer = new THREE.WebGLRenderer();

rendrer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(render.domElement);

// Finally setup for the render

render.render(scene, camera);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01; // Example animation
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
