//scene, camera, renderer set up
import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGL3DRender({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRation(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

//objects
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  wireframe: true,
});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

//call render of the object
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
